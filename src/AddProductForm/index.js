import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      category,
      brand,
      description,
    };
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("newProduct", JSON.stringify(newProduct));

    
    navigate(`/products?${queryParams.toString()}`);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <br/>
        <br/>
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <br/>
        <br/>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <br/>
        <br/>
        <label>
          Brand:
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <br />
        <br/>
        <br/>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <br/>
        <br/>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;

