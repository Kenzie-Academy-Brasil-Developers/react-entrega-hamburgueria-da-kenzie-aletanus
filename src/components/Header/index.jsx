import { StyledHeader } from "./style";
import logo from "../../images/Burger Kenzie - Logo.svg"
import { Form } from "../Form"

export const Header = ({toast, allProducts, setAllProducts, products, setProducts}) => {  

  return (
    <StyledHeader>

      <figure>
        <img src={ logo } alt="" />
      </figure>

      <Form toast={toast} allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts} id="input-search" placeholder="Digitar Pesquisa" title="search" type="text"/>

    </StyledHeader>  
  )
}