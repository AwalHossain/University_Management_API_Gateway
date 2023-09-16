import { NextFunction, Request, Response } from 'express';
import sendResponse from "../../../shared/response";
import { AcademicFacultyService } from './academicFaculty.service';


const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.insertIntoDb(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.getAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.getById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
}



const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.updateById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};


const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.deleteById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};




export const AcademicFacultyController = {
    insertIntoDb,
    getAll,
    updateById,
    deleteById,
    getById

}