import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style.css'
          
const ProductDetails = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const details = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    details();
  }, [productId]);
  if (!product) {
    return <p>Loading ...</p>;
  }
  return (
    <div className='productdetails'>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <br/>
        <br/>
        <p>Rating: {product.rating}</p>
        <br/>
        <br/>
        <p>Category: {product.category}</p>
        <br/>
        <br/>
        <p>DiscountPercentage: ${product.discountPercentage}</p>
        <br/>
        <br/>
        <p>Brand: {product.brand}</p>
        <br/>
        <br/>
        <p>Description: {product.description}</p>

        <Link to={'/ AddProductForm/'}>
          <button type="submit" className="view">AddProduct</button >
        </Link>  
      </div>
    </div>
  );
};
export default ProductDetails;

