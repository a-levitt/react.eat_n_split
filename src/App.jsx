//import { useState } from 'react'
import './App.css'
import FriendsList from "./Components/FriendsList.jsx";
import FormAddFriend from "./Components/FormAddFriend.jsx";
import Button from "./Components/Button.jsx";
import FormSplitBill from "./Components/FormSplitBill.jsx";
import {useState} from "react";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  return (
    <>
      <div className="app">
          <div className="sidebar">
            <FriendsList/>
            {showAddFriend && <FormAddFriend/>}
            <Button onClick={()=>setShowAddFriend(!showAddFriend)}>{showAddFriend ? "Close" : "Add friend"}</Button>
          </div>
          <div>
            <FormSplitBill />
          </div>
      </div>
    </>
  )
}

export default App
