/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../context/users/userContext"

const UserList = () => {
  const { users, getUser, getProfile } = useContext(UserContext)
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      <ul>
        {users.map((user) => (
          <a href='#!' key={user.id} onClick={() => getProfile(user.id)}>
            <img src={user.avatar} alt='avatar' width='70' />
            <p>
              name: {user.first_name}- lastName: {user.last_name}
            </p>
          </a>
        ))}
      </ul>
    </div>
  )
}

export default UserList
