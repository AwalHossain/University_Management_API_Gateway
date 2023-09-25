import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { courseController } from './course.controller';
import { CourseValidation } from './course.validation';


const router = express.Router();


router.post(
    '/',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    validateRequest(CourseValidation.create),
    courseController.insertIntoDB
);
router.get(
    '/',
    courseController.getAll
);

router.get('/:id',
    courseController.getById)

router.patch('/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    validateRequest(CourseValidation.update),
    courseController.updateById)

router.delete('/:id',
    courseController.deleteById)


export const courseRoutes = router;