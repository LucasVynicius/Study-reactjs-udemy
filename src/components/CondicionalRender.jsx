import React, { useState } from 'react'

const CondicionalRender = () => {
    const [x] = useState(true);

    const [name] = useState("Lucas");

  return (
    <div>
        <h1>Isso séra exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>O x agora é falso</p>}
        <h1>----------If ternário----------</h1>
        {name === "João" ? (<p>O nome é João</p>) : (<p>O nome não é João</p>)}
    </div>
  )
}

export default CondicionalRender