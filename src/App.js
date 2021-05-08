import "./App.css"
import Profile from "./components/profile"
import UserList from "./components/userList"
import UserState from "./context/users/userState"

function App() {
  return (
    <UserState>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <UserList />
        </div>
        <div style={{ width: "30%" }}>
          <Profile />
        </div>
      </div>
    </UserState>
  )
}

export default App
