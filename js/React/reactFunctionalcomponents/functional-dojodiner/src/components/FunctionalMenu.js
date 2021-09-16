import React, {useState} from 'react';

const FunctionalMenu = (props)=>{
    const [numMeals, setNumMeals] = useState(props.numServed);


    const doSomething = ()=>{
        console.log(`just clicked ${props.nameOfDish}`)
        setNumMeals(numMeals+1)
    }


    return <> 
    <div className="menuItem">
        <h3>Dish Name: {props.nameOfDish}</h3>
        <h5>Price: {props.price}</h5>
        <p>Description: {props.children}</p>
        <p>Number of this meal served so far: {numMeals} </p>

    <p><button onClick = {doSomething}>Serv me!</button></p>
</div>
</>
}

export default FunctionalMenu;