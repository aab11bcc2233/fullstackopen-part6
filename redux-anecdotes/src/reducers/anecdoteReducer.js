import { createSlice } from "@reduxjs/toolkit"
import anecdotesService from '../services/anecdotes'


// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const sortDescByVotes = (a, b) => b.votes - a.votes

// const initialState = anecdotesAtStart.map(asObject).sort(sortDescByVotes)


const anecdoteSlice = createSlice(
  {
    name: 'anecdotes',
    initialState: [],
    reducers: {
      voteAnecdote(state, action) {
        const data = action.payload
        return state.map(v => v.id === data.id
          ? data
          : v)
          .sort(sortDescByVotes)
      },
      addAnecdote(state, action) {
        state.push(action.payload)
      },
      setAnecdotes(state, action) {
        return action.payload.sort(sortDescByVotes)
      }
    }
  }
)

export const { voteAnecdote, addAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const list = await anecdotesService.getAll()
    dispatch(setAnecdotes(list))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdotesService.create(content)
    dispatch(addAnecdote(data))
  }
}

export const vote = (anecdote) => {
  return async dispatch => {
    const data = await anecdotesService.vote(anecdote)
    dispatch(voteAnecdote(data))
  }
}

export default anecdoteSlice.reducer