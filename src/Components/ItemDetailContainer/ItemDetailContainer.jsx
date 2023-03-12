
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useParams} from "react-router-dom"
import { products } from '../../productsMock';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const productSelected = products.find ( (element) => element.id === Number(id) );
    
    const onAdd = (quantity)=>{
        if (quantity === 1) console.log(`Se agregó al carrito: ${quantity} elemento`)
        else console.log (`Se agregaron al carrito: ${quantity} elementos`);
    } 

    return (     
        <div>
                <img src={productSelected.img} alt="" />
                <h1 >{productSelected.title}</h1>
                <h3 >{productSelected.description}</h3>
                <h2 ><span>$</span>{productSelected.price.toFixed(2)}</h2>
                <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetailContainer