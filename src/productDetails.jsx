import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './config/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import './App.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const docRef = doc(db, 'product', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('No such document!');
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="center-container">
      <div className="product-details-container">
        <h1>Product Details</h1>
        <div>
          <img src={product.product_img} alt="Product" />
          <p>Name: {product.product_name}</p>
          <p>Price: ${product.product_price}</p>
          <p>Description: {product.product_description}</p>
          <p>Quantity: {product.product_quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;