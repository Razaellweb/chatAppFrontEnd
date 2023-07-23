import react from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./pages/register"
import Login from "./pages/login"
import Users from "./pages/users";
import ChatPage from "./pages/chatpage";
import Home from "./pages/Home";
import './index.css'



const App = () => {

    return (
        <BrowserRouter>
           <Routes>
               <Route path="/register" exact component={Register} element={<Register/>} />
               <Route path="/login" exact component={Login} element={<Login/>} />
               <Route path="/chats" exact component={ChatPage} element={<ChatPage/>} />
               <Route path="/users" exact component={Users} element={<Users/>} />
               <Route path="/" exact component={Home} element={<Home/>} />

           </Routes>
        </BrowserRouter>
    )
}

export default App;