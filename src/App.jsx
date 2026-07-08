import { useState } from 'react'

let good = 0
let neutral = 0
let bad = 0

const Statistics = (props) => {
  let all = props.stats.good + props.stats.neutral + props.stats.bad

  let avg = (props.stats.good - props.stats.bad) / ((all != 0) ? all : 1)
  let pos = props.stats.good * 100 / ((all != 0) ? all : 1)
  if (all != 0) {
    return (
      
      <div>
        <h2>stastistics</h2>
        <p>
          good {props.stats.good} <br />
          neutral {props.stats.neutral} <br />
          bad {props.stats.bad} <br />
          all {all} <br />
          average {avg} <br />
          positive {pos} %
        </p>
      </div>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => {
          setGood(good + 1)
        }}>good</button>
      <button onClick={() => {
          setNeutral(neutral + 1)
      }}>neutral</button>
      <button onClick={() => {
          setBad(bad + 1)
      }}>bad</button>

      <Statistics stats={{
        good: good,
        neutral: neutral,
        bad: bad
      }}></Statistics>
    </div>
  )
}

export default App