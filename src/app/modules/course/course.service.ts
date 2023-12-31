import { Request } from 'express';
import { IGenericResponse } from "../../../interfaces/common";
import { CoreService } from "../../../shared/axios";



const insertIntoDB = async (req: Request) => {
    console.log(req.body, 'checking body');

    const response: IGenericResponse = await CoreService.post('/course', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}

const getAll = async (req: Request) => {
    console.log(req.body, 'checking body');

    const response: IGenericResponse = await CoreService.get('/course', {
        params: req.query,
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}

const getById = async (req: Request, id: string) => {

    const response: IGenericResponse = await CoreService.get(`/course/${id}`,
        {
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    console.log(response, 'response');

    return response;

}
const updateById = async (req: Request, id: string) => {

    const response: IGenericResponse = await CoreService.patch(`/course/${id}`, req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}
const deleteById = async (req: Request, id: string) => {

    const response: IGenericResponse = await CoreService.delete(`/course/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}


export const courseService = {
    insertIntoDB,
    getAll,
    getById,
    updateById,
    deleteById
}