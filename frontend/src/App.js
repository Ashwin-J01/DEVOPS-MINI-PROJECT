import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const fetchUsers = () => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = () => {
    fetch("http://localhost:5000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    }).then(() => {
      fetchUsers();
      setName("");
      setEmail("");
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Management </h1>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={addUser}>Add User</button>

      <h2>Users:</h2>
      {users.map(user => (
        <div key={user._id}>
          {user.name} - {user.email}
        </div>
      ))}
    </div>
  );
}

export default App;