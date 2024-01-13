import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Message(props) {
  const {
    message
  } = props
  return <div id="message">{message}</div>
}

const mapStateToProps = (state) => ({
  message: state.infoMessage
});

export default connect(mapStateToProps, actions)(Message)