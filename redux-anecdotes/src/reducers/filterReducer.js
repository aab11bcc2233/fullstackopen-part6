import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const filterSlice = createSlice(
  {
    name: 'filter',
    initialState,
    reducers: {
      filterValue(state, action) {
        return action.payload
      }
    }
  }
)

export const { filterValue } = filterSlice.actions

export default filterSlice.reducer