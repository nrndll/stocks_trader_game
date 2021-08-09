
const CompanyDetail = ({company}) => {
    if (company === null){
        return null
    }
    return (

        <div>
            <h3>{company.shortName}</h3>
            <img src = {company.logoURL} alt = "image of company logo "/>
            {/* <p>{company.currentPrice}</p> */}
            <p>Current Month Price: ${company.sixMonthPrices[0]}</p>
            <p>{company.companyDescription}</p>


            
        </div>
    )
}
export default CompanyDetail;