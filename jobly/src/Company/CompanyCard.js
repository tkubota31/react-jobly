import React from "react"
import {Link} from "react-router-dom"


function CompanyCard({name,description, logoUrl,handle}){

    return (
        <Link to={`/companies/${handle}`}>
            <h5>
                {name}
                {logoUrl && <img src={logoUrl}
                                 alt={name}/>}
                <p>{description}</p>
            </h5>
        </Link>
    )
};

export default CompanyCard;
