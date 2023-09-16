import { NextFunction, Request, Response } from 'express';
import sendResponse from "../../../shared/response";
import { AcademicSemesterService } from "./academicSemester.service";

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.insertIntoDb(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.getAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.getById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
}



const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.updateById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};


const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.deleteById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};




export const AcademicSemesterController = {
    insertIntoDb,
    getAll,
    updateById,
    deleteById,
    getById

}