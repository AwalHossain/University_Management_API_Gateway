import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';


const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const file = req.file;
        const result = UserService.createStudent(req);
    } catch (err) {
        next(err);
    }
}


export const UserController = {
    createStudent
}