import '../App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coin from './coin'
import { Link } from "react-router-dom";




function CoinsListLKR() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=LKR&order=market_cap_desc&per_page=100&page=1&sparkline=false')

      .then(res => {
        setCoins(res.data);

      })
      .catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }


  const filterCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (

    <div className="coin-app">


      <div className='coin-search'>
        <h1 className='coin-text'>Search Currency</h1>

        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange} />
          <Link to="/usd"><button className='btn-currency button-33'>USD</button></Link>
        </form>
      </div>

      {filterCoins.map(coin => {
        return (
          <Coin key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume} />
        )
      })}


      <br />
      <br />
      <br />


      <p>App by Supun Dileepa</p>


    </div>


  );
}

export default CoinsListLKR;
