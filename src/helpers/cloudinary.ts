

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import config from '../config';

const cloudinaryConfig = {
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
};

cloudinary.config(
    cloudinaryConfig
);



//upload image to cloudinary

const uploadCloudinary = async (file: any) => {
    try {
        const uploadImage = await cloudinary.uploader.upload(file.path, {
            folder: 'a2b',
            use_filename: true
        });
        fs.unlinkSync(file.path); // Delete the file after the upload
        return uploadImage;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export default uploadCloudinary;