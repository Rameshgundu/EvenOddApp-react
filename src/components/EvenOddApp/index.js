// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {random: 0}

  increment = () => {
    this.setState(prevState => ({
      random: Math.ceil(Math.random() * 100),
    }))
  }

  getEvenOrOdd = () => {
    const {random} = this.state
    return random % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const text = this.getEvenOrOdd()
    const {random} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>Count {random}</h1>
          <div className="sub-container">
            <p>Count is {text}</p>
            <button type="button" onClick={this.increment}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
