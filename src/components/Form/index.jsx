import React from "react"
import { Button } from "../Button"
import { StyledForm } from "./style"

export const Form = ({ toast, allProducts, setAllProducts, products, setProducts, id, label, type, value, onChange, title, placeholder }) => {

  function searchItem (event) {
 
    event.preventDefault ()
    const searchedValue = event.target.children[1].value
    const filteredProducts = allProducts.filter ((product) => product.name.toLowerCase().includes(searchedValue.toLowerCase()) || 
    product.category.toLowerCase().includes(searchedValue.toLowerCase()))

    if (filteredProducts.length) { 
      setProducts(filteredProducts)
      
    } else {
      toast.error("Produto não encontrado!");
      setProducts(allProducts)
    }
  }

  return (

    <StyledForm onSubmit={(event) => searchItem (event)}>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={placeholder} title={title} type={type} value={value} />
      <Button name="Pesquisar" type="submit"/>
    </StyledForm>
  )
}