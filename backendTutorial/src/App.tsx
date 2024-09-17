import { useEffect, useState } from "react";
import "./App.css";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, isLoading, setUser, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUser(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message), setUser(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Raksha" };
    const originalUsers = [...users];
    setUser([newUser, ...users]);
    userService
      .add(newUser)
      .then((res) => setUser([res.data, ...users]))
      .catch((err) => {
        setError(err.message), setUser(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUser(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message), setUser(originalUsers);
    });
  };

  // useEffect(() => {
  //   // const fetchUser = async () => {
  //   setLoading(true);
  //   const { request, cancel } = userService.getAll<User>();
  //   request
  //     .then((res) => {
  //       setUser(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  //   // try {
  //   //   const res = await axios.get<User[]>(
  //   //     "https://jsonplaceholder.typicode.com/users",
  //   //     { signal: controller.signal }
  //   //   );
  //   //   setUser(res.data);
  //   // setLoading(false);

  //   // } catch (err) {
  //   // if (err instanceof CanceledError) return;
  //   // setError((err as AxiosError).message);
  //   // setLoading(false);
  //   // fetchUser();
  //   return () => cancel();
  // }, []);

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
