
const CompanyDetail = ({company}) => {
    if (company === null){
        return null
    }
    return (

        <div>
            <h3>{company.shortName}</h3>
            
        </div>
    )
}
export default CompanyDetail;