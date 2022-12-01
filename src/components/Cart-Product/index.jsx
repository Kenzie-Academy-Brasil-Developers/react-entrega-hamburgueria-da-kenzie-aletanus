import React from 'react'
import { StyledCartProduct } from './style';
import { Button } from "../Button"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartProduct = ({ productsUnitsCounter, setproductsUnitsCounter, currentSale, setCurrentSale, productId, productName, productImg, productCategory}) => {

  function removeProductFromFavoriteCart(productId) {
    console.log (productId)
    const newList = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newList);
    toast.success("Produto removido com sucesso!");
  }

  console.log (productsUnitsCounter)
  
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
      
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

    </StyledCartProduct>
    
  )
}