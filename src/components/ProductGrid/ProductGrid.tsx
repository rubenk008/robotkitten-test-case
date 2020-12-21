import * as React from "react";

import products from "../Api/Products";
import ProductCard from "../ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
  return (
    <div className={styles.productGridWrapper}>
      <div className={styles.productGrid}>
        {products.map((product, index) => {
          return (
            <ProductCard
              productId={product.productId}
              productName={product.name}
              position={index % 2 === 0 ? "right" : "left"}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
