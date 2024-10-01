import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Lucas", "Miguel", "Noah", "Eduarda"]);
    const [users, setUsers] = useState([
        {id:1, name: "Lucas", age: 28 },
        {id:2, name: "Eduarda", age: 27 },
        {id:3, name: "Miguel", age: 5 },
        {id:4, name: "Lucas", age: 0.6 }
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id);

        });
    };
  return (
    <div>
        <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar</button>
    </div>
  );
};

export default ListRender