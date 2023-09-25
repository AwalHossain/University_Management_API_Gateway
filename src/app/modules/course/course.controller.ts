import { NextFunction, Request, Response } from 'express'
import sendResponse from "../../../shared/response"
import { courseService } from './course.service'

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await courseService.insertIntoDB(req)

        sendResponse(res, result)
    } catch (err) {
        next(err)
    }


}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await courseService.getAll(req)

        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


const getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const result = await courseService.getById(req, id);

        sendResponse(res, result)
    } catch (err) {
        next(err)
    }


}

const updateById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const result = await courseService.updateById(req, id);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}

const deleteById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const result = await courseService.deleteById(req, id);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


export const courseController = {
    insertIntoDB,
    getAll,
    getById,
    updateById,
    deleteById,
}