// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// const baseUrl = 'http://127.0.0.1:8000/api';
// function Login() {
//   const Navigate = useNavigate();
//   const [teacherLoginData, setteacherLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const handleChange = (event) => {
//     setteacherLoginData({
//       ...teacherLoginData,
//       [event.target.name]: event.target.value
//     });
//   }
//   const submitForm = () => {
//     // console.log(teacherLoginData); 
//     const teacherFormData = new FormData;
//     teacherFormData.append('email', teacherLoginData.email)
//     teacherFormData.append('password', teacherLoginData.password)
//     try {
//       axios.post(baseUrl + '/instructor_login', teacherFormData)
//         .then((res) => {
//           if (res.data.bool === true) {
//             localStorage.setItem('teacherLoginStatus', true);
//             Navigate('/Home');
//           }
//         });
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     document.title = 'Teacher Login'
//   });
//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <form>
//           <h1 className="login-title">Login</h1>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email" value={teacherLoginData.email}
//               name='email' onChange={handleChange}
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password" value={teacherLoginData.password}
//               name='password' onChange={handleChange}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           {/* <Link to="/Home"> Link to the Home page */}

//           {/* <button type="submit" onClick={submitForm} className="btn btn-primary"> */}
//           {/* Login
//             </button>
//           </Link> */}
//           <button type="submit" onClick={submitForm} className="btn btn-primary">
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// const baseUrl = 'http://127.0.0.1:8000/api';
// function Login() {
//   const Navigate = useNavigate();
//   const [teacherLoginData, setteacherLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const handleChange = (event) => {
//     setteacherLoginData({
//       ...teacherLoginData,
//       [event.target.name]: event.target.value
//     });
//   }
//   const submitForm = () => {
//     // console.log(teacherLoginData);
//     const teacherFormData = new FormData;
//     teacherFormData.append('email', teacherLoginData.email)
//     teacherFormData.append('password', teacherLoginData.password)
//     try {
//       axios.post(baseUrl + '/instructor_login', teacherFormData)
//         .then((res) => {
//           if (res.data.bool === true) {
//             localStorage.setItem('teacherLoginStatus', true);
//             // Redirect the user to the Home page
//             Navigate("/Home");
//           }
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     document.title = 'Teacher Login'
//   });
//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <form>
//           <h1 className="login-title">Login</h1>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email" value={teacherLoginData.email}
//               name='email' onChange={handleChange}
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password" value={teacherLoginData.password}
//               name='password' onChange={handleChange}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           {/* <Link to="/Home"> Link to the Home page */}

//           {/* <button type="submit" onClick={submitForm} className="btn btn-primary"> */}
//           {/* Login
//           {/* </button>
//           {/* </Link> */}
//           <button type="submit" onClick={submitForm} className="btn btn-primary">
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;




// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom"; // Import useHistory
// import axios from 'axios';

// // ...rest of your code

// const baseUrl = 'http://127.0.0.1:8000/api';

// function Login() {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });

//   const history = useHistory(); // Now, you're importing useHistory correctly

//   const handleChange = (event) => {
//     setLoginData({
//       ...loginData,
//       [event.target.name]: event.target.value
//     });
//   }

//   const submitForm = () => {
//     const formData = new FormData();
//     formData.append('email', loginData.email);
//     formData.append('password', loginData.password);

//     axios.post(baseUrl + '/login', formData)
//       .then((res) => {
//         if (res.data.bool) {
//           if (res.data.user_type === 'instructor') {
//             // Instructor is logged in, navigate to Instructor's Home page
//             history.push('/Frontend/Teacher/src/Components/Home');
//           } else if (res.data.user_type === 'student') {
//             // Student is logged in, navigate to Student's Home page
//             history.push('/student/home');
//           }
//         } else {
//           // Display an error message for unsuccessful login
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <form>
//           <h1 className="login-title">Login</h1>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               value={loginData.email}
//               name="email"
//               onChange={handleChange}
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               value={loginData.password}
//               name="password"
//               onChange={handleChange}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           <button type="button" onClick={submitForm} className="btn btn-primary">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



///-----------------------------------------//

// import React, { useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import axios from 'axios';
// // import App from "../../../Teacher/src/Components/TeacherApp";

// const baseUrl = 'http://127.0.0.1:8000/api';

// function Login() {
//     const navigate = useNavigate();
//     const [loginData, setLoginData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (event) => {
//         setLoginData({
//             ...loginData,
//             [event.target.name]: event.target.value
//         });
//     }

//     const submitForm = () => {
//         const formData = new FormData();
//         formData.append('email', loginData.email);
//         formData.append('password', loginData.password);

//         axios.post(baseUrl + '/instructor_login', formData)
//             .then((res) => {
//                 if (res.data.user_type === 'instructor') {
//                     localStorage.setItem('userType', 'instructor');
//                     // Redirect to the Teacher's Home page
//                     navigate("/Teacher/src/Components/TeacherApp");
//                 } else if (res.data.user_type === 'student') {
//                     localStorage.setItem('userType', 'student');
//                     // Redirect to the Student's Home page
//                     navigate("/Student/src/Components/Home");
//                 } else {
//                     // Handle invalid login
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     return (
//         <div className="login-page">
//             <div className="login-container">
//                 <form>
//                     <h1 className="login-title">Login</h1>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputEmail1">Email address</label>
//                         <input
//                             type="email"
//                             value={loginData.email}
//                             name='email'
//                             onChange={handleChange}
//                             className="form-control"
//                             id="exampleInputEmail1"
//                             aria-describedby="emailHelp"
//                             placeholder="Enter email"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="exampleInputPassword1">Password</label>
//                         <input
//                             type="password"
//                             value={loginData.password}
//                             name='password'
//                             onChange={handleChange}
//                             className="form-control"
//                             id="exampleInputPassword1"
//                             placeholder="Password"
//                         />
//                     </div>
//                     <button type="button" onClick={submitForm} className="btn btn-primary">
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;




import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const formData = new FormData();
        formData.append('email', loginData.email);
        formData.append('password', loginData.password);

        axios.post(baseUrl + '/instructor_login', formData)
            .then((res) => {
                if (res.data.user_type === 'instructor') {
                    localStorage.setItem('userType', 'instructor');
                    // Redirect to the Instructor Home page
                    navigate("/Teacher");
                    
                } else if (res.data.user_type === 'student') {
                    localStorage.setItem('userType', 'student');
                    // Redirect to the Student Home page
                    navigate("/Student");
                   
                } else {
                    // Handle invalid login
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        // Your login form JSX remains the same
        <div className="login-page">
            <div className="login-container">
                <form>
                    <h1 className="login-title">Login</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            value={loginData.email}
                            name='email'
                            onChange={handleChange}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            value={loginData.password}
                            name='password'
                            onChange={handleChange}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Login;
