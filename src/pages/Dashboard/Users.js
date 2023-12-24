import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'; 
import UserDetail from '../Dashboard/UserDetail';

function Users() {
  const[users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((data) => setUsers(data))
    .finally(() => setLoading(false))
  },[])

  return (
    <div>
      <h2>Kullanıcılar</h2>
      {loading && <div>Loading...</div>  }
      <ul>

      {
        users.map((user) =>(
          <li key={user.id} >
            <Link to= {`${user.id}`} state={user} >{user.name}</Link>
          </li>
          ))
        }
        </ul>
    </div>
  )
}

export default Users
