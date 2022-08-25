import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import JoblyApi from "../api"
import JobCardList from "../jobs/JobCardList"
import LoadingPage from "../general/LoadingPage"

function CompanyDetail(){
    const {handle} = useParams()

    const[company, setCompany] = useState(null)

    //get company at first render and do it only when the handle name changes.
    useEffect(function getCompanyAndJobs(){
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany(handle);
    }, [handle])

    if (!company) return <LoadingPage />

    return(
        <div>
            <h4>{company.name}</h4>
            <h5>{company.description}</h5>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetail;
