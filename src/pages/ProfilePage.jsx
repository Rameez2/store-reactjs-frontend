import { useEffect, useState } from "react"
import { getUser } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/authContext";
import styles from '../styles/user/profile.module.css';

export default function ProfilePage() {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const navigate = useNavigate();
    const {logout} = useAuthContext();

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                let userData = await getUser();
                
                setUser(userData);
            } catch (error) {
                setError(error.message);
                if (error.message.includes('Unauthorized access')) {
                    // Redirect to the login page if the error is due to unauthorized access
                    logout();
                    navigate('/login');
                }
            }
            finally {
                setLoading(false)
            }
        })();

    }, [navigate,logout]);

  return (
    <div>
        <h1>Profile</h1>
        {
        loading ? <h1>LOADING...</h1> :
        error ? <h1>{error}</h1> :
        <div>
            <div className="userDetails">
                <div className={styles.imageContainer}>
                    <img src={user?.profileImage} alt="" />
                </div>
                <h2>FullName : <span>{user?.fullName}</span></h2>
                <h2>Email : <span>{user?.email}</span></h2>
            </div>
        </div>
        }
    </div>
  )
}
