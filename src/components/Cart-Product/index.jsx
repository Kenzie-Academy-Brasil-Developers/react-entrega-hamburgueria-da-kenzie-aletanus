import React from "react"
import { StyledCartProduct } from "./style";
import { Button } from "../Button"

export const CartProduct = ({ toast, productsUnitsCounter, setproductsUnitsCounter, currentSale, setCurrentSale, productId, productName, productImg, productCategory}) => {

  const removeProductFromFavoriteCart = (productId) => {
    console.log (productId)
    const newList = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newList);
    toast.success("Produto removido com sucesso!");
  }
  
  return (
   
    <StyledCartProduct>

      <picture>
        <img src={productImg} alt="" />
      </picture>

      <span>
        <h2>{productName}</h2>
        <p>{productCategory}</p>
        <p>{`${productsUnitsCounter} unid.`}</p>
      </span>

      <Button onClick={() => removeProductFromFavoriteCart(productId)} name="Remover" type="submit"></Button>
      
    </StyledCartProduct>
    
  )
}