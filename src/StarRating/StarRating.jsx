import React, { useState } from "react";
import './StarRating.css'

const StarRating = () =>{
    const [rating, setRating] = useState(0);

    const handleRating = (index) =>{
        setRating(index)
        if(index === rating)
        {
            setRating(index-1);
        }
    }

    return(
    <div className="star-rating">
      <div>Rating: {rating} stars</div>
    {[...Array(5)].map((star, index) => {
        index+=1        
        return (   
            <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => handleRating(index)}
          >      
          <span className="star">&#9733;</span>  
          </button>      
        );
      })}
</div>
    )
}
export default StarRating