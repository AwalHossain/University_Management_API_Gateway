
import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/academic-departments', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response.data;
}

const getAll = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get('/academic-departments',
        {
            params: req.query,
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    console.log(response, 'response from the deprtmen');


    return response.data;
}

const getById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.get(`/academic-departments/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}

const updateById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.patch(`/academic-departments/${id}`, req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}


const deleteById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.delete(`/academic-departments/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}


export const AcademicDepartmentService = {
    insertIntoDb,
    getAll,
    updateById,
    getById,
    deleteById

}