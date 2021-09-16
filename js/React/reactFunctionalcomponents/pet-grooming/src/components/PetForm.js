import React, {useState} from 'react';


const PetForm = () => {
    const[name, setName] = useState("");
    const[type, setType] = useState("");
    const[service, setService] = useState("");
    const[date, setDate] = useState("");
    const[picLink, setPicLink] = useState("");

    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {(e)=>setName(e.target.value)} type="text" className="form-control" />
                    {
                        name.length < 3 || name.length > 20?
                        <p className="text-danger">Name of pet must be between 3-20 characters</p>
                        : ""

                    }

                </div>
                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <input onChange = {(e)=>setType(e.target.value)}  type="text" className="form-control" />
                    {
                        type.length < 1?
                        <p className="text-danger">Pet must have a type</p>
                        : ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="">Service Requested:</label>
                    {
                        service.length <1?
                        <p className="text-danger">Please select a service</p>
                        : ""

                    }
                    <select onChange = {(e)=>setService(e.target.value)}  name="" id="" className= "form-select">
                        <option style= {{display:"none"}} value="">Please select a service</option>
                        <option value="Regular Grooming (Shampoo wash, haircut)">Regular Grooming (Shampoo wash, haircut)</option>
                        <option value="Regular Grooming Plus (Shampoo wash, haircut, nails)">Regular Grooming Plus (Shampoo wash, haircut, nails)</option>
                        <option value="My pet lives better than you(Shampoo wash, haircut, nails, day care, massage)">My pet lives better than you(Shampoo wash, haircut, nails, day care, massage)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Select appointment date/time</label>
                    <input onChange = {(e)=>setDate(e.target.value)}  type="date" name="" id="" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Picture: Link</label>
                    <input onChange = {(e)=>setPicLink(e.target.value)}  type="text" className="form-control" />
                </div>
                <input type="submit" value="Reserve Appointment!" className = "btn btn-success mt-3" />
            </form>
            <br />
            <hr />
            <h3>Your pets info</h3>
            <div>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Service: {service}</p>
                <p>Date: {date}</p>
                <p>Picture: <img src="{picLink}" alt="" height= "300px" /></p>
            </div>
        </div>
    );
};



export default PetForm;