'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  // State to store the selected role
  const [role, setRole] = useState(null);
  const router = useRouter();

  // Function to handle role selection and navigate accordingly
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);

    // Redirect based on the selected role
    if (selectedRole === 'patient') {
      router.push('/PatientVitals'); // Redirect to the Patient Vitals page for patients
    } else if (selectedRole === 'doctor') {
      router.push('/DoctorView'); // Redirect to the Doctor View page for doctors
    }
  };

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Make sure the layout takes full height
        flexDirection: 'column',
        backgroundColor: '#ffffff', // Set background color to white
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Image src="/M.png" alt="Description of Image" width={200} height={200} />
      <h1
        style={{
          fontSize: '2rem',
          margin: '20px 0',
          color: '#D8A7CA', // Light pinkish font color
          fontWeight: 'bold',
        }}
      >
        Welcome to MediLink <br /> Are you a...
      </h1>

      <div style={{ marginBottom: '20px' }}>
        {/* Buttons for selecting a role */}
        <button
          onClick={() => handleRoleSelection('doctor')}
          style={{
            backgroundColor: '#D8A7CA', // Light pinkish button color
            color: '#fff',
            padding: '15px 30px',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '10px',
            transition: 'background-color 0.3s ease',
            fontWeight: 'bold',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Doctor
        </button>
        <button
          onClick={() => handleRoleSelection('patient')}
          style={{
            backgroundColor: '#E5A9F1', // Slightly darker pink
            color: '#fff',
            padding: '15px 30px',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '10px',
            transition: 'background-color 0.3s ease',
            fontWeight: 'bold',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Patient
        </button>
      </div>

      {/* Conditionally render login link based on role selection */}
      {role && (
        <div style={{ marginTop: '20px' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              color: '#D8A7CA',
              fontWeight: 'bold',
            }}
          >
            Proceed as {role}
          </h2>
        </div>
      )}
    </main>
  );
}