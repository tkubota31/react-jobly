import React, {useState, useEffect} from "react"
import JoblyApi from "../../api"
import CompanyCard from "/CompanyCard"

function CompanyList(){
    const [companies,setCompanies] = useState(null);

    async function searchCompanies(name){
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies)
    }

    useEffect(function getCompanyList(){
        searchCompanies();
    },[]);

    return(
        <div>
            {companies.length ? (
                <div>
                    {companies.map(c =>(
                        <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl} />
                    ))}
                </div>
            ) : (
            <p> No results found</p> )}
        </div>
    );
}

export default CompanyList
