import React, { useState } from "react";

const Counter = () => {
<<<<<<<<< Temporary merge branch 1
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>this is madhavi</h1>
    </div>
  );
};

=========

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


>>>>>>>>> Temporary merge branch 2
export default Counter;
