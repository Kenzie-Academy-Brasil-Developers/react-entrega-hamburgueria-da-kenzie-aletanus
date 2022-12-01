import React from 'react'
import { StyledCart } from './style';
import { CartProduct } from '../Cart-Product';
import { Button } from "../Button"

export const Cart = ({ toast, productsUnitsCounter, setproductsUnitsCounter, currentSale, setCurrentSale}) => {
  
  function removeAllProductsFromFavoriteCart() {

    setCurrentSale([])
    toast.success("Produtos removidos com sucesso!");
  }

  function totalPrice () {

    let totalPriceValue = "00.00"
    if (currentSale.length) {
      totalPriceValue = currentSale.reduce((acc, act) => {
        let itemPrice = (act.price)
        return itemPrice + acc
      },0 )
    }
    return totalPriceValue
  }

  return (
    <StyledCart>

      <ul>{currentSale.map((product) => ( 
        <CartProduct toast={toast} productsUnitsCounter={productsUnitsCounter} setproductsUnitsCounter={setproductsUnitsCounter} currentSale={currentSale} setCurrentSale={setCurrentSale} productId={product.id} key={product.id} productName={product.name} productImg={product.img} productCategory={product.category}></CartProduct>
          ))}
      </ul>

      <footer>
        <span>
          <h2>Total</h2>
          <p>R$ {Number(totalPrice ()).toFixed(2)}</p>
        </span>
        <Button  onClick={() => removeAllProductsFromFavoriteCart()} name="Remover todos" type="submit"></Button>
      </footer>

    </StyledCart>
  )
}