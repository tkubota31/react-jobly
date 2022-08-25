import React from "react"
import JobCard from "./JobCard"

function JobCardList({ jobs}){
    return(
        <div>
            {jobs.map(job =>(
                <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyHandle={job.company_handle} />
            ))}
        </div>
    )
}

export default JobCardList
