import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = (props) => {
  // Display Anecdote with Most Votes
  const mostVotes = Math.max(...props.votes)
  const winner = props.anecdotes[props.votes.indexOf(mostVotes)]
  if (mostVotes === 0) {
    return (
      <p>No votes yet</p>
    )
  }
  return(
    <div>
      <p>{winner}</p>
      <p>Vote Count: {mostVotes}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const randomAnecdote = () => {
    
    setSelected(prev => Math.floor(Math.random() * anecdotes.length))
  }
  const voteAnecdote = () => {
    const allVotes = [...votes]
    allVotes[selected]+= 1
    setVotes(allVotes)
  }
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <p>Vote Count: {votes[selected]}</p>
      <Button handleClick={randomAnecdote} text="Next Anecdote"/>
      <Button handleClick={voteAnecdote} text="Vote"/>
      <h1>Anecdote With Most Votes</h1>
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App