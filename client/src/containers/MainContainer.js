import React, { useState, useEffect } from 'react';
import CompaniesList from '../components/CompaniesList';

const MainContainer = () => {

    const [companies , setCompanies] = useState([]);
    // const [player, setPlayer] = useState("")
    const [totalCapital, steTotalCapital] = useState(100000);
    const [totalShares, setTotalShares] = useState([]);

    useEffect(() => {
        getCompanies();
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

    return (
    <>
    <h2>Hello World</h2>
    <CompaniesList companies={companies}/>
    </>
    )
}

export default MainContainer;

