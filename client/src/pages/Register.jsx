import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAxiosError } from '../utils/handleAxiosError';

export default function Register() {
     const navigate = useNavigate();

     const [form, setForm] = useState({
          name: '',
          email: '',
          password: '',
     });

     const submit = async () => {
          try {
               await axios.post(
                    'http://localhost:5000/api/auth/register',
                    form
               );
               alert('Registered!');
          } catch (err) {
               alert(getAxiosError(err));
          }
     };

     return (
          <div>
               <h2>Register</h2>

               <input
                    placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
               />

               <input
                    placeholder="Email"
                    onChange={(e) =>
                         setForm({ ...form, email: e.target.value })
                    }
               />

               <input
                    placeholder="Password"
                    type="password"
                    onChange={(e) =>
                         setForm({ ...form, password: e.target.value })
                    }
               />

               <button onClick={submit}>Register</button>
               <button onClick={() => navigate('/login')}>Go to Login</button>
          </div>
     );
}
