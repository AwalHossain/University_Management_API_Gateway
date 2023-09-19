
import { Request } from 'express';
import uploadCloudinary from '../../../helpers/cloudinary';

const createStudent = async (req: Request) => {
    const file = req.file;
    console.log(file);

    const uploadImage = await uploadCloudinary(file);

    console.log(uploadImage, 'uploadImage');
}


export const UserService = {
    createStudent
}