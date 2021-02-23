import { Link } from '@material-ui/core'
import React from 'react'
import Login from './Login'
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({id,title,price,image,rating}) {
    const [{user},dispatch]=useStateValue()
    const addToBasket=()=>{
            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating
                }
            })
    }
    return (
        <div className='product'>
            <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'><small>$<strong>{price}</strong></small></p>
            <div className='product__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                        <p>🌟</p>
                    ))
                }
            </div>
             </div>
            <img src={image} alt='product' />
            <button onClick= {addToBasket}>Add to basket</button>
           
        </div>
    )
}

export default Product
