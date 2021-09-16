import React, { Component} from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numMeals: this.props.numberOfMealsServed
        };
    }

    render() {



        const doSomething = ()=>{
            console.log(`you clicked on ${this.props.nameOfDish}!`);
            this.setState({numMeals: this.state.numMeals+1})
        }



        return <> <div className="menuItem">
            <h3>Dish Name: {this.props.nameOfDish}</h3>
            <h5>Price: {this.props.price}</h5>
            <p>Description: {this.props.children}</p>
            <p>Number of this meal served so far {this.state.numMeals}</p>

            <p><button onClick = {doSomething}>Click me!</button></p>
        </div>
        </>
    }
}

export default Menu;