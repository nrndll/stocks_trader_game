
const CompanyDetail = ({company}) => {
    if (company === null){
        return null
    }
    return (

        <div>
            <h3>{company.shortName}</h3>
            <img src = {company.logoURL} alt = "image of company logo "/>
            
            
        </div>
    )
}
export default CompanyDetail;