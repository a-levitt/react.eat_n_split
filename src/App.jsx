//import { useState } from 'react'
import './App.css'
import FriendsList from "./Components/FriendsList.jsx";
import FormAddFriend from "./Components/FormAddFriend.jsx";
import Button from "./Components/Button.jsx";
import FormSplitBill from "./Components/FormSplitBill.jsx";
import {useState} from "react";
import initialFriends from "./friendsList.js";
import friend from "./Components/Friend.jsx";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend (friend) {
      setFriends(friends => [...friends, friend]);
      setShowAddFriend(false);
  }

  function handleSelection(friend) {
      setSelectedFriend(cur => cur?.id === friend.id ? null : friend
      );
      setShowAddFriend(false);
  }

  function handleSplitBill(value) {
      setFriends(friends =>
          friends.map(friend =>
              friend.id === selectedFriend.id ? {...friend, balance : friend.balance + value} : friend));

      setSelectedFriend(null)
  }

  return (
    <>
      <div className="app">
          <div className="sidebar">
            <FriendsList
                friends={friends}
                selectedFriend={selectedFriend}
                onSelection={handleSelection}
            />
            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
            <Button onClick={()=>setShowAddFriend(!showAddFriend)}>{showAddFriend ? "Close" : "Add friend"}</Button>
          </div>
          <div>
              {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
          </div>
      </div>
    </>
  )
}

export default App
