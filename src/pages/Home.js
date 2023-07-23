import React from "react";

const Home = () => {
    return (
        <div className="container">
            <div className="flexHeader">
               <p>RzChat</p>
                <p>...</p>
            </div>
            <center>
            <h1 className="signIn">Sign in to RzChat</h1>
            <div className="img1">
            </div>
            <div>
            <input type={"button"} value={"Sign in"} className="sign" onClick={() => {window.location = "/login"}}/><br />
            <input type={"button"} value={"Sign up"} className="sign2" onClick={() => {window.location = "/register"}}/>
            </div>
            <p className="para">For the best experience, use your work or school email</p>
            </center>
        </div>
    )
}

export default Home;