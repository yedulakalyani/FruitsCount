// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangocount: 0,

    bananacount: 0,
  }

  onIncrementMango = () => {
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  render() {
    const {mangocount, bananacount} = this.state

    return (
      <div className="bg-container">
        <div className="fruit-container">
          <h1 className="head">
            Bob eat <span className="sub">{mangocount}</span> mangoes
            <span className="sub"> {bananacount} </span>
            bananas
          </h1>
          <div className="container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />

              <button
                type="button"
                onClick={this.onIncrementMango}
                className="button"
              >
                Eat Mango
              </button>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                onClick={this.onIncrementBanana}
                className="button"
              >
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
