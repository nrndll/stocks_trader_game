
const CompanyDetail = ({company}) => {
    if (company === null){
        return null
    }
    const handlePurchase = (event) => {
        event.preventDefault();
        console.log(event.target.value)

    }
    return (

        <div>
            <form onSubmit={handlePurchase}>
                
                <label htmlFor="number">Purchase Shares</label>
                <input type="number" name="number"  /> 
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