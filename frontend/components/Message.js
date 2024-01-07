import React from 'react'
import * as actions from '../state/action-creators'

export default function Message(props) {
  const {
    message
  } = props
  return <div id="message">{message}</div>
}
