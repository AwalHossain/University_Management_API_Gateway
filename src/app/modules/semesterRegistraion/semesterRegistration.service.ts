import { Request } from "express";
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";







const insertIntoDB = async (req: Request) => {
    console.log(req.body, 'checking body');

    const response: IGenericResponse = await CoreService.post('/semester-registration', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}

const getAll = async (req: Request) => {
    console.log(req.body, 'checking body');

    const response: IGenericResponse = await CoreService.get('/semester-registration', {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}




export const SemesterRegistrationService = {
    insertIntoDB
}
