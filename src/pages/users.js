import React, { useEffect } from "react";
import { useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    const [profile, setProfile] = useState("true")
    const [id1, setId1] = useState("")
    const [id2, setId2] = useState("")

    const email1 = localStorage.getItem("emailSpace")

    useEffect(() => {
        getUsers()
    }, [])


    async function getUsers() {
      const response = await fetch("https://zchatapp.adaptable.app/api/getUsers", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              profile,
              email1
          })
      })
      const data = await response.json();
      console.log(data)
      if (data.get) {
          setUsers(data.users)
      }
    }

    return (
        <div className="container">
           <p className="para">List of all users</p>
           <p className="para">DoubleClick a user name to enter Private Chat</p>
           {users.map((user) => {
               const getUserClicked = () => {
                   setId1(`${email1}space${user.email}`);
                   localStorage.setItem("spaceid1", id1)
                   localStorage.setItem("receiversName", user.name)
                   console.log(id1)
                   setId2(`${user.email}space${email1}`)
                   localStorage.setItem("spaceid2", id2)
                   console.log(id2)
               }
               return(
                    <ul className="usersList" key={Math.random()}>
                        <li key={Math.random()}>
                           <fieldset className="usersListItem" onClick={getUserClicked} onDoubleClick={() => {window.location = "/chats"}}>
                           <h4>{user.name}</h4>
                           </fieldset>
                        </li>
                    </ul>                       
               )
           })}
        </div>
    )
} 


export default Users;