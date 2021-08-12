import React from "react"

const CompaniesList = ({companies, onCompanySelected}) => {
    
    const companyOptions = companies.map((company, index) => {
        return <option value={index} key={company.ticker}>{company.shortName}</option>
    })

    const handleChange = (event)=> {
        const chosenCompany = companies[event.target.value];
          onCompanySelected(chosenCompany);        
        
    }

    return (
        <section id="choose-company">
            <select defaultValue="" onChange = {handleChange}>
                <option value="" selected disabled>Choose a company to buy or sell shares from:</option>
                {companyOptions}
            </select>
        </section>
    )
}

export default CompaniesList