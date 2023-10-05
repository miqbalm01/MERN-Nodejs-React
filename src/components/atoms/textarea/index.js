import React from 'react'
import './textarea.css'

const textarea = ({...rest}) => {
  return (
    <div className='upload' >
        <textarea className="text-area" {...rest}>

        </textarea>
    </div>
  )
}

export default textarea