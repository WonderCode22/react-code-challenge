import React from 'react';
import './card.css';

const Card = props => {
    let image_url = "No Image"
    if(props.image)
    {
        image_url = props.image
    }
    return(
        <div className="card">
            <img src={image_url} onError={(e)=>{e.target.onerror = null; e.target.src="https://fscomps.fotosearch.com/compc/CSP/CSP990/movie-clapper-board-clip-art__k11347058.jpg"}}>
            </img>
            <span className="program-type">{ props.type }</span>
            <p>{ props.title }</p>
        </div>
    )
}

export default Card;