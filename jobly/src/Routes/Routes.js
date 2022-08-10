import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function Routes () {


    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/companies" element={<CompanyList/>} />
                    <Route exact path="/companies/:id" element={<CompanyDetail/>}/>
                    <Route exact path="jobs" element={<JobList />}/>
                    <Route exact path ="/login" element={<LoginForm />}/>
                    <Route exact path ="/signup" element={<SignupForm />}/>
                    <Route exact path="/profile" element={<Profile />} />
                    <Route element={<Home/>}/>
                </Routes>

            </BrowserRouter>

        </div>
    )
}
