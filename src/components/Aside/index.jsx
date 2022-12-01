import React from "react"
import { StyledAside } from "./style";
import noCart from "../../images/Empty Cart.svg"
import { Cart } from "../Cart"

export const Aside = ({toast, productsUnitsCounter, setproductsUnitsCounter, title, currentSale, setCurrentSale}) => {

  return (

    <StyledAside >

      {title}
      {currentSale.length === 0 ? (<div>
      <figure>
        <img src={ noCart } alt="No product" />
      </figure>
      </div>) : (<Cart toast={toast} productsUnitsCounter={productsUnitsCounter} setproductsUnitsCounter={setproductsUnitsCounter} currentSale={currentSale} setCurrentSale={setCurrentSale}/>)}

    </StyledAside>
  )
}