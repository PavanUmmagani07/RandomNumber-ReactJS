// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateNumber = () => Math.ceil(Math.random() * 100)

  onClickGenerate = () => {
    const newRandomNumber = this.generateNumber()
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickGenerate}
            >
              Generate
            </button>
          </div>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
