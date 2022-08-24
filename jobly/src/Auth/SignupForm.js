import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import Alert from "../general/Alert"

function SignupForm({signup}){
    let initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    }
    const navigate = useNavigate()
    const[formData, setFormData] = useState({initialState})
    const [formErrors, setFormErrors] = useState([])

    async function handleSubmit(e){
        e.preventDefault()
        let result = await signup(formData)
        if(result.success){
            navigate("/companies")
        } else{
            setFormErrors(result.errors)
        }
    }

    function handleChange(e){
        const{name,value} = e.target
        setFormData(fData => ({...fData, [name]: value}))
    }

    return (
        <div>
            <h3>Sign Up!</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input name="username"
                               value={formData.username || ""}
                               onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input name="password"
                               type="password"
                               value={formData.password || ""}
                               onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input name="firstName"
                               value={formData.firstName || ""}
                               onChange={handleChange}
                               type="text"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input name="lastName"
                               value={formData.lastName || ""}
                               onChange={handleChange}
                               type="text"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email"
                               value={formData.email || ""}
                               onChange={handleChange}
                               type="email"
                        />
                    </div>

                    {formErrors.length
                    ? <Alert type="danger" messages = {formErrors}/>
                        : null
                        }

                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
