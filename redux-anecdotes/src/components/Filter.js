import React from "react"
import { connect } from "react-redux"
import { filterValue } from "../reducers/filterReducer"

const Filter = (props) => {


  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const v = event.target.value
    props.filterValue(v)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispactchToProps = dispatch => {
  return {
    filterValue: value => {
      dispatch(filterValue(value))
    },
  }
}

// const ConnectedFilter = connect(null, { filterValue })(Filter)
const ConnectedFilter = connect(null, mapDispactchToProps)(Filter)

export default ConnectedFilter