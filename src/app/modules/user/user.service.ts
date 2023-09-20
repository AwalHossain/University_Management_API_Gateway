
import { Request } from 'express';
import uploadCloudinary from '../../../helpers/cloudinary';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
    const file = req.file;
    const uploadImage = await uploadCloudinary(file);

    if (uploadImage) {
        req.body.profileImage = uploadImage.secure_url;
    }

    const { academicFaculty, academicDepartment, academicSemester } = req.body.student;

    console.log(academicFaculty, academicDepartment, academicSemester, 'checking faculty departmen semester');


    const academicDepartmentResponse = await AuthService.get(`/academic-departments?syncId=${academicDepartment}`)


    if (academicDepartmentResponse.data.length > 0 && Array.isArray(academicDepartmentResponse.data)) {
        req.body.student.academicDepartment = academicDepartmentResponse.data[0]._id;
    }

    const facultyResponse = await AuthService.get(`/academic-faculties?syncId=${academicFaculty}`)

    if (facultyResponse.data.length > 0 && Array.isArray(facultyResponse.data)) {
        req.body.student.academicFaculty = facultyResponse.data[0]._id;
    }

    const semesterResponse = await AuthService.get(`/academic-semesters?syncId=${academicSemester}`)
    if (semesterResponse.data.length > 0 && Array.isArray(semesterResponse.data)) {
        req.body.student.academicSemester = semesterResponse.data[0]._id;
    }

    const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });

    console.log(response, 'response');
    return response;
}


export const UserService = {
    createStudent
}