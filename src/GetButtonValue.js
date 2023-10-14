import React, { useEffect, useState } from 'react'

const GetButtonValue = () => {
    const [btValue, setBtValue] = useState(null)
    useEffect(() => {
        console.log("button value", btValue)
    })
    return (
        <div>
            <button value="Automotive" onClick={(e) => setBtValue(e.target.value)}>Click</button>
        </div>
    )
}

export default GetButtonValue