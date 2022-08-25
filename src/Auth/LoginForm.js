import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

function LoginForm({login}){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({username : "",  password: ""})

    async function handleSubmit(e){
        e.preventDefault()
        let result = await login(formData);
        if(result.success){
            navigate("/companies")
        } else {
            setFormData({username:"", password:""})
        }
    }

    function handleChange(e){
        const{name,value} = e.target;
        setFormData(fData => ({...fData, [name]:value}));
    }

    return (
        <div>
            <h3>Log In!</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                            <input name="username"
                                    value = {formData.username || ""}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password"
                               value={formData.password || ""}
                               onChange={handleChange}
                               type= "password"
                               placeholder="password"
                               required />
                    </div>

                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
