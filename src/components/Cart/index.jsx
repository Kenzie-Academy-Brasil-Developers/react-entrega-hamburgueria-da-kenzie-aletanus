import React from "react"
import { StyledCart } from "./style";
import { CartProduct } from "../Cart-Product";
import { Button } from "../Button"

export const Cart = ({ title, toast, productsUnitsCounter, setproductsUnitsCounter, currentSale, setCurrentSale}) => {
  
  const removeAllProductsFromFavoriteCart = () => {

    setCurrentSale([])
    toast.success("Produtos removidos com sucesso!");
  }

  const totalPrice = () => {

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

      <h2 className="h2-title">{title}</h2>

      <ul>

      {currentSale.length === 0 ? (<li className="li-empty-cart">

        <h2>Carrinho vazio</h2>
        <p>Adicione itens</p>

      </li>) : (currentSale.map((product) => ( 
        <CartProduct toast={toast} productsUnitsCounter={productsUnitsCounter} setproductsUnitsCounter={setproductsUnitsCounter} currentSale={currentSale} setCurrentSale={setCurrentSale} productId={product.id} key={product.id} productName={product.name} productImg={product.img} productCategory={product.category}></CartProduct>
          )))}

      </ul>

      <>
        { currentSale.length === 0 ? (<></>) : (<footer>
            <span>
              <h2>Total</h2>
              <p>{totalPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</p>
            </span>
            <Button  onClick={() => removeAllProductsFromFavoriteCart()} name="Remover todos" type="submit"></Button>
          </footer>)
        }
      </>

    </StyledCart>
  )
}