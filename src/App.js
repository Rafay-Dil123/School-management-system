import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherLogin from "./Components/TeacherLogin";

function App() {
  return (
   
    
    <Routes>
    <Route path="/*" element={<Home/>} />
      <Route path="/teacher/*" element={<TeacherLogin/>} />
     
      {/* <Route path="/attendance" element={<Attendance />} />
      <Route path="/timetable" element={<TimeTable />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/marks" element={<Marks />} />
      <Route path="/feegeneration" element={<FeeGeneration />} />
      <Route path="/cg" element={<CourseRegistration/>} /> */}
    </Routes>
 

  );
}

export default App;
