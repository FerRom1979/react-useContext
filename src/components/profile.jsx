import React, { useContext } from "react"
import UserContext from "../context/users/userContext"

const Profile = () => {
  const { selectedUser } = useContext(UserContext)
  return (
    <>
      {selectedUser ? (
        <div>
          <img src={selectedUser.avatar} alt='avatar' width='200px' />{" "}
          <p>{selectedUser.first_name}</p>
          <p>{selectedUser.last_name}</p>
          <p>{selectedUser.email}</p>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  )
}

export default Profile
