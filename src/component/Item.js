import React, { useContext } from 'react'
import {creatingContextForCart} from "./Cart"
const Item = ({id , img , title , price , description , amount}) => {

  const {removeItem} = useContext(creatingContextForCart)
    return (
        <>

    
      <div className="items-info">
      <div className="product-img">
        <img
          src={img}
          alt="product-img"
        />
      </div>
      <div className="title">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="add-minus-quantity">
        <i className="fas fa-minus minus"></i>
        <input type="text" placeholder="2" />
        <i className="fas fa-plus add"></i>
      </div>
      <div className="price">
        <h3>{price}</h3>
      </div>
      <div className="remove-item">
        <i className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}></i>
      </div>
    </div>



        </>
    )
}

export default Item
