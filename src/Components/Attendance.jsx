import React, { useState } from 'react';
import Navbar from './navbar';
import '../styleattendance.css';

function Attendance() {
  const [selectedCourse, setSelectedCourse] = useState('courseA'); // Default course

  // Define attendance data for a student in different courses
  const studentAttendance = {
    'John Doe': {
      courseA: [
        { date: '2023-01-01', status: 'P' },
        { date: '2023-01-02', status: 'A' },
        { date: '2023-01-03', status: 'P' },
        // Add more attendance data for courseA as needed
      ],
      courseB: [
        { date: '2023-01-01', status: 'P' },
        { date: '2023-01-02', status: 'P' },
        { date: '2023-01-03', status: 'A' },
        // Add more attendance data for courseB as needed
      ],
      // Add more courses as needed
    },
    // Add more students as needed
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const getAttendanceTable = () => {
    // For simplicity, using a default student ('John Doe') in this example
    const studentData = studentAttendance['John Doe'];

    if (!studentData || !studentData[selectedCourse]) {
      return <p>No attendance data available for the selected course.</p>;
    }

    // Display attendance table for the default student and selected course
    const attendanceList = studentData[selectedCourse];

    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.map((attendance, index) => (
            <tr key={index}>
              <td>{attendance.date}</td>
              <td>{attendance.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="ccc">
      <Navbar />
      <div className="attendance-container">
        <h2>Student Attendance</h2>

        <div className="course-selector">
          <label htmlFor="course">Select course:</label>
          <select id="course" name="course" value={selectedCourse} onChange={handleCourseChange}>
            <option value="courseA">course A</option>
            <option value="courseB">course B</option>
            {/* Add more courses as needed */}
          </select>
        </div>

        {/* Display attendance for the default student and selected course */}
        <div className="attendance-table">
          {getAttendanceTable()}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
