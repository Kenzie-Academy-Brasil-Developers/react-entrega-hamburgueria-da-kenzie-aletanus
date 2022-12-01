import { Header } from "./components/Header"
import { ShowProducts } from "./components/Products-list"

import React, { useState } from "react"

function App() {

  const localStorageFavorites = localStorage.getItem("@HAMBURGERS");
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(localStorageFavorites ? JSON.parse(localStorageFavorites) : [])
  const [allProducts, setAllProducts] = useState([])

  return (
    <>
    <Header allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts}/>
    <ShowProducts allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts} currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </>
  );
}

export default App;
