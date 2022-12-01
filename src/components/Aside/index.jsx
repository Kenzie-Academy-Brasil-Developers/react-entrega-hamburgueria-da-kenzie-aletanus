import React from "react"
import { StyledAside } from './style';
import noCart from "../../images/Empty Cart.svg"
import { Cart } from "../Cart"

export const Aside = ({productsUnitsCounter, setproductsUnitsCounter, title, currentSale, setCurrentSale}) => {

  return (

    <StyledAside >

      {title}
      {currentSale.length === 0 ? (<div>
      <figure>
        <img src={ noCart } alt="" />
      </figure>
      </div>) : (<Cart productsUnitsCounter={productsUnitsCounter} setproductsUnitsCounter={setproductsUnitsCounter} currentSale={currentSale} setCurrentSale={setCurrentSale}/>)}

    </StyledAside>
  )
}