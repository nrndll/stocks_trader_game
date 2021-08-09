import React from "react"

const CompaniesList = ({companies}) => {
    
    const companyOptions = companies.map((company) => {
        return <option value={company.ticker} key={company.ticker}>{company.shortName}</option>
    })

    return (
        <select defaultValue="">
            <option value="" selected disabled>Choose a company</option>
            {companyOptions}
        </select>
    )
}

export default CompaniesList