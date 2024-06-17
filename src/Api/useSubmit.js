
import { useState } from 'react';
import url from './endpoint';


const useSubmit = () => {
  const [message, setMessage] = useState('');

  const dispatch = async (userDetails, redirect, path) => {
    try {
        console.log("data received", userDetails)
      const response = await fetch(`${url}/${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => window.location.href=redirect, 2000); // Redirect to login after 2 seconds
      } else {
        setMessage(data.error || 'Registration failed');
      }
    } catch (error) {
        console.log(error)
      setMessage('An error occurred');
    }
  };

  return { message, dispatch };
};

export default useSubmit;
