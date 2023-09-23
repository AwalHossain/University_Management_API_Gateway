/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shared/response";
import { SemesterRegistrationService } from "./semesterRegistration.service";


const insertIntoDB = async (req: Request, res: Response) => {

    try {
        const result = await SemesterRegistrationService.insertIntoDB(req)

        sendResponse(
            res, {
            success: true,
            statusCode: httpStatus.CREATED,
            message: "Semester registration created successfully",
            data: result
        })
    } catch (err) {

    }


}

const getAll = async (req: Request, res: Response) => {
    try {

    } catch (err) {

    }

}


const getById = async (req: Request, res: Response) => {
    // const { id } = req.params;

    // const result = await SemesterRegistrationService.getById(id);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Semester registration fetched successfully",
    //     data: result
    // })
    try {

    } catch (err) {

    }

}

const updateById = async (req: Request, res: Response) => {
    // const { id } = req.params;
    // const result = await SemesterRegistrationService.updateById(id, req.body);

    // sendResponse(
    //     res, {
    //     success: true,

    //     statusCode: httpStatus.OK,
    //     message: "Semester registration updated successfully",
    //     data: result
    // })

    try {

    } catch (err) {

    }

}

const deleteById = async (req: Request, res: Response) => {
    // const { id } = req.params;

    // const result = await SemesterRegistrationService.deleteById(id);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Semester registration deleted successfully",

    //     data: result
    // })

    try {

    } catch (err) {

    }

}


const startMyRegistraion = async (req: Request, res: Response) => {
    const user = (req as any).user;
    // console.log(user,'check');

    // const result = await SemesterRegistrationService.startMyRegistraion(user.userId);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Semester registration sucess",
    //     data: result
    // })

    try {

    } catch (err) {

    }

}


const enrollCourse = async (req: Request, res: Response) => {
    const user = (req as any).user;

    // const result = await SemesterRegistrationService.enrollToCourse(user.userId, req.body);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Course enrolled successfully",
    //     data: result
    // })

    try {

    } catch (err) {

    }


}


const withdrawCourse = async (req: Request, res: Response) => {
    // const user = (req as any).user;

    // const result = await SemesterRegistrationService.withdrawCourse(user.userId, req.body);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Course withdrawn successfully",
    //     data: result
    // })

    try {

    } catch (err) {

    }

}


const confirmMyRegistration = async (req: Request, res: Response) => {
    // const user = (req as any).user;

    // const result = await SemesterRegistrationService.confirmMyRegistration(user?.userId);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Registration confirmed successfully",
    //     data: result
    // })


    try {

    } catch (err) {

    }

}


const getMyRegistration = async (req: Request, res: Response) => {
    // const user = (req as any).user;
    // const result = await SemesterRegistrationService.getMyRegistration(user?.userId);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: "Registration fetched = successfully",
    //     data: result
    // })


    try {

    } catch (err) {

    }
}


const startNewSemester = async (req: Request, res: Response) => {

    // const { id } = req.params;

    // const result = await SemesterRegistrationService.startNewSemester(id);

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: 'start new semester sucess',
    //     data: result
    // })


    try {

    } catch (err) {

    }

}

const getMySemesterRegCourse = async (req: Request, res: Response) => {
    // const user = (req as any).user;

    // const result = await SemesterRegistrationService.getMySemesterRegCourse(user?.userId);
    // console.log(result, 'result');

    // sendResponse(
    //     res, {
    //     success: true,
    //     statusCode: httpStatus.OK,
    //     message: 'Semester Registraion course retrieved successfully',
    //     data: result
    // })

    try {

    } catch (err) {

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