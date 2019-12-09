import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Contexts
import { ProductContext } from "./contexts/ProductContext.js";
import { CartContext } from "./contexts/CartContext.js";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Footer from './components/Footer.js'

// hooks
import { useLocalStorage } from './hooks/useLocalStorage.js'

import "./sass/App.scss"

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage("cart: ", []);

  const addItem = item => {
    // add the given item to the cart
    const cartItem = {
      ...item,
      cartItemId: Date.now()
    };
    setCart([...cart, cartItem]);
  };

  const removeItem = id => {
	setCart(cart.filter(item => item.cartItemId !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
		  
		  <Footer />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
