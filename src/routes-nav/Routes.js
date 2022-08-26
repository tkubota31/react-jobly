import React from "react"
import {Routes ,Route, Navigate} from "react-router-dom"
import HomePage from "../homepage/Homepage"
import CompanyList from "../company/CompanyList"
import CompanyDetail from "../company/CompanyDetail"
import JobList from "../jobs/JobList"
import LoginForm from "../auth/LoginForm"
import SignupForm from "../auth/SignupForm"
import ProfileForm from "../profile/ProfileForm"
import PrivateRoute from "./PrivateRoute"

function AllRoutes ({login, signup}) {


    return(
        <div>
                {/* <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/companies" element={<PrivateRoute/>}>
                        <Route exact path="/companies" element={<CompanyList/>}/>
                    </Route>
                    <Route exact path="/companies/:handle" element={<PrivateRoute><CompanyDetail /></PrivateRoute>} />
                    <Route exact path = "/jobs" element={<PrivateRoute><JobList/></PrivateRoute>} />
                    <Route exact path ="/login" element={<LoginForm login={login}/>}/>
                    <Route exact path ="/signup" element={<SignupForm signup={signup} />}/>
                    <Route exact path="/profile" element ={<PrivateRoute><ProfileForm /></PrivateRoute>} />
                    <Route path="/" element={<Navigate to="/"/>}/>
                </Routes> */}

                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route exact path="/companies/*" element={<PrivateRoute/>}>
                        <Route exact path="/companies/*" element={<CompanyList/>}/>
                    </Route>
                    <Route exact path="/companies/:handle" element={<PrivateRoute/>}>
                        <Route exact path="/companies/:handle" element={<CompanyDetail/>}/>
                    </Route>
                    <Route exact path="/jobs/*" element={<PrivateRoute/>}>
                        <Route exact path="/jobs/*" element={<JobList/>}/>
                    </Route>
                    <Route exact path ="/login" element={<LoginForm login={login}/>}/>
                    <Route exact path ="/signup" element={<SignupForm signup={signup} />}/>
                    <Route exact path="/profile/*" element={<PrivateRoute/>}>
                        <Route exact path="/profile/*" element={<ProfileForm/>}/>
                    </Route>
                    <Route path="/" element={<Navigate to="/"/>}/>

                </Routes>
        </div>
    )
}

export default AllRoutes
