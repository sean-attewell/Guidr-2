import React, { useState, useRef } from 'react';
import axios from 'axios';

// Hooks! Functional components can hold state.
export default function Register(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const [flash, setFlash] = useState(''); // [sliceofstate, setstate] = initial value ''

  const submit = () => {
    // attempt register!
    // on success, set token to local storage, set a flash message
    // on failure, set a flash message with the error
    axios.post('http://localhost:3500/api/auth/register', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value,
    })
      .then(res => {
        // axios puts it in res.data
        setFlash(`${res.data.saved.username} has registered and logged in!`);
        props.setLoggedInUser(res.data.id);
        localStorage.setItem('token', res.data.token);
        props.history.replace('/adventures');
      })
      .catch(err => {
        setFlash(`Error: ${err.response.data.message}`)
      })
  };

  return (
    <div className='register'>
      <h2>Register</h2>
      <div className='register-inputs'>
        username <input ref={usernameRef} type="text" /> <br />
        role <input ref={roleRef} type="text" /> <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>
          Register
        </button>

        <div className='flash'>{flash}</div>
      </div>
    </div>
  );
}
// if register fails/succeeds you'll get a flash message...