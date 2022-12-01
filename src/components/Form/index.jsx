import React from "react"
import { Button } from "../Button"
import { StyledForm } from "./style"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = ({ allProducts, setAllProducts, products, setProducts, id, label, type, value, onChange, title, placeholder }) => {

  function searchItem (event) {
 
    event.preventDefault ()
    const searchedValue = event.target.children[1].value
    const filteredProducts = allProducts.filter ((product) => product.name.toLowerCase().includes(searchedValue) || product.category.toLowerCase().includes(searchedValue))

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
    </StyledForm>
  )
}