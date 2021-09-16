import React from 'react';
import { useParams } from 'react-router';

const Param = () => {
    const {id,color, backgroundColor} = useParams();

    return (
        <div>
            <h1>Thats not an id your cheat bastard</h1>:
                <h1 style= {{color:color, backgroundColor:backgroundColor}}>Details about person #{id}</h1>
        </div>
    );
};



export default Param;