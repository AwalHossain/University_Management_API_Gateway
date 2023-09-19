

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
    const uploadImage = await cloudinary.uploader.upload(file.path, {
        folder: 'a2b',
        use_filename: true
    }, (err: any, result: any) => {
        fs.unlinkSync(file.path);
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }

    );
    return uploadImage;
}

export default uploadCloudinary;