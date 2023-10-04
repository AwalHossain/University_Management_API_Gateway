import express from 'express';
import { AcademicDepartmenRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemeserRoutes } from '../modules/academicSemester/academicSemester.route';
import { authRoutes } from '../modules/auth/auth.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { managementDepartmentRoutes } from '../modules/managementDepartment/manageDepartment.route';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistraion/semesterRegistration.routes';
import { userRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: AcademicSemeserRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmenRoutes
  },
  {
    path: '/buildings',
    routes: BuildingRoutes
  },
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/course',
    routes: courseRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
