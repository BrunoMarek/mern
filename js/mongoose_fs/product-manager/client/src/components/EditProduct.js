import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const EditProduct = () => {
    const {idParam} = useParams();
    const history = useHistory(); // redirect after submit

    const [productInfo, setProductInfo] = useState({})

    let [validationErrors, setValidationErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParam}`)
            .then(res=>{
                console.log("response when trying to get a product", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("err boy", err))
    },[])

    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
            setProductInfo({ 
                ...productInfo,
                [e.target.name]:e.target.value
            })
        }

        const submitHandler = (e)=>{
            e.preventDefault();
            axios.put(`http://localhost:8000/api/products/${idParam}`, productInfo )
                .then(res=>{
                    console.log("response afer put request", res)
                    history.push(`/products/${idParam}`);
                    if(res.data.err){ //if there is validation errors
                        //do not redirect if there is validation errors
                        //store the errors object from the back end into a state variabel so i can display the state variable info on the page
                        setValidationErrors(res.data.err.errors)
    
                    }else{ //if the form is filled out properly
                        history.push("/"); //this redirects to home if form is submitting properly
    
                    }
                })
                .catch(err=> console.log("errrrr boy, ", err))
        }
            

    return (
        <div>
            <h3>Edit a  Product</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input onChange = {changeHandler} type="text" name="title" id="" className="form-control" value = {productInfo.title} />
                    <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input onChange = {changeHandler} type="number" name="price" id="" className="form-control" value = {productInfo.price}  />
                    <p className="text-danger">{validationErrors.price? validationErrors.price.message:""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input onChange = {changeHandler} type="text" name="description" id="" className="form-control" value = {productInfo.description} />
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                </div>
                <input className= "btn btn-primary"type="submit" value="Edit Product!" />
            </form>
        </div>
    );
};



export default EditProduct;