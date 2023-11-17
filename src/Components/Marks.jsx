// // StudentMarks.js

// import React from "react";
// import Navbar from "./navbar";
// //import '../styleprofile.css';

// function StudentMarks() {
//   const marksData = [
//     { course: "Mathematics", marks: 90 },
//     { course: "Computer Science", marks: 85 },
//     { course: "Physics", marks: 92 },
//     // Add more courses as needed
//   ];

//   return (
//     <>
//       <Navbar />

//       <table>
//         <thead>
//           <tr>
//             {marksData.map((mark, index) => (
//               <div key={index}>
//                 <th>{mark.course}</th>
//               </div>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {marksData.map((mark, index) => (
//               <div key={index}>
//                 <th>{mark.marks}</th>
//               </div>
//             ))}
//           </tr>
//           {/* Add more attendance data as needed */}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default StudentMarks;

import React from 'react';
import '../stylemarks.css';
import Navbar from './navbar';

function Marks() {
  const marksData = [

    {
        course: "English",
        tests: [
          { test: "Test 1", marks: 90 },
          { test: "Test 2", marks: 85 },
          { test: "Final Exam", marks: 92 },
        ],
      },
      {
        course: "Urdu",
        tests: [
          { test: "Test 1", marks: 90 },
          { test: "Test 2", marks: 85 },
          { test: "Final Exam", marks: 92 },
        ],
      },
    {
      course: "Mathematics",
      tests: [
        { test: "Test 1", marks: 90 },
        { test: "Test 2", marks: 85 },
        { test: "Final Exam", marks: 92 },
      ],
    },
    {
      course: "Computer Science",
      tests: [
        { test: "Test 1", marks: 80 },
        { test: "Test 2", marks: 88 },
        { test: "Final Exam", marks: 95 },
      ],
    },

    {
        course: "Physics",
        tests: [
          { test: "Test 1", marks: 80 },
          { test: "Test 2", marks: 88 },
          { test: "Final Exam", marks: 95 },
        ],
      },
    // Add more courses as needed
  ];

  return (
    <>
      <Navbar />

      <div className="marks-container">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              {marksData[0]?.tests.map((test, index) => (
                <th key={index}>{test.test}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {marksData.map((course, courseIndex) => (
              <tr key={courseIndex}>
                <td>{course.course}</td>
                {course.tests.map((test, testIndex) => (
                  <td>{test.marks}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Marks;
