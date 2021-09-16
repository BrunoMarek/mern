import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios'

const OneProduct = () => {
    const {idParam} = useParams();
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParam}`)
            .then(res=>{
                console.log("response when trying to get a product", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("errr boy", err))
    }, [idParam])


    return (
        <div>
            <h1>{productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
        </div>
    );
};



export default OneProduct;