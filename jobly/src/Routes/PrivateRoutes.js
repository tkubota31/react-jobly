import React, {useContext} from "react"
import {Route, Navigate} from "react-router-dom";
import UserContext from "../auth/UserContext"


function PrivateRoute({exact, path, children}){
    const {currentUser} = useContext(UserContext);

    return !currentUser ? (<Navigate to="login" />
    ) : (
        <Route exact ={exact} path={path}>
            {children}
        </Route>
    );
}

export default PrivateRoute
