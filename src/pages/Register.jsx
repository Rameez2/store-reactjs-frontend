import {useState} from 'react';
import {registerUser} from '../services/authApi';
import { useAuthContext } from '../providers/authContext';
import { Link, Navigate } from 'react-router-dom';
import styles from '../styles/user/authPages.module.css';


export default function Register() {
    const [fullName, setFullName] = useState('Syed Rameez Shah');
    const [email, setEmail] = useState('rameez@gmail.com');
    const [password, setPassword] = useState('pass123');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {isLoggedIn, login} = useAuthContext();

    async function handleSubmit(e) {
      e.preventDefault();
      try {
        setLoading(true);
        setError(false);
        // registerUser Api Call
        let responseData = await registerUser({fullName,email, password});
        login(responseData.token);
      } catch (error) {
        setError(error.message)
      }
      finally{
        setLoading(false);
      }
    }

  return (
    <>
    {isLoggedIn ? <Navigate to="/" /> : 
      <div className={styles.container}>
      <h1 className={styles.header}>Register</h1>
      <form onSubmit={handleSubmit} className={styles.InputForm}>
      <input type="text" name="" id="" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <input type="email" name="" id="" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>{loading ? 'loading...' : 'Register'}</button>
      <Link to="/login">Login</Link>
      </form>
      {error && <p className="error">{error}</p>}
      </div>
    }
    </>
  )
}
