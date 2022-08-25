import React, {useState, useEffect} from "react"
import JoblyApi from "../api"
import JobCardList from "./JobCardList"

function JobList(){

    const[jobs, setJobs] = useState(null)

    useEffect(function getAllJobs(){
        search()
    },[]);

    async function search(title){
        let jobs = await JoblyApi.getJobs(title)
        setJobs(jobs)
    }

    return (
        <div>
            {jobs.length ?
            <JobCardList jobs={jobs}/>
            : <p>No results available</p>
            }
        </div>
    );
}

export default JobList
