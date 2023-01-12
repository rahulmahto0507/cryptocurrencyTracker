import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptocurrencyDetails

  return (
    <li className="list-container">
      <div className="list-item-container">
        <img src={currencyLogo} alt={currencyName} className="coin-img" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="item-info">
        <p className="para">{usdValue}</p>
        <p className="para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
