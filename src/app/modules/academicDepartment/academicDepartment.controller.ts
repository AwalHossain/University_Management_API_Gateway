import { NextFunction, Request, Response } from 'express';
import sendResponse from "../../../shared/response";
import { AcademicDepartmentService } from './academicDepartment.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.insertIntoDb(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.getAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.getById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
}



const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.updateById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};


const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.deleteById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};




export const AcademicDepartmentController = {
    insertIntoDb,
    getAll,
    updateById,
    deleteById,
    getById

}