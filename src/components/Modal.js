import React from 'react'
import Form from './Form';

function Modal() {
  return (
    <div className='overlay' >
      <div className='modal'>
      <Form />
      </div>
    </div>

  )
}

export default Modal