import { connect } from "react-redux"

const Notification = (props) => {

  const message = props.message

  console.log("Notification message", message)

  if (message === null) {
    return null
  }


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification