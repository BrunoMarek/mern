import React, {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upage: this.props.age
        };
    }
    render () {
        const click = ()=>{
            this.setState({upage: this.state.upage+1})
        }

        return <> <div className = "personcard">
            <h1>{this.props.firstName},  {this.props.lastName}</h1>
            <h5>Age: {this.state.upage}</h5>
            <h5>Hair Color: {this.props.hairColor}</h5>
            <p><button onClick={click}>Birthday Button for {this.props.firstName} {this.props.lastName}</button></p>







        </div>
    
        


        </>

    }







}
export default PersonCard;