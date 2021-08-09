
const CompanyDetail = ({company}) => {
    if (company === null){
        return null
    }
    const handlePurchase = () => {
       return null

    }
    return (

        <div>
            <form onSubmit={handlePurchase}>
                
                <label htmlFor="name">Purchase Shares</label>
                <input type="number" /> 
                <input type="submit" />
            </form>


            <h3>{company.shortName}</h3>
            <img src = {company.logoURL} alt = "image of company logo "/>
            {/* <p>{company.currentPrice}</p> */}
            <p>Current Month Price: ${company.sixMonthPrices[0]}</p>
            <p>{company.companyDescription}</p>


            
        </div>
    )
}
export default CompanyDetail;