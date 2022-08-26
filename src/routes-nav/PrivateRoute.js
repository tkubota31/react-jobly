import React, {useContext} from "react"
import {Routes,Route, Navigate} from "react-router-dom";
import UserContext from "../auth/UserContext"


function PrivateRoute({exact, path, children}){
    const {currentUser} = useContext(UserContext);

    if (!currentUser) {
        return <Navigate to="/login" />
}

    return(
        <Routes>
            <Route exact ={exact} path={path}>
                {children}
            </Route>
        </Routes>

    );
}

export default PrivateRoute
