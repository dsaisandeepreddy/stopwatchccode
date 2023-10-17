// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isClock: 0, treePassing: false}

  onstartButton = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {treePassing} = this.state

    if (treePassing === true) {
      this.setState(prevState => {
        const {isClock} = prevState
        return {isClock: prevState.isClock}
      })
    } else {
      this.setState(prevState => {
        const {isClock} = prevState
        return {isClock: prevState.isClock + 1}
      })
    }
  }

  Stopbutton = () => {
    this.setState(prevState => {
      const {treePassing} = prevState
      return {treePassing: !treePassing}
    })
  }

  onResetButton = () => {
    clearInterval(this.timerId)
    this.setState({isClock: 0})
  }

  render() {
    const {isClock} = this.state
    console.log(isClock)
    return (
      <div className="flex-container">
        <h1>StopWatch</h1>
        <div className="inner-Container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
            <h1>00:0{Math.floor(isClock)}</h1>
          </div>

          <div className="innertwo-container">
            <button
              className="start-button"
              type="button"
              onClick={this.onstartButton}
            >
              Start
            </button>
            <button
              onClick={this.Stopbutton}
              className="stop-button"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onResetButton}
              className="reset-button"
              type="button"
            >
              Reset
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png"
            alt="icon-data"
          />
        </div>
      </div>
    )
  }
}

export default Stopwatch
