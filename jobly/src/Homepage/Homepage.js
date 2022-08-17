import React, {useContext} from "react"
import {Link} from "react-router-dom"
import UserContext from "../auth/UserContext"

function Homepage(){
    const {currentUser} = UserContext(UserContext)

    return(
       <div>
            <h2>Welcome to Jobly! </h2>
            {currentUser ?
            <h2>
                Hello {currentUser.firstName || currentUser.username}
            </h2>
            :
            (
            <p>
                <Link to="/login">
                Login
                </Link>
                <Link to="/signup">
                Sign up
                </Link>
            </p>
            )}
         </div>
    )
}

export default Homepage
