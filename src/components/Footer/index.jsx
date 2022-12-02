import { StyledFooter } from "./style";

export const Footer = ({toast, allProducts, setAllProducts, products, setProducts}) => {  

  return (

    <StyledFooter>

      <h1 className="titile-mobile-a">Projeto desenvolvido por <span className="titile-mobile-b">Alessandro Tanus</span>.</h1>
      <h1>Projeto desenvolvido por <span>Alessandro Tanus</span> para o curso de formação Fullstack da Kenzie Academy.</h1>

    </StyledFooter>  
  )
}