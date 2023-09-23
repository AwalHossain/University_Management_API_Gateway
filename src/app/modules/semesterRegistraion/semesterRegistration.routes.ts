

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';

const router = express.Router();


router.post(
    '/',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    validateRequest(SemesterRegistrationValidation.create),
    SemesterRegistrationController.insertIntoDB
);
router.get(
    '/',
    SemesterRegistrationController.getAll
);

router.get('/:id',
    SemesterRegistrationController.getById)

router.patch('/:id',
    validateRequest(SemesterRegistrationValidation.update),
    SemesterRegistrationController.updateById)

router.delete('/:id',
    SemesterRegistrationController.deleteById)



// router.get(
//     '/:id',
//     BuildingController.getById
// );

// router.delete(
//     '/:id',
//     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//     BuildingController.deleteById
// );


export const SemesterRegistrationRoutes = router;