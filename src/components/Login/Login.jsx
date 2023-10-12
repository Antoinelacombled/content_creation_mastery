import './login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin' && password === 'admin') {
      login(); 
      navigate('/dashboard');
    } else {
      alert('Email ou mot de passe incorrect...');
    }
  };

  return (
    <body>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label className='forgot-password'>
              <input type="checkbox" />Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Dont have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Login;
