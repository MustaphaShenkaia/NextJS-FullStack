"use client"
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const decreamentHandler = () => {
        if (count>0) {
            setCount(count - 1)
        }
    }

    const increamentHandler = () => {
        setCount(count + 1)
    }

    const resetHandler = () => {
        setCount(0)
    }


  return (
    <>
        <button onClick={decreamentHandler}>-</button>
        <span> {count} </span>
        <button onClick={increamentHandler}>+</button>
        {count !==0 && <button onClick={resetHandler}>Reset</button>}
        {/* {count !==0 ? <button>Reset</button> : null} */}
    </>
  )
}

export default Counter