import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import UsersList from './Components/UsersList'
import axios from 'axios'
import UsersForm from './Components/UsersForm'

function App() {
  const [users, setUsers] = useState([])


  useEffect(()=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
    
  },[])
  console.log(users)

  const getUsers = ( )=>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
    .then(res => setUsers(res.data))
  }
  const [userSelected, setUserSelected] = useState(null)

  const selectUser = ( user )=>{
    setUserSelected( user )
    alert('Selected')
  }
  const deselectUser = ( )=> setUserSelected( null )

  const deleteUser = ( user )=>{
    axios.delete( `https://users-crud1.herokuapp.com/users/${user.id}/` )
    .then( getUsers)
    .catch( error => console.log(error.response))
  }
  




  return (
    <div className="App">
      <header className="App-header">
        <UsersForm  getUsers={getUsers} userSelected={userSelected} deselectUser={deselectUser}/>
        <UsersList  users={users} selectUser={selectUser} deleteUser={deleteUser}/>
      </header>
    </div>
  )
}

export default App
