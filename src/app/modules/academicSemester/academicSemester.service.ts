
import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;
}

const getAll = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get('/academic-semesters',
        {
            params: req.query,
            headers: {
                'Authorization': req.headers.authorization
            }
        });

    return response;
}

const getById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response;
}

const updateById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.patch(`/academic-semesters/${id}`, req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response;
}


const deleteById = async (req: Request): Promise<IGenericResponse> => {

    const { id } = req.params;

    const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });

    return response;
}


export const AcademicSemesterService = {
    insertIntoDb,
    getAll,
    updateById,
    getById,
    deleteById

}