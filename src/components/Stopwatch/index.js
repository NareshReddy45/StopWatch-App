import {useState, useRef} from 'react'
import './index.css'

function StopWatch() {
  const [time, setTime] = useState(0)
  const timerRef = useRef(null)

  const formatTime = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0')
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
    setTime(0)
  }

  return (
    <div className="bg-container">
      <h1 className="main-heading">Stopwatch</h1>
      <div className="stopwatch-container">
        <div className="timer-row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
            className="stopwatch-icon"
          />
          <h1 className="timer-heading">Timer</h1>
        </div>
        <h1 className="timer-display">{formatTime(time)}</h1>
        <div className="button-container">
          <button
            className="control-button start-button"
            onClick={startTimer}
            type="button"
          >
            Start
          </button>
          <button
            className="control-button stop-button"
            onClick={stopTimer}
            type="button"
          >
            Stop
          </button>
          <button
            className="control-button reset-button"
            onClick={resetTimer}
            type="button"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopWatch
