import React from 'react'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
      </div>
    )
  }
  
  export default Notification