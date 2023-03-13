import './index.css'
import {Component} from 'react'

const headsCoinUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsCoinUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    coinUrl: headsCoinUrl,
  }

  onTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        coinUrl: headsCoinUrl,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        coinUrl: tailsCoinUrl,
      }))
    }
  }

  render() {
    const {heads, tails, coinUrl} = this.state
    const total = heads + tails

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="note">Heads (or) Tails</p>
          <img className="toss-image" src={coinUrl} alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossButton}
          >
            Toss Coin
          </button>
          <div className="score-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
