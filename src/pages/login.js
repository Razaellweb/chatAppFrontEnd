import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function registerUser (event) {
        event.preventDefault();
      const response = await fetch("https://zchatapp.adaptable.app/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              email,
              password
          })
      })
      const data = await response.json();
      console.log(data)
      if (data.loggedIn) {
          localStorage.setItem("nameSpace", data.name)
          localStorage.setItem("emailSpace", data.email)
          window.location = "/users"
      }
      else {
          alert("Invalid login")
          window.location = "/login"
      }
    }

    return (
        <div className="container">
            <center>
               <h1 className="header">Sign in</h1>
           </center>
           <div className="img1"></div>
           <center>
           <div>
               <form onSubmit={registerUser}>
               <input type={"text"} className="input" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/><br /><br />
               <input type={"password"} className="input" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} /><br /><br />
               <input type={"submit"} className="btn" />
               </form>
           </div>
           <p className="para">For the best experience, use your work or school email</p>
           </center>
        </div>
    )
}

export default Login;