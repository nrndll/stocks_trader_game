import React, { useState, useEffect } from 'react';
import CompaniesList from '../components/CompaniesList';
import CompanyDetail from '../components/CompanyDetail';
import TotalSharesList from '../components/TotalSharesList';
import PlayerInfoService from '../services/PlayerInfoService';
import "./style.css"

const MainContainer = () => {

    const [companies , setCompanies] = useState([]);
    const [totalCapital, setTotalCapital] = useState(0);
    const [totalShares, setTotalShares] = useState([
        { "company": "DRNA", "shares": 0, "shortName": "Dicerna Pharmaceuticals, Inc."},
        { "company": "ICAD", "shares": 0, "shortName": "ICAD Inc."},
        { "company": "AAPL", "shares": 0, "shortName": "Apple Inc."},
        { "company": "FTFT", "shares": 0, "shortName": "Future FinTech Group Inc."},
        { "company": "AMTI", "shares": 0, "shortName": "Applied Molecular Transport Inc."},
      ]);
    const [chosenCompany, setChosenCompany] = useState(null);
    const [playerId, setplayerId] = useState("");
    const [currentMonth, setCurrentMonth] = useState(0);

    useEffect(() => {
        getCompanies();
        playerInfo();
    }, []);

    const getCompanies = () => {
        const promise1 = fetch('https://www.styvio.com/api/drna')
            .then(res => res.json())

        const promise2 = fetch('https://www.styvio.com/api/icad')
            .then(res => res.json())

        const promise3 = fetch('https://www.styvio.com/api/aapl')
            .then(res => res.json())

        const promise4 = fetch('https://www.styvio.com/api/ftft')
            .then(res => res.json())

        const promise5 = fetch('https://www.styvio.com/api/amti')
            .then(res => res.json())

        Promise.all([promise1, promise2, promise3, promise4, promise5])
        .then(data => setCompanies(data))
    }

    const playerInfo = () => {
       PlayerInfoService.getPlayerInfo()
       .then(playerInfo => {
        setTotalCapital(playerInfo[0].totalCapital)
        setTotalShares(playerInfo[0].totalShares)
        setplayerId(playerInfo[0]._id)
       });
    }

        const  onCompanySelected = (company) => {
        setChosenCompany(company)  
    }

    const updateTotalsPurchase = (totalCost, ticker, numShares) => {
        setTotalCapital(totalCapital - totalCost);
        const newTotalShares = totalShares;
        const sharesToUpdate = newTotalShares.find(element => element.company === ticker)
        sharesToUpdate.shares += parseInt(numShares)
        setTotalShares(newTotalShares);
    }

    const updateTotalsSale = (totalSale, ticker, numShares) => {
        setTotalCapital(totalCapital + totalSale);
        const newTotalShares = totalShares;
        const sharesToUpdate = newTotalShares.find(element => element.company === ticker)
        sharesToUpdate.shares -= parseInt(numShares)
        setTotalShares(newTotalShares);
    }

    useEffect (() => {
        PlayerInfoService.updatePlayerInfo({
            _id: playerId,
            totalCapital: totalCapital,
            totalShares: totalShares
        })
       
    }, [totalCapital]);

    const handleNextMonth = event => {
        setCurrentMonth(currentMonth + 5);
    }

    return (
    <section class="container">
        <header>
           
            <img  src={process.env.PUBLIC_URL + '/img/wolves.jpg'}></img>
            <div id="app-title">Online Trader Training Game</div>
        
        </header>

        <div id="trading-container">
            
            <h2>Player Capital: ${totalCapital}</h2>
            <button onClick={handleNextMonth}>ADVANCE CURRENT PRICE</button>
            <TotalSharesList totalShares={totalShares}/>
            
        </div>

        <div id="trading-zone-container">
          
            <CompaniesList companies={companies} onCompanySelected={onCompanySelected}/>
            
            <CompanyDetail company={chosenCompany} currentMonth={currentMonth} updateTotalsPurchase={updateTotalsPurchase} updateTotalsSale={updateTotalsSale}/>
        
        </div>
        
    </section>
    )
}

export default MainContainer;

