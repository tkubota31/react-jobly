// import React, {useState} from "react"
// import {useNavigate} from "react-router-dom"
// import Alert from "../general/Alert"

// function SignupForm({signup}){
//     let initialState = {
//         username: "",
//         password: "",
//         firstName: "",
//         lastName: "",
//         email: "",
//     }
//     const navigate = useNavigate()
//     const[formData, setFormData] = useState({initialState})
//     const [formErrors, setFormErrors] = useState([])

//     async function handleSubmit(e){
//         e.preventDefault()
//         let result = await signup(formData)
//         if(result.success){
//             navigate("/companies")
//         } else{
//             setFormErrors(result.errors)
//         }
//     }

//     function handleChange(e){
//         const{name,value} = e.target
//         setFormData(fData => ({...fData, [name]: value}))
//     }

//     return (
//         <div>
//             <h3>Sign Up!</h3>
//             <div>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="username">Username</label>
//                         <input name="username"
//                                value={formData.username || ""}
//                                onChange={handleChange}
//                                required
//                                autoComplete="off"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="password">Password</label>
//                         <input name="password"
//                                type="password"
//                                value={formData.password || ""}
//                                onChange={handleChange}
//                                required
//                                autoComplete ="off"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="firstName">First Name</label>
//                         <input name="firstName"
//                                value={formData.firstName || ""}
//                                onChange={handleChange}
//                                type="text"
//                                required
//                                autoComplete ="off"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="lastName">Last Name</label>
//                         <input name="lastName"
//                                value={formData.lastName || ""}
//                                onChange={handleChange}
//                                type="text"
//                                required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="email">Email</label>
//                         <input name="email"
//                                value={formData.email || ""}
//                                onChange={handleChange}
//                                type="email"
//                                required
//                                autoComplete ="off"
//                         />
//                     </div>

//                     {formErrors.length
//                     ? <Alert type="danger" messages = {formErrors}/>
//                         : null
//                         }

//                     <button onSubmit={handleSubmit}>Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignupForm


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../general/Alert";

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirects to /companies route
 *
 * Routes -> SignupForm -> Alert
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      navigate("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
      <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username || ""}
                      onChange={handleChange}
                      autoComplete = "off"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password || ""}
                      onChange={handleChange}
                      autoComplete = "off"
                  />
                </div>

                <div className="form-group">
                  <label>First name</label>
                  <input
                      name="firstName"
                      className="form-control"
                      value={formData.firstName || ""}
                      onChange={handleChange}
                      autoComplete = "off"
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                      name="lastName"
                      className="form-control"
                      value={formData.lastName || ""}
                      onChange={handleChange}
                      autoComplete = "off"
                  />
                </div>
                <div className="form-group">

                    <label htmlFor="email">Email</label>
                    <input name="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    type="email"
                    required
                    autoComplete ="off"
                    className="form-control"
                            />
                </div>

                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SignupForm;
