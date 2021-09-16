import React, {useState, useEffect} from 'react';
import axios from 'axios';


const AxioCoins = () => {

    //use effect is a hoof/funciton that accepts a function to run as soon as the page loads up/render
    useEffect(()=>{
        console.log("page loaded!")
        // make an api call using axios
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        
        .then(res=>{
            console.log("the response look like this")
            console.log(res)


          //save the response in my state variable
            setAllCoins(res.data)
        })

        .catch(err=>{
            console.log(err)
        }) // .catch() means if there were any errors that came up with the api request
    },[])

    const [allCoins, setAllCoins] = useState([])




    const clickHandler = ()=>{
        console.log("clicked!")
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        
        .then(res=>{
            console.log("the response look like this")
            console.log(res)
          //save the response in my state variable

        
            res.data.sort(function (a, b){
                return b.current_price - a.current_price
                // a - b menor para o maior
                // b - a maior para o menor
            })
            setAllCoins(res.data)
        })
        .catch(err=>{
            console.log(err)
        }) // .catch() means if there were any errors that came up with the api request
    }




    return (
        <div>
            <button onClick={clickHandler} className="btn btn-success">Sort Descending!</button>
        {
        allCoins.map((coin, idx)=>{
            return <div  key={idx} className="card">
            <div className="card-body">
                <h4 className="card-title">{coin.name}</h4>
                <p className="card-text">
                    Current price: ${coin.current_price}
                </p>
                {/* <a href="#!" className="btn btn-primary mb-3">Go somewhere</a> */}
            </div>
        </div>
        
        })
        }
        </div>
    );
};



export default AxioCoins;