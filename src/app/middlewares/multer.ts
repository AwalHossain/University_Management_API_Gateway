import { NextFunction, Request, Response } from "express";
import multer from "multer";
import ApiError from "../../errors/apiError";
import sendResponse from "../../shared/response";

let storage = multer.diskStorage({
    // with multer ts types
    destination: (req: Request, file: Express.Multer.File, cb: Function) => {
        cb(null, './uploads')
    },
    filename: (req: Request, file: Express.Multer.File, cb: Function) => {
        // with multer ts types
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const fileExt = file.originalname.split('.').pop(); // get the file extension
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExt); // add the file extension to the file name
    }
})


// fileFilter

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        // accept a file
        cb(null, true);
    } else {
        // reject a file
        cb(new ApiError(402, 'File Type not supported'), false);
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter }).single('image');


const uploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
    upload(req, res, function (err: any) {
        if (err) {
            console.log(err);
            sendResponse(res, {
                success: false,
                statusCode: 402,
                data: null,
                message: err.message
            });
        } else {
            next()
        }
    })
}


export default uploadMiddleware;