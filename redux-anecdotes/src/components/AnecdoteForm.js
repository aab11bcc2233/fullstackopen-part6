import React from "react"
import { connect } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = (props) => {

  const onClickAddAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log('add anecdote:', anecdote)

    props.createAnecdote(anecdote)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={onClickAddAnecdote}>
        <div><input name="anecdote" /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

const mapDispactchToProps = dispatch => {
  return {
    createAnecdote: value => {
      dispatch(createAnecdote(value))
    },
  }
}

export default connect(null, mapDispactchToProps)(AnecdoteForm)