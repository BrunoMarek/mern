import React, {useState} from 'react';


const Formulario = () => {
    const[fName, setfName] = useState("");
    const[lName, setlName] = useState("");
    const[email, setemail] = useState("");
    const[password, setpassword] = useState("");
    const[cPassword, setcPassword] = useState("");


    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange = {(e)=>setfName(e.target.value)} type="text" className="form-control" />
                    {
                        fName.length < 2?
                        <p>First Name must be at least 2 characters</p>
                        : ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange = {(e)=>setlName(e.target.value)} type="text" className="form-control" />
                    {
                        lName.length < 2?
                        <p>Last Name must be at least 2 characters</p>
                        : ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input onChange = {(e)=>setemail(e.target.value)} type="email" className="form-control" />
                    {
                        email.length < 2?
                        <p>email must be at least 2 characters</p>
                        : ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input onChange = {(e)=>setpassword(e.target.value)} type="password" className="form-control" />
                    {
                        password.length < 8?
                        <p>Password must be at least 8 characters</p>
                        : ""
                    }
                </div>

                <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input onChange = {(e)=>setcPassword(e.target.value)} type="password" className="form-control" />
                    {
                        cPassword.length < 8?
                        <p>Password must match</p>
                        : ""
                    }
                </div>
            </form>
            <br />
            <hr />
            <h3>Your Form Data</h3>
            <div>
                <p>First Name: {fName}</p>
                <p>Last Name: {lName}</p>
                <p>Email: {email}</p>
                <p>PassWord: {password}</p>
                <p>Confrim Password: {cPassword}</p>
            </div>
        </div>
    );
};

export default Formulario;
