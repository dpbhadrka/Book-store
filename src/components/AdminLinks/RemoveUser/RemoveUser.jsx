import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function RemoveUser() {
  const [users, setUsers] = useState([]);
  const [deletedMail, setDeletedMail] = useState("");

  const deleteUser = (email) => {
    axios
      .post("http://127.0.0.1:8080/api/users/deleteUser", { email: email })
      .then((res) => {
        toast.success(res.data.data);
        setDeletedMail(email);
      });
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/api/users/getUser").then((res) => {
      setUsers(res.data.data);
      console.log(res.data.data);
    });
  }, [deletedMail]);

  return (
    <div className="removeList">
      {users.map((user, index) => (
        <div className="remove-delete-Botton" key={index}>
          <p>{user.email}</p>
          {user.role === "Admin" ? (
            <button
              style={{ background: "none", color: "var(--thirty-pr-color)" }}
              onClick={() => toast.error("You can't remove admin.")}
            >
              Admin
            </button>
          ) : (
            <button onClick={() => deleteUser(user.email)}>Delete</button>
          )}
        </div>
      ))}
      <ToastContainer autoClose={2300} theme="dark" />
    </div>
  );
}
