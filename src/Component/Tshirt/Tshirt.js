import React from 'react';
import './tshirt.css'
const Tshirt = (props) => {
    const {addTocart,tShirts} =props
    const {picture,name,price} =tShirts
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>$ {price}</p>
            <button onClick={()=>{addTocart(tShirts)}}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;