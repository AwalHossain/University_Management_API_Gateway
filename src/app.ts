import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalExceptionHandler';
import routes from './app/routes';

const app: Application = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/v1', routes);
app.get('/', (req, res) => {
  res.send("Server started Successfully")
})

app.use(globalErrorHandler);

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API not found',
    errorMessages: [
      {
        path: '',
        message: 'API not found'
      }
    ]
  });
});

export default app;
