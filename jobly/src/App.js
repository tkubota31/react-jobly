import React, {useState, useEffect} from "react"
import {BrowserRouter} from "react-router-dom"
import useLocalStorage from "./hooks/useLocalStorage"
import UserContext from "./auth/UserContext"
import Navigation from "./routes/Navigation"
import Routes from "./routes/Routes"
import jwt from "jsonwebtoken"
import JoblyApi from "../api"


function App() {
  const [infoLoaded, setInfoLoaded] = useState(false)
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("jobly-token")


  useEffect(function loadUser(){
    async function getCurrentUser(){
      if(token){
        try{
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications))
        } catch (err){
          console.error("Problem with loading User", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true)
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData){
    try{
      let token = await JoblyApi.signup(signupData);
      setToken(token)
      return {success:true};
    } catch (err){
      console.error("failed", err);
      return {success: false, err}
    }
  }

  async function login(loginData){
    try{
      let token = await JoblyApi.login(loginData);
      setToken(token)
      return {success:true};
    } catch (err){
      console.error("failed", err);
      return {success: false, err}
    }
    }
  }
}

export default App;
