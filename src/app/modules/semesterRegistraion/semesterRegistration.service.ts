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
        params: req.query,
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}

const getById = async (req: Request, id: string) => {

    const response: IGenericResponse = await CoreService.get(`/semester-registration/${id}`,
        {
            headers: {
                'Authorization': req.headers.authorization
            }
        });
    console.log(response, 'response');

    return response;

}
const updateById = async (req: Request, id: string) => {

    const response: IGenericResponse = await CoreService.patch(`/semester-registration/${id}`, req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}
const deleteById = async (req: Request, id: string) => {

    const response: IGenericResponse = await CoreService.delete(`/semester-registration/${id}`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    console.log(response, 'response');

    return response;

}

const startMyRegistraion = async (req: Request) => {

    console.log(req.headers.authorization, 'checking authorization');

    const response: IGenericResponse = await CoreService.post('semester-registration/start-my-registration', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;

}


const enrollCourse = async (req: Request) => {

    const response: IGenericResponse = await CoreService.post('semester-registration/enroll-course', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;

}


const withdrawCourse = async (req: Request) => {

    const response: IGenericResponse = await CoreService.post('semester-registration/withdraw-course', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;

}


const confirmMyRegistration = async (req: Request) => {
    const response: IGenericResponse = await CoreService.post('semester-registration/withdraw-course', req.body, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;

}

const getMyRegistration = async (req: Request) => {
    const response: IGenericResponse = await CoreService.get('semester-registration/get-my-registration', {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;
}


const startNewSemester = async (req: Request) => {
    const { id } = req.params;
    const response: IGenericResponse = await CoreService.get(`semester-registration/${id}/start-new-semester`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;
}


const getMySemesterRegCourse = async (req: Request) => {

    const response: IGenericResponse = await CoreService.get(`semester-registration/semester-reg-course`, {
        headers: {
            'Authorization': req.headers.authorization
        }
    });
    return response;

}


export const SemesterRegistrationService = {
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
    getMySemesterRegCourse,
    startNewSemester,
}
