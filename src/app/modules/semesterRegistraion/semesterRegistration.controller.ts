/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../../shared/response";
import { SemesterRegistrationService } from "./semesterRegistration.service";


const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await SemesterRegistrationService.insertIntoDB(req)

        sendResponse(res, result)
    } catch (err) {
        next(err)
    }


}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.getAll(req)

        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


const getById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const result = await SemesterRegistrationService.getById(req, id);

        sendResponse(res, result)
    } catch (err) {
        next(err)
    }


}

const updateById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const result = await SemesterRegistrationService.updateById(req, id);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}

const deleteById = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { id } = req.params;
        const result = await SemesterRegistrationService.deleteById(req, id);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


const startMyRegistraion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.startMyRegistraion(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


const enrollCourse = async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    try {
        const result = await SemesterRegistrationService.enrollCourse(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }


}


const withdrawCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.withdrawCourse(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


const confirmMyRegistration = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SemesterRegistrationService.confirmMyRegistration(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


const getMyRegistration = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const result = await SemesterRegistrationService.getMyRegistration(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }
}


const startNewSemester = async (req: Request, res: Response, next: NextFunction) => {

    // const { id } = req.params;


    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: 'start new semester sucess',
    //     data: result
    // })


    try {
        const result = await SemesterRegistrationService.startNewSemester(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}

const getMySemesterRegCourse = async (req: Request, res: Response, next: NextFunction) => {
    // const user = (req as any).user;

    // console.log(result, 'result');

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: 'Semester Registraion course retrieved successfully',
    //     data: result
    // })

    try {
        const result = await SemesterRegistrationService.getMySemesterRegCourse(req);
        sendResponse(res, result)
    } catch (err) {
        next(err)
    }

}


export const SemesterRegistrationController = {
    insertIntoDB,
    getAll,
    getById,
    updateById,
    deleteById,
    startMyRegistraion,
    enrollCourse,
    withdrawCourse,
    confirmMyRegistration,
    getMyRegistration,
    startNewSemester,
    getMySemesterRegCourse
}