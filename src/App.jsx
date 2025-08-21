import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
//Fetch data from API
      fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await fetch(
  "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
    );
    const data = await response.json();
    setUsers(data);
  }

  return (
    <main className='app'>
      <h1>My first React App</h1>
      
      <section className="grid">
        {users.map(user => (
        <User key={user.id} name= {user.name} email= {user.mail} image={user.image} />
      ))}
      </section>
      
      
    </main>
  )
}

export default App
