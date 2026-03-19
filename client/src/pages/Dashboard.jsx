import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getAxiosError } from '../utils/handleAxiosError';

export default function Dashboard() {
     const [user, setUser] = useState(null);
     const navigate = useNavigate();

     useEffect(() => {
          const token = localStorage.getItem('token');

          if (!token) {
               return navigate('/login');
          }

          axios.get('http://localhost:5000/api/auth/profile', {
               headers: {
                    Authorization: `Bearer ${token}`,
               },
          }).then((res) => {
               setUser(res.data);
          });
     }, []);

     const logout = () => {
          localStorage.removeItem('token');
          try {
               axios.post('http://localhost:5000/api/auth/logout');
               navigate('/login');
          } catch (err) {
               alert(getAxiosError(err));
          }
     };

     return (
          <div>
               <h2>Dashboard</h2>

               {user && (
                    <>
                         <p>Welcome {user.name}</p>
                         <>
                              {' '}
                              <button onClick={() => logout()}> Log Out</button>
                         </>
                    </>
               )}
          </div>
     );
}
