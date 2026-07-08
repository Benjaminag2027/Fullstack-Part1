import { useState } from 'react'

let good = 0
let neutral = 0
let bad = 0
let all = 0

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => {
          const updatedGood = good + 1
          setGood(updatedGood)
          setAll(updatedGood + neutral + bad)
        }}>good</button>
      <button onClick={() => {
          const updatedNeutral = neutral + 1
          setNeutral(updatedNeutral)
          setAll(good + updatedNeutral + bad)
      }}>neutral</button>
      <button onClick={() => {
          const updatedBad = bad + 1
          setBad(updatedBad)
          setAll(good + neutral + updatedBad)
      }}>bad</button>

      <h2>stastistics</h2>
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {all} <br />
        average {(good - bad) / ((all != 0) ? all : 1)} <br />
        positive {good * 100 / all} %
        </p>
    </div>
  )
}

export default App