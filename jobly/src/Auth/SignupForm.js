import React, {useState} from "react"
import {useHistory} from "react-router-dom"

function SignupForm({signup}){
    let initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const history = useHistory()
    const[formData, setFormData] = useState({initialState})

    function handleSubmit(e){
        e.preventDefault()
        let result = await signup(formData)
        if(result.success){
            history.push("/companies")
        } else{
            setFormData(initialState)
        }
    }

    function handleChange(e){
        e.preventDefault()
        const{name,value} = e.target
        setFormData(fData => ({...fData, [name]: value}))
    }

    return (
        <div>
            <h3>Sign Up!</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="username">Username</label>
                        <input name="username"
                               value={formData.username}
                               onChange={handleChange}
                               type="text"
                        />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input name="password"
                               type="password"
                               value={formData.password}
                               onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label for="firstName">First Name</label>
                        <input name="firstName"
                               value={formData.firstName}
                               onChange={handleChange}
                               type="text"
                        />
                    </div>

                    <div>
                        <label for="lastName">Last Name</label>
                        <input name="lastName"
                               value={formData.lastName}
                               onChange={handleChange}
                               type="text"
                        />
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input name="email"
                               value={formData.email}
                               onChange={handleChange}
                               type="email"
                        />
                    </div>
                    <button onSubmit={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
