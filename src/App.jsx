//import { useState } from 'react'
import './App.css'
import FriendsList from "./Components/FriendsList.jsx";
import FormAddFriend from "./Components/FormAddFriend.jsx";
import Button from "./Components/Button.jsx";
import FormSplitBill from "./Components/FormSplitBill.jsx";

function App() {

  return (
    <>
      <div className="app">
          <div className="sidebar">
            <FriendsList/>
            <FormAddFriend/>
            <Button>Add friend</Button>
          </div>
          <div>
            <FormSplitBill />
          </div>
      </div>
    </>
  )
}

export default App
