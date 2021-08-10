import { useState } from "react";

const CompanyDetail = ({company}) => {

    const [runningTotal, setRunningTotal] = useState(0)
    if (company === null){
        return null
    }

    
    
    
    const handlePurchase = (event) => {
        event.preventDefault();
        console.log(parseInt(event.target.purchase.value))

    }

    const sharesTotalValue = (event) => {
        setRunningTotal(company.sixMonthPrices[0] * event.target.value)
        

    }
    return (

        <div>
            <h2>
                Total Value:  ${runningTotal}
            </h2>

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