// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mangoCounter = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  bananaCounter = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-counter-card">
          <h1 className="fruit-count-statement">
            Bob ate
            <span className="fruit-count-digit"> {mangoes}</span> mangoes
            <span className="fruit-count-digit"> {bananas}</span> bananas
          </h1>
          <div className="fruits-card">
            <div className="each-fruit-card">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.mangoCounter} className="buttons">
                Eat Mango
              </button>
            </div>
            <div className="each-fruit-card">
              <img
                className="fruit-img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.bananaCounter} className="buttons">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
