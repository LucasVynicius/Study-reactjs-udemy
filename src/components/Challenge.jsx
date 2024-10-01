import React from 'react'

const Challenge = () => {
    const soma = () => {
        let a = 5;
        let b = 10;
        const result = a + b;
        alert(result);
    };
  return (
    <div>
        <button onClick={soma}>Resultado</button>
    </div>
  )
}

export default Challenge