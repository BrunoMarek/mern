import React, {useState} from 'react';


const NinjaForm = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        imgLink: "",
        numProj: "",
        favHobby: "",
        favCollor: ""
    });
    
    const [listOfNinjas, setListOfNinjas] = useState([])

    const changeHandler = (e)=>{
        console.log("you are changin some input -->", e.target.name, e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }


    const addNinja = (e)=>{
        e.preventDefault();
        console.log("yeeeey")

        // Add tho the list(array) of ninjas the new object cointaining info from the form(new ninja)
        setListOfNinjas([...listOfNinjas, formInfo])
        // return empty values when clicked submit 
        setFormInfo({
            name: "",
            imgLink: "",
            numProj: "",
            favHobby: "",
            favCollor: ""
        })
    }

    // delete ninja
    const deleteNinja = (e,i)=>{
        console.log("deleting ninja", i)


        //goal is to delete somethign at index i

        // two ways to accomplish this goal
        // 1st way ----> filter
        let newlistOfNinjas = listOfNinjas.filter((ninja, idx)=>{
            return idx != i //return back a new array where idx !i, idx is the number of each item in the list
        })
        setListOfNinjas(newlistOfNinjas);


    }

    return (
        <div className="container">
            <form onSubmit={(e)=>addNinja(e)}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input onChange= {(e)=>changeHandler(e)} type="text" name="name" id="" className="form-control" value={formInfo.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Image Link:</label>
                    <input  onChange= {(e)=>changeHandler(e)} type="text" name="imgLink" id="" className="form-control" value={formInfo.imgLink} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input  onChange= {(e)=>changeHandler(e)} type="number" name="numProj" id="" className="form-control" value={formInfo.numProj} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Hobby:</label>
                    <input  onChange= {(e)=>changeHandler(e)} type="text" name="favHobby" id="" className="form-control" value={formInfo.favHobby} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Favorite Collor:</label>
                    <input  onChange= {(e)=>changeHandler(e)} type="text" name="favCollor" id="" className="form-control" value={formInfo.favCollor} />
                </div>
                <input type="submit" value="Add to Wall of Ninjas" className="btn btn-success mt-3" />
            </form>
            <br />
            <hr />
            {
                listOfNinjas.map((ninja, i) =>{
                    return <div key={i} style= {{backgroundColor: ninja.favCollor}} className="card">
                        <img className="card-img-top" src="/images/pathToYourImage.png" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">{ninja.name}</h4>
                            <p className="card-text">
                                Favorite Hobby: {ninja.favHobby}
                            </p>
                            <button onClick= {(e)=>deleteNinja(e,i)} className="btn btn-danger">Retire</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};


export default NinjaForm;