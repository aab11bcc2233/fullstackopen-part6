import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    if (state.filter === '') {
      return state.anecdotes
    }

    return state.anecdotes.filter(v => v.content.includes(state.filter))
  })
  const dispatch = useDispatch()

  const oncClickVote = (id) => {
    console.log('vote', id)
    const item = anecdotes.find(v => v.id === id)
    const newItem = {
      ...item,
      votes: item.votes + 1
    }
    dispatch(vote(newItem))

    dispatch(showNotification(`you voted '${item.content}'`, 5))

  }

  return (
    <div>
      {
        anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => oncClickVote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default AnecdoteList