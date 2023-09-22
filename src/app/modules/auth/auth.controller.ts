

import { NextFunction, Request, Response } from 'express';
import config from '../../../config';
import sendResponse from '../../../shared/response';
import { AuthenticationService } from './auth.service';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AuthenticationService.loginUser(req);

        const { refreshToken, ...others } = result.data;

        const cookieOptions = {
            httpOnly: true,
            secure: config.env === 'production'
        };

        res.cookie('refreshToken', refreshToken, cookieOptions);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'User logged in successfully',
            data: others,
        })

    } catch (err) {
        next(err)
    }
}


const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AuthenticationService.refreshToken(req);

        const cookieOptions = {
            secure: config.env === 'production',
            httpOnly: true,
        }

        res.cookie('refreshToken', refreshToken, cookieOptions)

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Token refreshed successfully',
            data: result,
        })



    } catch (err) {
        next(err)
    }
}


export const AuthenticationController = {
    loginUser,
    refreshToken
}

