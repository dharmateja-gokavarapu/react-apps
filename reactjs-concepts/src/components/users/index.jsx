import { useState, useEffect } from "react";
import UserCard from "./components/user-card";
import "./style.css";

const UsersComponent = () => {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(true);

  async function getAllUsers(params) {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const response = await apiResponse.json();
      if (response?.users) {
        setUsersList(response.users);
        setPending(false);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  if (pending) return <h1>Fetching Users Data...!</h1>;

  return (
    <div className="users-container">
      <h3>Users Componet</h3>
      <div className="users-list">
        {usersList && usersList.length > 0 ? (
          usersList.map((user) => <UserCard key={user.id} users={user} />)
        ) : (
          <h3>Not Found Users Data</h3>
        )}
      </div>
    </div>
  );
};

export default UsersComponent;
