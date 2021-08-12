const TotalSharesList = ({totalShares}) => {
    
    const sharesList = totalShares.map(element => {
        return <li>{element.shortName}{element.shares}</li>
    })
    
    return (
        
            <ul>
                {sharesList}
            </ul>
        
    )
}

export default TotalSharesList;