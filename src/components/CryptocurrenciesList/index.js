import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrencyData} = this.props
    return (
      <div className="currency-list-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="main-img"
        />
        <div className="item-container">
          <nav className="nav-container">
            <div>
              <h1 className="nav-header">Coin Type</h1>
            </div>
            <div className="nav-sub-container">
              <p className="nav-header">USD</p>
              <p className="nav-header">EURO</p>
            </div>
          </nav>
          <ul className="crypto-currency-list-container">
            {cryptocurrencyData.map(item => (
              <CryptocurrencyItem key={item.id} cryptocurrencyDetails={item} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
