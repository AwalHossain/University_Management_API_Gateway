
import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/academic-faculties', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}

const getAll = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get('/academic-faculties',
        {
            params: req.query,
            headers: {
                'Authorization': req.headers.authorization
            }
        });

    return response.data;
}

const getById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.get(`/academic-faculties/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}

const updateById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.patch(`/academic-faculties/${id}`, req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}


const deleteById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.delete(`/academic-faculties/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response.data;
}


export const AcademicFacultyService = {
    insertIntoDb,
    getAll,
    updateById,
    getById,
    deleteById
}