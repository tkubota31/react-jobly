import React, {useContext} from "react"
import {Link, NavLink} from "react-router-dom"
import UserContext from "../auth/UserContext"


function Navigation({logout}){
    const{ currentUser} = useContext(UserContext);

    function userLoggedIn(){
        return (
            <ul>
                <li>
                    <NavLink to="/companies">
                        Companies
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/jobs">
                        Jobs
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>

                <li>
                    <Link to="/" onClick={logout}>
                        Log out {currentUser.first_name || currentUser.username}
                    </Link>
                </li>
            </ul>
        )
    }

    function userLoggedOut(){
        return (
            <ul>
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        )
    }

    return (
        <nav>
            <Link to="/">
                Welcome
            </Link>
            {currentUser ? userLoggedIn() : userLoggedOut()}
        </nav>
    )
}

export default Navigation
