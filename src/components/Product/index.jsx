import React from 'react'
import { StyledLi } from './style';
import { Button } from "../Button"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const Li = ({ toast, productsUnitsCounter, setproductsUnitsCounter, id, product, currentSale, setCurrentSale, src, productName, productCategory, productPrice, type, name}) => {
  
  function addToCart(product) {

    console.log(currentSale)

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

      {/* <ToastContainer
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
      /> */}

    </StyledLi>
  )
}