import { Route, Routes } from 'react-router-dom';
// import './css/home.css'
import Index from './layouts';
import AddStudentPerformance from './layouts/AddStudentPerformance';
import CoordinatorCreateProgram from './layouts/CoordinatorCreateProgram';
import ProgramDetail from './layouts/ProgramDetail';
import StudentDetail from './layouts/StudentDetail';
import StudentPerformance from './layouts/StudentPerformance';
import StudentPerformanceDetail from './layouts/StudentPerformanceDetail';
import About from './layouts/about';
import Admin from './layouts/admin';
import Chat from './layouts/chat';
import Contact from './layouts/contact';
import Coordinator from './layouts/coordinator';
import Courses from './layouts/courses';
import Discussion from './layouts/discussion';
import ForgotPasword from './layouts/forgotPasword';
import Instructor from './layouts/instructor';
import Login from './layouts/login';
import QAOfficer from './layouts/qa';
import Register from './layouts/register';
import Student from './layouts/student';
import StudentAccount from './layouts/studentAccount';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/courses' element={<Courses />} />

      <Route path='/forgort-password' element={<ForgotPasword />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/student' element={<Student />} />
      <Route path='/student-account' element={<StudentAccount />} />
      <Route path='/student-detail/:id?' element={<StudentDetail />} />
      <Route path='/student-performance-detail/:id?' element={<StudentPerformanceDetail />} />
      <Route path='/student-performance' element={<StudentPerformance />} />

      <Route path='/add-student-performance' element={<AddStudentPerformance />} />



      <Route path='/qa-officer' element={<QAOfficer />} />
      <Route path='/instructor' element={<Instructor />} />

      <Route path='/chat' element={<Chat />} />
      <Route path='/discussion' element={<Discussion />} />
      <Route path='/coordinator' element={<Coordinator />} />

      <Route path='/create-program' element={<CoordinatorCreateProgram />} />
      <Route path='/program-detail/:id?' element={<ProgramDetail />} />



    </Routes>
  );
}

export default App;
