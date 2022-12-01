import React, { useEffect, useState } from "react"
import { api } from "../../Api"
import { StyledDivProducts } from './style';
import { StyledUl } from './style';
import { Li } from "../Product"
import { Aside } from "../Aside"

export const ShowProducts = ({ allProducts, setAllProducts, currentSale, setCurrentSale, products, setProducts}) => {

    // const localStorageFavorites = localStorage.getItem("@HAMBURGERS");
    // const [products, setProducts] = useState([])
    // const [currentSale, setCurrentSale] = useState(localStorageFavorites ? JSON.parse(localStorageFavorites) : [])
    const [loading, setLoading] = useState(false)
    console.log(products)
    
    useEffect (() => {
      const getApi = async () => {

        try {
            const resp = await api.get("")
            setProducts (resp.data)
            setAllProducts (resp.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading (true)
        }
      }
      getApi ()
    }, []);

    useEffect(() => {
        localStorage.setItem("@HAMBURGERS", JSON.stringify(currentSale));
    }, [currentSale]);

    return <>
        <StyledDivProducts>
            <StyledUl>
                {!loading ? (
                <h1>...loading</h1>
                ) : (
                    products.map((product) => (
                    <Li id={product.id} product={product} currentSale={currentSale} setCurrentSale={setCurrentSale} key={product.id} src={product.img} productName={product.name} productCategory={product.category} productPrice={product.price} type="button" name="Adicionar"/>
                    ))
                ) }
            </StyledUl>

            <Aside currentSale={currentSale} setCurrentSale={setCurrentSale} title="Carrinho de compras"/>
        
        </StyledDivProducts>
    </>
}