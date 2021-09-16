import React, {useState} from 'react';


const Coins = () => {

    const [allCoins, setAllCoins] = useState([])




    const clickHandler = ()=>{
        console.log("clicked!")
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(res=>{
            return res.json();
        }) //.then() means when the response is recieved back from the api call
        
        .then(res=>{
            console.log("the response look like this")
            console.log(res)
          //save the response in my state variable

        
            res.sort(function (a, b){
                return b.current_price - a.current_price
                // a - b menor para o maior
                // b - a maior para o menor
            })
            setAllCoins(res)
        })
        .catch(err=>{
            console.log(err)
        }) // .catch() means if there were any errors that came up with the api request
    }




    return (
        <div>
            <button onClick={clickHandler} className="btn btn-success">Show me the money!</button>
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



export default Coins;