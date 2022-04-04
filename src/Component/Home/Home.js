import React, { useState } from 'react';
import useTshirts from '../../Hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const [tShirts,setTshirts]= useTshirts()
    const [cart,setCart]=useState([])

    const addToCart = selectedItem =>{
        const newCart = [...cart,selectedItem]
        setCart(newCart)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt key={tShirt._id} tShirts= {tShirt} addToCart ={addToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;