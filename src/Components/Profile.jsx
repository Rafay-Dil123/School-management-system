import React, { useEffect } from 'react'
import '../styleprofile.css';
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Profile({rollnumber}) {
           let [studentData,setstudentData]=useState([]);
          useEffect(()=>{
             
             getstudentinfo();
          },[])
         
          let getstudentinfo=async ()=>{
            let data=await fetch(`/api/studentsdata/${rollnumber}/`);
           let d=await data.json();
           console.log(d);
            setstudentData(d);
          }

   //  const studentData = {
   //      name: 'John Doe',
   //      rollNumber: '123456',
   //      department: 'Computer Science',
   //      batch: '2023',
   //      email: 'john.doe@example.com',
   //      group:'B+',
   //      dob:'23/7/2003',
   //      cnic:"3520128929876",
   //      nationality:'Pakistani',
   //      MobileNo:'03865627389',

   //   };

     const Academy= {
        Name: 'Kips',
        email: 'kips@gmail.com',
     };
  
     return (
        <div className='pageon'>
  
           <div id="page-body">
              <section className="home-section">
                
                  <motion.div style={{
        height:"20vh",
       }}
       animate={
        {
          translateY:"20px"
        }
       }
       transition={{
        duration:0.5,
        repeat:Infinity,
        repeatType:'reverse',
       }}
       >
          <div className="main-body">
                    <div className="student-info">
                       <h2>Acaedmic Information</h2>
                       <div>
                          <strong>Name:</strong> {studentData.name}
                       </div>
                       <div>
                          <strong>Roll Number:</strong> {studentData.rollNumber}
                       </div>
                       <div>
                          <strong>Department:</strong> {studentData.department}
                       </div>
                       <div>
                          <strong>Batch:</strong> {studentData.batch}
                       </div>
                       <div>
                          <strong>Email:</strong> {studentData.email}
                       </div>
                    </div>
                 </div>
       
       </motion.div>
               
              </section>

               {/* academy info */}
              <section className="home-section">
                 <div className="main-body">
                    <div className="student-info">
                       <h2>Other Academy info</h2>
                       <div>
                          <strong>Name:</strong> {Academy.Name}
                       </div>
                       
                       <div>
                          <strong>Department:</strong> {studentData.department}
                       </div>
                       <div>
                          <strong>Batch:</strong> {studentData.batch}
                       </div>
                       <div>
                          <strong>Email:</strong> {Academy.email}
                       </div>
                    </div>
                 </div>
              </section>

              {/* personal info */}
              <section className="home-section">
                 {/* <div className="text" style={{ fontWeight: 'bolder' }}>
                    <i className="bx bx-home"></i>&nbsp;Student Home Page
                 </div> */}
  
                 <div className="main-body">
                    <div className="student-info">
                       <h2>Personal Information</h2>
                       <div>
                          <strong>Name:</strong> {studentData.name}
                       </div>
                       <div>
                          <strong>Blood group:</strong> {studentData.group}
                       </div>
                       <div>
                          <strong>Cnic:</strong> {studentData.cnic}
                       </div>
                       <div>
                          <strong>DOB:</strong> {studentData.dob}
                       </div>
                       <div>
                          <strong>Mobile Number:</strong> {studentData.MobileNo}
                       </div>
                       <div>
                          <strong>Nationality:</strong> {studentData.nationality}
                       </div>
                    </div>
                 </div>
              </section>

            

           </div>
        </div>
     );
}

export default Profile
