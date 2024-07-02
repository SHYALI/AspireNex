import React from "react";
import './Projects.css';

export default function Projects(){
   return (
       <div className="container">
           <div className="pitem box1">
               <h1>Todo application</h1>
               <p>A Full-Stack To-Do application using the MERN stack (MongoDB, Express.js, React, and Node.js) offers a modern, dynamic solution for managing tasks.</p>
   <div className="icon2">
   <li className="list"><a href="https://github.com/SHYALI/full-stack-to-do-application"><i className="fa-brands fa-github fa-2x"></i></a></li>
   </div>
           </div>
           <div className="pitem">
               <h1>form validation application</h1>   
               <p>a React form with validation for required fields without using third party libraries, Display error messages, disable submission until fields are filled correctly, and show all the filled details on a new route post-successful submission. </p>
                <div className="icon1">
                <li className="list"><a href="https://github.com/SHYALI/Forms-and-Form-Validation"><i className="fa-brands fa-github fa-2x"></i></a></li>
                </div>
           </div>
           <div className="pitem">
               <h1>React Dashboard</h1>
               <p>A React Dashboard is a dynamic, interactive user interface built with React.js, tailored for displaying and managing complex data. It integrates powerful libraries and tools to offer real-time.</p>
               <div className="icon3">
               <li className="list"><a href="https://github.com/shyali/Dashboard"><i className="fa-brands fa-github fa-2x"></i></a></li>
               </div>
           </div>
           <div className="pitem">
               <h1>portfolio</h1>
               <p>A personal website/portfolio of mine. Built using react.js, three.js, html and css</p>
               <div className="icon4">
               <li className="list"><a href="https://github.com/shyali/AspireNex/portfolio"><i className="fa-brands fa-github fa-2x"></i></a></li>
               </div>
           </div>
       </div>
   )
}