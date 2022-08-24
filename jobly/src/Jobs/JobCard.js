import React, {useState, useContext, useEffect} from "react"
import UserContext from "../auth/UserContext"

function JobCard({id, title,salary,equity,company_handle}){

    const {hasAppliedToJob, applyToJob} = useContext(UserContext)
    const [applied, setApplied] = useState()

    useEffect(function updateAppliedStatus(){
        setApplied(hasAppliedToJob(id));
    }, [id,hasAppliedToJob]);

    async function handleApply(e){
        if(hasAppliedToJob(id)){
            return;
        }
        applyToJob(id);
        setApplied(true);
    }

    return(
        <div>
            <h3>{title}</h3>
            <h5>{company_handle}</h5>
            <p>Salary : {salary}
               Equity : {equity}
            </p>
            <button onClick={handleApply} disabled={applied}>
               {applied ? "Already Applied" : "Apply"}
            </button>
        </div>
    )
}

export default JobCard
