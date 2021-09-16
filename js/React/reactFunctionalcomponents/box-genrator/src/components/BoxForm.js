import React, {useState} from 'react';


const BoxForm = () => {
    const [boxInfo, setBoxInfo] = useState({
        colorname: "",
        favcolor: ""

    });

    const [listOfBoxes, setListOfBoxes] = useState([])

    const changeColor = (e)=> {
        console.log("changing color", e.target.name, e.target.value)
        setBoxInfo({
            ...boxInfo, [e.target.name]: e.target.value
        })
    }

    const addColor = (e)=>{
        e.preventDefault();

        setListOfBoxes([...listOfBoxes,boxInfo])
        setBoxInfo({
            colorname: "",
            favcolor: ""
        })
    }

    return (
        <div className="container">
            <form onSubmit={(e)=>addColor(e)}>
            <div className="form-group">
                    <label htmlFor="">Color Name</label>
                    <input onChange= {(e)=>changeColor(e)} type="text" name="colorname" id="" className="form-control" value={boxInfo.colorname}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Color</label>
                    <input onChange= {(e)=>changeColor(e)} type="text" name="favcolor" className="form-control" value={boxInfo.favcolor} />
                </div>
                <input type="submit" value="Add a color" className="btn btn-success"/>
            </form>
            <br />
            <hr />
            {
            listOfBoxes.map((box, i)=>{
                return <div key={i} style={{backgroundColor:box.favcolor}} className="card"> 
                    <div className="card-body"> 
                        <p className="card-text">
                            Color name : {box.colorname}
                        </p>
                    </div>
                </div>

            })
            }
        </div>
    );
};



export default BoxForm;