import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentController } from './manageDepartment.controller';
import { ManagementDepartmentValidation } from './manageDepartment.validation';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllFromDB);
router.get('/:id', ManagementDepartmentController.getByIdFromDB);

router.post(
    '/',
    validateRequest(ManagementDepartmentValidation.create),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    ManagementDepartmentController.insertIntoDB
);

router.patch(
    '/:id',
    validateRequest(ManagementDepartmentValidation.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    ManagementDepartmentController.updateOneInDB
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    ManagementDepartmentController.deleteByIdFromDB
);

export const managementDepartmentRoutes = router;