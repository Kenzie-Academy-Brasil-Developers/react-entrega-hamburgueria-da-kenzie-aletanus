// import React from 'react'
import { StyledHeader } from "./style";
import logo from "../../images/Burger Kenzie - Logo.svg"
import { Form } from "../Form"

export const Header = ({allProducts, setAllProducts, products, setProducts}) => {  

  return (
    <StyledHeader>

      <figure>
        <img src={ logo } alt="" />
      </figure>

      <Form allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts} id="input-search" placeholder="Digitar Pesquisa" title="search" type="text"/>

    </StyledHeader>  
  )
}