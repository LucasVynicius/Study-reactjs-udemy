import React, { useState } from 'react'

const Hooks = () => {

    const [number, setNumber] = useState(10);
  return (
    <div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Altere o valor</button>
        </div>
    </div>
  )
}

export default Hooks