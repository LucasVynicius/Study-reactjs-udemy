import React from 'react'

const Events = () => {
    const hadleMyEvent = (e) => {
        console.log(e);
        alert("Evento funcionando");
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando!</h1>;
        } else {
            return <h1>Também renderiza!</h1>;
        }
    };

  return (
    <div>
        <div>
            <button onClick={hadleMyEvent}>click</button>
        </div>
        <div>
            <button onClick={() => alert("Clicou!")}>Testa Evento</button>
            <button onClick={() => {
                if (true){
                    console.log("isso não deveria existir!");
                }
            }}>Testa Evento2</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events