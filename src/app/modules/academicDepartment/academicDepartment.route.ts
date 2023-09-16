

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();


router.post(
    '/',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    validateRequest(AcademicDepartmentValidation.create),
    AcademicDepartmentController.insertIntoDb
);
router.get(
    '/',
    AcademicDepartmentController.getAll
);

router.patch(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    validateRequest(AcademicDepartmentValidation.update),
    AcademicDepartmentController.updateById
);


router.get(
    '/:id',
    AcademicDepartmentController.getById
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicDepartmentController.deleteById
);


export const AcademicDepartmenRoutes = router;