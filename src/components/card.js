function Card(prop){
    return(
        <div className="col-md-3 card shadow m-4">
            <img src={prop.image}  className="img-thumbnail" alt="not found"/>
            <span>Expirience:{prop.exp}</span>
            <span className="text-decoration-underline">Area of Application</span>
            <p>{prop.txt}</p>
        </div> 
    )
}

export default Card