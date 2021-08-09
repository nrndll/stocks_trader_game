import React,{ useState, useEffect } from 'react';

const MainContainer = () => {

    const [companies , setCompanies] = useState([])

    // const [player, setPlayer] = useState("")
    // const [totalCapital, steTotalCapital] = useState(100000)

    useEffect(() => {
        getCompanies();
    }, []);

    const getCompanies = () => {
        fetch('https://www.styvio.com/api/kxin', 'https://www.styvio.com/api/aapl')
        .then(res => res.json())
        .then(companiesData => setCompanies(companiesData));
    };



    return (
    <h2>Hello World</h2>
    )
}

export default MainContainer;

