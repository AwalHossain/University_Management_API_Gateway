

import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { AcademicFacultyController } from './academicFaculty.controller';


const router = express.Router();


router.post(
    '/',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.insertIntoDb
);
router.get(
    '/',
    AcademicFacultyController.getAll
);

router.patch(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.updateById
);


router.get(
    '/:id',
    AcademicFacultyController.getById
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    AcademicFacultyController.deleteById
);


export const AcademicFacultyRoutes = router;