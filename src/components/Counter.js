import React, { useState } from "react";


    const [count, setCount] = useState(0)
    const [isLogin, setLogin] = useState(false)
    const [username, setUsername] = useState('')
    return (
        <div>

            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={setLogin(!isLogin)}>{isLogin ? "Login" : "Log out"}</button>
            <input onChange={(e) => setUsername(e.target.value)}></input>
<button onClick={() => setCount(count + 2)}>+3</button>
            <p>{username}</p>
        </div>
    )
}


export default Counter;
