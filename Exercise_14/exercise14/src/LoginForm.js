import React from "react";
import "./LoginForm.css";


const LoginForm = () => {
  return (
    <div className="login-container">
      <h2>Novell Services Login</h2>
      <form>
        <label>Username: <input type="text" /></label>
        <label>Password: <input type="password" /></label>
        <label>City of Employment: <input type="text" /></label>
        <label>Web Server:
          <select>
            <option>Choose a server</option>
            <option>Server 1</option>
            <option>Server 2</option>
          </select>
        </label>


        <fieldset>
          <legend>Please specify your role:</legend>
          <label><input type="radio" name="role" /> Admin</label>
          <label><input type="radio" name="role" /> Engineer</label>
          <label><input type="radio" name="role" /> Manager</label>
          <label><input type="radio" name="role" /> Guest</label>
        </fieldset>


        <fieldset>
          <legend>Single Sign-on to the following:</legend>
          <label><input type="checkbox" /> Mail</label>
          <label><input type="checkbox" /> Payroll</label>
          <label><input type="checkbox" /> Self-service</label>
        </fieldset>


        <div className="buttons">
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};


export default LoginForm;
