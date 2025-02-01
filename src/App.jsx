//import { useState } from 'react'
import './App.css'
import FriendsList from "./Components/FriendsList.jsx";
import FormAddFriend from "./Components/FormAddFriend.jsx";
import Button from "./Components/Button.jsx";
import FormSplitBill from "./Components/FormSplitBill.jsx";
import {useState} from "react";
import initialFriends from "./friendsList.js";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriend (friend) {
      setFriends(friends => [...friends, friend]);
  }

  return (
    <>
      <div className="app">
          <div className="sidebar">
            <FriendsList friends={friends} />
            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
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
