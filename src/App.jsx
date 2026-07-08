import { useState } from 'react'

let good = 0
let neutral = 0
let bad = 0

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const Statistics = ({stats}) => {
  let all = stats.good + stats.neutral + stats.bad

  let avg = (stats.good - stats.bad) / ((all != 0) ? all : 1)
  let pos = stats.good * 100 / ((all != 0) ? all : 1)
  if (all != 0) {
    return (
      
      <div>
        <h2>stastistics</h2>
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{stats.good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{stats.neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{stats.bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{pos + " %"}</td>
            </tr>
          </tbody>
        </table>

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
      <Button onClick={() => {setGood(good + 1)}} text={"good"}/>
      <Button onClick={() => {setNeutral(neutral + 1)}} text={"neutral"}/>
      <Button onClick={() => {setBad(bad + 1)}} text={"bad"}/>

      <Statistics stats={{
        good: good,
        neutral: neutral,
        bad: bad
      }}></Statistics>
    </div>
  )
}

export default App