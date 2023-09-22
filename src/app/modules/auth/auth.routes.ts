import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthenticationController } from './auth.controller';
import { AuthValidation } from './auth.validation';
const router = express.Router();


router.post(
    '/login',
    validateRequest(AuthValidation.loginZodSchema),
    AuthenticationController.loginUser
);

router.post(
    '/refresh-token',
    validateRequest(AuthValidation.refreshTokenZodSchema),
    AuthenticationController.refreshToken
);


export const authRoutes = router;