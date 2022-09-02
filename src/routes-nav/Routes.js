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

                <Routes>
                    <Route  path="/"
                            element={<HomePage/>} />
                    <Route  path="/companies"
                            element={<PrivateRoute>
                                         <CompanyList />
                                     </PrivateRoute>}/>
                    <Route  path="/companies/:handle"
                            element={<PrivateRoute>
                                        <CompanyDetail />
                                    </PrivateRoute>}/>
                    <Route  path="/jobs"
                            element={<PrivateRoute>
                                        <JobList />
                                     </PrivateRoute>}/>
                    <Route  path ="/login"
                            element={<LoginForm login={login}/>}/>
                    <Route  path ="/signup"
                            element={<SignupForm signup={signup} />}/>
                    <Route  path="/profile"
                            element={<PrivateRoute>
                                        <ProfileForm/>
                                    </PrivateRoute>}/>
                    <Route path="/" element={<Navigate to="/"/>}/>

                </Routes>
        </div>
    )
}

export default AllRoutes
