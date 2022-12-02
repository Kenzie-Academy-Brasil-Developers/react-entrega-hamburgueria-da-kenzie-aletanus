import React from "react"
import { StyledLi } from "./style";
import { Button } from "../Button"

export const Li = ({ toast, productsUnitsCounter, setproductsUnitsCounter, id, product, currentSale, setCurrentSale, src, productName, productCategory, productPrice, type, name}) => {
  
  const addToCart = (product) => {

    if (!currentSale.some((currentSale) => currentSale.id === product.id)) {
      setCurrentSale([...currentSale, product]);
      toast.success("Produto salvo com sucesso!");
    } else {
      toast.warning("Este produto já foi adicionado.");
      // setproductsUnitsCounter()
    }
  }
 
  return (

    <StyledLi>

      <picture>
        <img src={src} alt="" />
      </picture>

      <div>
        <h3>{productName}</h3>
        <p className='productCategory'>{productCategory}</p>
        <p className='productPrice'>{productPrice.toFixed(2)}</p>
        <Button 
          onClick={() => addToCart(product)} 
          type={type} 
          name={name}
          id={id}
        />
      </div>

    </StyledLi>
  )
}