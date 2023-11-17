import React from "react";
import Attendance from "./Attendance";
import Profile from "./Profile";
import TimeTable from "./TimeTable";
import Marks from "./Marks";
import FeeGeneration from "./FeeGeneration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Student() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Profile />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/feegeneration" element={<FeeGeneration />} />
        </Routes>
      </Router>
  );
}

export default Student;
