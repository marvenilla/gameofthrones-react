import React, {useState} from 'react';
import useSubmit from '../../Api/useSubmit';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { message, dispatch } = useSubmit();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ username, password }, '/', '/auth/login');
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Sign-In</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="bottom-text">Not registered yet? <a href='/register'>register</a></div>
    </div>
  );
}

export default Login;
