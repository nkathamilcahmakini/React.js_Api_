import React, {useState, useEffect}from "react";
import './style.css'
import { Link } from "react-router-dom";


const Products = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async()=>{
            await getProducts();
        })()

    }, [])
    console.log({products});

    const getProducts = async ()=>{
        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if (loading){
        return <h2>Loading ... </h2>
    }
    return(
          
        <div>
                <h1 id="heading">All Products</h1>
           <div className="displayProducts">
           
            {products.map(item => (
            <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.images[0]} alt={item.title} className="images" />
            <br/>
            <br/>
            <p>Title: {item.title}</p>
            <br/>
            <br/>
            <p>Price: ${item.price}</p>
            <br/>
            <br/>
            <Link to={`/ProductDetails/${item.id}` }className="buton">
            <button type="submit" className="view">View More</button >
           </Link>
           </div>
           
           ))}
           </div>

    </div>
    );
};

export default Products;





