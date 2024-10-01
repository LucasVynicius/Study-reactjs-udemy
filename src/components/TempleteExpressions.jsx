import React from 'react'
import MyComponent from './MyComponent';

const TempleteExpressions = () => {
    const name = "Lucas";

  return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <MyComponent/>
    </div>
  )
}

export default TempleteExpressions