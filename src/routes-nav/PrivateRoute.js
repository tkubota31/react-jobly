import React, {useContext} from "react"
import {Routes,Route, Navigate} from "react-router-dom";
import UserContext from "../auth/UserContext"


function PrivateRoute({children}){
    const {currentUser} = useContext(UserContext);

    if (!currentUser) {
        return <Navigate to="/login" />
}


    return(children );
}

export default PrivateRoute
