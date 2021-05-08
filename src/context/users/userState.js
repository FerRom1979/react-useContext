import React, { useReducer } from "react"
import UserReducer from "./userReducer"
import UserContext from "./userContext"
import axios from "axios"

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  }
  const [state, dispatch] = useReducer(UserReducer, initialState)
  const getUser = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users")
      dispatch({
        type: "GET_USERS",
        payload: res.data.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
  const getProfile = async (id) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`)
      dispatch({
        type: "GET_PROFILE",
        payload: res.data.data,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUser,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
export default UserState
