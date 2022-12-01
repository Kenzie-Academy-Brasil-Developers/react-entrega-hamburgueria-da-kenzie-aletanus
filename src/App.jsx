import { Header } from "./components/Header"
import { ShowProducts } from "./components/Products-list"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from "react"

function App() {

  const localStorageFavorites = localStorage.getItem("@HAMBURGERS");
  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(localStorageFavorites ? JSON.parse(localStorageFavorites) : [])
  const [allProducts, setAllProducts] = useState([])
  const [productsUnitsCounter, setproductsUnitsCounter] = useState(1)

  return (
    <>
    <Header allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts}/>
    <ShowProducts toast={toast} productsUnitsCounter={productsUnitsCounter} setproductsUnitsCounter={setproductsUnitsCounter} allProducts={allProducts} setAllProducts={setAllProducts} products={products} setProducts={setProducts} currentSale={currentSale} setCurrentSale={setCurrentSale} />
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
    </>
  );
}

export default App;
