"use client"
import React, { useState } from 'react'

const Home = () => {

  // const [username, setUsername] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState("")

  const [state, setState] = useState({
    username: "",
    email:"",
    phone:0
  })

  //-------------------------------------

  // const nameHandler = (e) => {
  //   // console.log("changeHandler " , e.target.value)
  //   setUsername(e.target.value)
  // }

  // const emailHandler = (e) => {
  //   setEmail(e.target.value)
  // }

  // const phoneHandler = (e) => {
  //   setPhone(e.target.value)
  // }

  const changeHandler = (e) => {

    console.log(e.target.value);
    console.log(e.target.name);

    setState({
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      {/* <input onChange={(e) => nameHandler(e)} type="text" placeholder="Enter your name" /> */}
      {/* <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your name" />
      <br />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
      <br />
      <input onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Enter your phone" />
      <br /> */}

      <input onChange={changeHandler} type="text" name="username" placeholder="Enter your name" />
      <br />
      <input onChange={changeHandler} type="email" name="email" placeholder="Enter your email" />
      <br />
      <input onChange={changeHandler} type="phone" name="phone" placeholder="Enter your phone" />
      <br />

      <p>Name is {state.username} </p>
      <p>Email is {state.email} </p>
      <p>Phone is {state.phone} </p>
    </div>
  )
}

export default Home