import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import uploadMiddleware from '../../middlewares/multer';
import { UserController } from './user.controller';
const router = express.Router();


router.post(
    '/create-student',
    uploadMiddleware,
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    UserController.createStudent
);


export const userRoutes = router;