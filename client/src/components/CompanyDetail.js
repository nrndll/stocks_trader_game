import { useState } from "react";

const CompanyDetail = ({ company, currentMonth, updateTotalsPurchase, updateTotalsSale}) => {

    const [runningTotal, setRunningTotal] = useState(0)
    if (company === null){
        return null
    }

    const sharesTotalValue = (event) => {
        setRunningTotal(company.sixMonthPrices[currentMonth] * event.target.value)
    }

    const shareSalesTotalValue = (event) => {
              setRunningTotal((company.sixMonthPrices[currentMonth] * 0.9) * event.target.value)
    }

    const handlePurchase = (event) => {
        event.preventDefault();
        const newTotalCost = company.sixMonthPrices[currentMonth] * event.target.purchase.value
        updateTotalsPurchase(newTotalCost, company.ticker, event.target.purchase.value)
    }

    const handleSelling = (event) => {
        event.preventDefault();
        const newTotalSale = (company.sixMonthPrices[currentMonth] * 0.9) * event.target.selling.value
        updateTotalsSale(newTotalSale, company.ticker, event.target.selling.value)
    }

    return (

        <div>
            <h2 id="total-value">
                Total Value:  ${runningTotal}
            </h2>
            <section id="trading-form">

                <form onSubmit={handlePurchase}>
                    
                    <label htmlFor="purchase">Purchase Shares</label>
                    <input type="number" min = "0" name="purchase" onChange={sharesTotalValue} /> 
                    <input type="submit" />
                </form>

                <form onSubmit={handleSelling}>
                    
                    <label htmlFor="selling">Sell Shares</label>
                    <input type ="number" min = "0" name="selling" onChange={shareSalesTotalValue} /> 
                    <input type="submit" />
                </form> 

            </section>


            <section id="company-description">

                <h3>{company.shortName}</h3>
                <h4>{company.ticker}</h4>
                <img src = {company.logoURL} alt = "company logo "/>
                <h1>Current Month Price: ${company.sixMonthPrices[currentMonth]}</h1>
                <p>{company.companyDescription}</p>

            </section>


            
        </div>
    )
}
export default CompanyDetail;