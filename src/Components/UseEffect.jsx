import { useState, useEffect } from "react";
import "./Styles.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <h1>UseEffect</h1>
      <div className="boxes">
        {users.map((user, i) => (
          <div key={i} className="box">
            <h5 className="user">
              <strong>Name:</strong> {user.name}
            </h5>
            <p className="user">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="user">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="user">
              <strong>Phone Number:</strong> {user.phone}
            </p>
            <p className="user">
              <strong>Website:</strong> {user.website}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
