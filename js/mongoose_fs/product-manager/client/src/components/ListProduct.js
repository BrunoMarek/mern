import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";


const ListProduct = () => {
    const history = useHistory(); //this is for redirecting when submiting

    let [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description:null
    })

    let [validationErrors, setValidationErrors] = useState({})

    const changeHandler = (e) =>{
        console.log("changing")
        console.log(e.target.name, e.target.value)
        setFormInfo({
            ...formInfo, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res=>{
                console.log("response after submting post request", res)
                if(res.data.err){ //if there is validation errors
                    //do not redirect if there is validation errors
                    //store the errors object from the back end into a state variabel so i can display the state variable info on the page
                    setValidationErrors(res.data.err.errors)

                }else{ //if the form is filled out properly
                    history.push("/"); //this redirects to home if form is submitting properly

                }
            })
            .catch(err=>console.log("errr", err))
    }

    return (
        <div>
            <h3>List a new Product</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input onChange = {changeHandler} type="text" name="title" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input onChange = {changeHandler} type="number" name="price" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.price? validationErrors.price.message:""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input onChange = {changeHandler} type="text" name="description" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                </div>
                <input className= "btn btn-primary"type="submit" value="List Product!" />
            </form>
        </div>
    );
};


export default ListProduct;