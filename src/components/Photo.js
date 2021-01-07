import React from 'react';


const Photo = ({photo}) => {
    const {index, photoLink, description} = photo;
    return (
        <div id={`card-${index}`}>
            <img src={photoLink} alt="" />
            <div>
                <h2>{description}</h2>
            </div>
        </div>
    )
}


export default Photo;
