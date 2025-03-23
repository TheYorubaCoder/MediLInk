'use client'; // Client-side rendering directive for Next.js 13

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for client-side navigation

const Page = () => {
  // State for handling form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialize the router
  const router = useRouter();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple login logic (you can replace this with real authentication logic)
    console.log('Logged in with', email, password);

    // Redirect to the PatientVitals page upon successful login
    router.push('/PatientVitals');
  };

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff', // Set background to white
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1 
        style={{
          fontSize: '2rem', 
          marginBottom: '20px', 
          color: '#D8A7CA', // Light pinkish color for the header
          fontWeight: 'bold',
        }}
      >
        Login
      </h1>

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #D8A7CA', // Pinkish border to match the aesthetic
            fontSize: '1rem',
            outline: 'none',
            marginTop: '10px',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #D8A7CA', // Pinkish border
            fontSize: '1rem',
            outline: 'none',
            marginTop: '10px',
          }}
        />
        <button 
          type="submit" 
          style={{
            backgroundColor: '#D8A7CA', // Light pink button color
            color: '#fff',
            padding: '15px 30px',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '10px', // Rounded button corners
            cursor: 'pointer',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
            fontWeight: 'bold',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Page;