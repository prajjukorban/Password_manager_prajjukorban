import React, { useRef, useState, useEffect } from "react";
import './App.css'; // Create and import this CSS file


const Input = () => {
  const ref = useRef();
  const [form, setForm] = useState({ url: "", username: "", password: "" });
  const [formData, setFormData] = useState([]);

  const changeType = () => {
    let a = document.getElementById("password");
    if (ref.current.src.includes("hide.png")) {
      ref.current.src = "view.png";
      a.type = "text";
    } else {
      ref.current.src = "hide.png";
      a.type = "password";
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveData = () => {
    if (!form.url || !form.username || !form.password) {
      alert("All fields are required");
      return;
    }
    const newFormData = [...formData, form];
    setFormData(newFormData);
    localStorage.setItem("data", JSON.stringify(newFormData));
    setForm({ url: "", username: "", password: "" });
  };

  const deleteData = (index) => {
   let c = confirm("Are you sure you want to delete this item?")
    if(c){
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
    localStorage.setItem("data", JSON.stringify(updatedFormData));
    }
    else{

    }
  };

  useEffect(() => {
    let data = localStorage.getItem("data");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="container">
      <div className="form-container">
        <input
          required
          type="url"
          name="url"
          className="inputs"
          value={form.url}
          onChange={handleChange}
          placeholder="Enter URL"
        />
        <input
          className="inputs"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <div className="pass">
          <input
            className="inputs"
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <img id="img" onClick={changeType} ref={ref} src="hide.png" alt="Show" />
        </div>
        <button id="btn" onClick={saveData}>Save</button>
      </div>

      {formData.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              <th>URL</th>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (
              <tr key={index}>
                <td><a href= {item.url} target="_blank" >{item.url}</a></td>
                <td>{item.username}</td>
                <td>{item.password}</td>
                <td><button onClick={() => deleteData(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No passwords saved</p>
      )}
    </div>
  );
};

export default Input;
