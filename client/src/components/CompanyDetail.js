import { useState } from "react";

const CompanyDetail = ({ company, updateTotalsPurchase}) => {

    const [runningTotal, setRunningTotal] = useState(0)
    if (company === null){
        return null
    }

    const sharesTotalValue = (event) => {
        setRunningTotal(company.sixMonthPrices[0] * event.target.value)
    }

    const handlePurchase = (event) => {
        event.preventDefault();
        const newTotalCost = company.sixMonthPrices[0] * event.target.purchase.value
        updateTotalsPurchase(newTotalCost, company.ticker, event.target.purchase.value)
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

            {/* <form onSubmit={handleSelling}>
                
                <label htmlFor="selling">Sell Shares</label>
                <input type="number" name="selling" onChange={sharesTotalValue} /> 
                <input type="submit" />
            </form>

             */}


            <h3>{company.shortName}</h3>
            <h4>{company.ticker}</h4>
            <img src = {company.logoURL} alt = "company logo "/>
            {/* <p>{company.currentPrice}</p> */}
            <p>Current Month Price: ${company.sixMonthPrices[0]}</p>
            <p>{company.companyDescription}</p>


            
        </div>
    )
}
export default CompanyDetail;