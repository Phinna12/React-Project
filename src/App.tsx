import './App.css'
import UserCard from './Components/UsereCard'
import { users } from './data/data'
import DashboardHeader from './Components/DashboardHeader'

function App() {
  return (
    <>
      <div style={{padding: "20px"}}>
        <DashboardHeader title='User Profile Dashboard'>
          <p>Welcome to our Tech Community</p>
        </DashboardHeader>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
            {users.map((user)=> (<UserCard key = {user.id} user={user} />))}
        </div>
      </div>
    </>
  )
}

export default App
