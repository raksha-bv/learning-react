import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUser] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUser(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message), setUser(originalUsers);
      });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Raksha" };
    const originalUsers = [...users];
    setUser([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUser([res.data, ...users]))
      .catch((err) => {
        setError(err.message), setUser(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUser(users.map((u) => (u.id === user.id ? updatedUser : u)));
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message), setUser(originalUsers);
      });
  };

  useEffect(() => {
    const controller = new AbortController();
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUser(res.data);
        setLoading(false);
        // .then((res) => setUser(res.data))
        // .catch((err) => setError(err.message));
      } catch (err) {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      }
    };
    fetchUser();
    return () => controller.abort();
  }, []);

  return (
    <>
      {isLoading && <p className="spinner-border"></p>}
      {error && <p>{error}</p>}
      <button className="btn btn-primary" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
