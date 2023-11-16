import React, { useState } from 'react';
import '../style.css';
import Student from './Student';
import preloader from './preloaderr';
export default function Home() {
    const [registration,setregistration] = useState(false);
    const [name,setname]=useState("");
    const [password,setpassword]=useState("");

    const func=(event)=>{
        event.preventDefault();
        console.log(name);
        console.log(password);
        setregistration(true);
    }
  return (
   
<>
   {registration?(
      
      <>
      {/* <preloader/> */}
   <Student />
    </>
        ):(
        <div>
         
<div className="sidenav">
         <div className="login-main-text">
            <h2>Student Application<br/> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>Roll-Number</label>
                     <input type="text" className="form-control" value={name} onChange={(event)=>{setname(event.target.value)}} placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" value={password} onChange={(event)=>{setpassword(event.target.value)}} placeholder="Password"/>
                  </div>
                  <div className="spacedalo">
                  <button type="submit" className="btn btn-black" onClick={func}>Login</button>
                  <button type="submit" className="btn btn-black">Register</button>
                  </div>
               </form>

            </div>
         </div>
      </div>
      </div>
     )}
</>
    );
}
