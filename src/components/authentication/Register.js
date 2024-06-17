import React, {useState} from 'react';
import useSubmit from '../../Api/useSubmit';

function Register() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const { message, dispatch } = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ username, firstName, lastName, password }, '/login', '/auth/register');
  };

  return (
    <div className="auth-container">
        {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)} id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required />
        </div>
        <button type="submit" >Register</button>
      </form>
      <div className="bottom-text">Already registered? <a href='/login'>login</a></div>
    </div>
  );
}

export default Register;
