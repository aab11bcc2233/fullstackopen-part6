import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const notificationSlice = createSlice(
  {
    name: 'notification',
    initialState,
    reducers: {
      notification(state, action) {
        return action.payload
      }
    }
  }
)


export const { notification } = notificationSlice.actions

let timeoutID;

export const showNotification = (message, timeout) => {
  return async dispatch => {
    if (timeoutID !== undefined) {
      clearTimeout(timeoutID)
    }

    dispatch(notification(message))
    if (message !== null) {
      timeoutID = setTimeout(
        () => dispatch(notification(null)),
        timeout * 1000
      )
    }
  }
}

export default notificationSlice.reducer