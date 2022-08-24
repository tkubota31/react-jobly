import React, {useState, useContext} from "react";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";
import Alert from "../general/Alert"

function ProfileForm(){
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    });

    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        };

        let username = formData.username;
        let updatedUser;

        try{
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (err){
            debugger;
            setFormErrors(e);
            return;
        }

        setFormData(f => ({...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);

        setCurrentUser(updatedUser)
    }

    function handleChange(e){
        const {name,value} = e.target;
        setFormData( f =>({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }

    return(
        <div>
            <h3>Profile</h3>
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <p>{formData.username}</p>
                    </div>
                    <div>
                        <label>First Name</label>
                        <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                        name="firstName"
                        value={formData.lastName}
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                        name="email"
                        value={formData.email}
                        onChange ={handleChange} />
                    </div>
                    {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}

                    {saveConfirmed
                    ?
                    <Alert type="success" messages={["Updated successfully."]} />
                    : null}

                    <button
                        className="btn btn-primary btn-block mt-4"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileForm;
