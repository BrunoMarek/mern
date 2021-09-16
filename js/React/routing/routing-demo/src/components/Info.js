import React from 'react';
import { useParams } from 'react-router';


const Info = () => {
    const {id,color, height} = useParams();




    return (
        <div>
            {isNaN(id)?
                <h1>Thats not an id your cheat bastard</h1>:
                <h1 style= {{color:color, height:height}}>Details about person #{id}</h1>
            }
            
        </div>
    );
};



export default Info;