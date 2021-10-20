import React from 'react'
import './input.scss'
const Input = (props) => {
     return (
          <input type={props.type}
           value={props.value} 
           onChange={props.onChange ? (e)=>props.onChange(e) : null}
           placeholder={props.placeholder}
           />
     )
}

export default Input
