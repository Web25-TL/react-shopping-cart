import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext.js";

// Components
import Product from "./Product";

const Products = () => {
  const { products, addItem } = useContext(ProductContext);

  console.log("Product: context: product: ", products);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
