"use client"
import axios from 'axios'
import React, { useState } from 'react'

// https://api.github.com/users/naveed-rana

const Github = () => {

    const [userName, setUserName] = useState("")
    const [data, setData] = useState({})
    const [followers, setFollowers] = useState([])

    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const onClickHandler = async() => {
        setFollowers([])
        let response = await fetch(`https://api.github.com/users/${userName}`)
        response = await response.json()        
        setData(response)
        //console.log(response)
    }

    const getFollowersHandler = async() => {
        let response = await axios.get(data.followers_url)           
        setFollowers(response.data)
        console.log(response.data)
    }



  return (
    <div>
        <label htmlFor="userName">Enter Username:</label>
        <input type="text" onChange={onChangeHandler} /> <br />
        <button onClick={onClickHandler}>Seerch</button>
        <br />
        <hr />

        
        {data && 
        <>
            <h3>Github User</h3>
            <img src={data.avatar_url} width={100}/>
            <p><b>Bio:</b> {data.bio} - {data.followers} </p>

            <button onClick={getFollowersHandler}>Get Followers</button>
            </>
        }
        <br />
        
        {
            data &&
            <>
            <table>
            <tr>
                <th>Id</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Followers</th>
            </tr>
            {
                followers.map( (item) => {
                    return(
                        <tr key={item.id}>
                            <td> {item.id} </td>
                            <td> <img src={item.avatar_url} width={50} alt="" /> </td>
                            <td> {item.login} </td>
                            <td> {item.type} </td>
                        </tr>
                    )
                })
            }
        </table>
            </>
        }
    </div>
  )
}

export default Github