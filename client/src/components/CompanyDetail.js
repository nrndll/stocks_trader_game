
const CompanyDetail = ({company}) => {
    if (company === null){
        return null
    }
    const handlePurchase = (event) => {
        event.preventDefault();
        console.log(parseInt(event.target.purchase.value))

    }

    const sharesTotalValue = (event) => {
        console.log(event.target.value);

    }
    return (

        <div>
            <form onSubmit={handlePurchase}>
                
                <label htmlFor="purchase">Purchase Shares</label>
                <input type="number" name="purchase" onChange={sharesTotalValue} /> 
                <input type="submit" />
            </form>


            <h3>{company.shortName}</h3>
            <img src = {company.logoURL} alt = "company logo "/>
            {/* <p>{company.currentPrice}</p> */}
            <p>Current Month Price: ${company.sixMonthPrices[0]}</p>
            <p>{company.companyDescription}</p>


            
        </div>
    )
}
export default CompanyDetail;