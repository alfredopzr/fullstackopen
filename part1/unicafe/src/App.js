// Unicafe
import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Positive = (props) => {
    return(
    <tbody>
      <tr>
        <td>{props.text} </td>
        <td>{(((props.good / props.allClicks))*100).toFixed(2) || 0}%</td>
      </tr>
    </tbody>
    )
}

const Average = (props) => {
  return(
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{(((props.good * 1 + props.bad * -1)/props.allClicks)).toFixed(2)|| 0 }</td>
      </tr>
    </tbody>
  )
}

const Statistic = (props) => {
  return(
    <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </div>
    )
  }
  return(
    <>
      <h1>Statistics</h1>
      <table>
        <Statistic text="Good" value={props.good}/>
        <Statistic text="Neutral" value={props.neutral}/>
        <Statistic text="Bad" value={props.bad}/>
        <Statistic text="Clicks" value={props.allClicks}/>
        <Average text="Average" good={props.good} bad={props.bad} allClicks={props.allClicks}/>
        <Positive text="Positive" good={props.good} allClicks={props.allClicks}/>
      </table>
    </>
  )
}


const App = () => {
  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0, [])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />

      <Button handleClick={handleNeutralClick} text='Neutral' />
      
      <Button handleClick={handleBadClick} text='Bad' />

      <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App