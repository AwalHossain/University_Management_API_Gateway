import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../errors/apiError';
import { JwtHelper } from '../../helpers/jwtHelper';

const auth =
  (...requiredRoles: string[]) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        //get authorization token
        console.log(req.headers, 'verifiedUser');
        const token = req.headers.authorization;
        if (!token) {
          throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }
        // verify token
        let verifiedUser = null;

        verifiedUser = JwtHelper.verifyToken(token);
        console.log(verifiedUser, 'verifiedUser');

        if (!verifiedUser) {
          throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
        }
        // role diye guard korar jnno
        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
          throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
        }
        next();
      } catch (error) {
        next(error);
      }
    };

export default auth;
