import React from 'react'
import '../styleprofile.css';

function Profile() {
    const studentData = {
        name: 'John Doe',
        rollNumber: '123456',
        department: 'Computer Science',
        batch: '2023',
        email: 'john.doe@example.com',
     };
  
     return (
        <div>
           <Navbar />
  
           <div id="page-body">
              <section className="home-section">
                 <div className="text" style={{ fontWeight: 'bolder' }}>
                    <i className="bx bx-home"></i>&nbsp;Student Home Page
                 </div>
  
                 <div className="main-body">
                    <div className="student-info">
                       <h2>Personal Information</h2>
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
              </section>
           </div>
        </div>
     );
}

export default Profile
