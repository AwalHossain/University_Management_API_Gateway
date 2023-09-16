import { NextFunction, Request, Response } from 'express';
import sendResponse from "../../../shared/response";
import { BuildingService } from './building.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.insertIntoDb(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.getAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.getById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
}



const updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.updateById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};


const deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BuildingService.deleteById(req);
        sendResponse(res, result);
    } catch (err) {
        next(err);
    }
};




export const BuildingController = {
    insertIntoDb,
    getAll,
    updateById,
    deleteById,
    getById

}