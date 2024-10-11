import React from "react"
import { Alert } from "flowbite-react"

const AlertBox = ({ message}) => {
  if (message.type === "error") {
    return (
      <Alert color="failure" onDismiss={() => alert("Alert dismissed!")}>
        <span className="font-medium">{message.text}</span>
      </Alert>
    )
  }
  return (
    <Alert color="success" onDismiss={() => alert("Alert dismissed!")} hidden={true}>
      <span className="font-medium">{message.text}</span>
    </Alert>
  )
}

export default AlertBox
