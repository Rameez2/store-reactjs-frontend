import {useState} from 'react';
import {loginUser} from '../services/authApi';
import { useAuthContext } from '../providers/authContext';
import { Navigate } from 'react-router-dom';

export default function Login() {
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
        console.log(email);
        let responseData = await loginUser({email, password});
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
        <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" name="" id="" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>{loading ? 'loading...' : 'Login'}</button>
        </form>
        {error && <p className="error">{error}</p>}
        </div>
      }
      </>
  )
}
