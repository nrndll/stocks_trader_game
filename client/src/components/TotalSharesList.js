const TotalSharesList = ({totalShares}) => {
    
    const sharesList = totalShares.map(element => {
        return <li>{element.shortName}, {element.shares}</li>
    })
    
    return (
        <>
        <h4>Total Shares List</h4>
        <ul>
            {sharesList}
        </ul>
        </>
    );
}

export default TotalSharesList;