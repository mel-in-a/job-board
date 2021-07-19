const Job = (props) => {

    return(

        <div className={`job-card border ${props.color}`}>
          <div className="title">{props.title}</div>
          <div className="small-footer">
            <div className="type-contrat">{props.typeContrat}</div> -
            <div className="country">{props.country} </div> -
            <div className="city">{props.city}</div>
          </div>
          </div>
     
    )
}

export default Job;