import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const AllProducts = () => {
    // var to store all products from the api
    const [allProducts, setAllProducts] = useState([])

    const [deleteClicked, setDeleteClicked] = useState(false);


    // call the api to see all products in
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res =>{
                setAllProducts(res.data.results)
            })
            .catch(err  => console.log("errrrror", err)) 
        
    },[deleteClicked])

    // delete api
    const deleteClickHandler = (e, idOfProduct) => {
        console.log("trying to delete", idOfProduct)
        axios.delete(`http://localhost:8000/api/products/${idOfProduct}`)
            .then(res=>{
                console.log("response after delete", res)
                setDeleteClicked(!deleteClicked)
            })
            .catch(err=>console.log("theres is an error boy", err))
    }



    return (
        <div>
            <h3>All Products</h3>
            {/* display all products */}
            {allProducts.map((product, idx )=>{
                return <div key={idx} className="card">
                <div className="card-body">
                    <h4 className="card-title"><Link to={`/product/${product._id}`}>{product.title}</Link>| <Link to={`/product/edit/${product._id}`} className="btn btn-info">Edit</Link></h4>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Description: {product.description}</p>
                    <p><button onClick = {(e)=>deleteClickHandler(e, product._id)} className="btn btn-danger">Delete Products</button></p>
                    {/* <a href="#!" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            })}
        </div>
    );
};



export default AllProducts;