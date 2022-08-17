import React, {useState, useEffect} from "react"

function JobCard({title,salary,equity,company_handle}){

    return(
        <div>
            <h3>{title}</h3>
            <h5>{company_handle}</h5>
            <p>Salary : {salary}
               Equity : {equity}
            </p>
        </div>
    )
}

export default JobCard
