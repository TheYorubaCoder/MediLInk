'use client';
import React from 'react';
import Image from 'next/image';

const DoctorView = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#F9F1F1', // Soft background color
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#6A4C9C', fontWeight: 'bold' }}>Good Morning Doctor, Here are your updates</h1>
      </div>

      {/* Updates Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          marginBottom: '30px',
        }}
      >
        {/* First Update */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '200px',
            backgroundColor: '#FFF',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Image
            src="/selma.png" 
            alt="Alert Icon"
            width={50}
            height={50}
          />
          <h2 style={{ color: '#D72B3F', fontSize: '1.2rem', marginTop: '10px' }}>
            Selma’s distress was set off on March 18
          </h2>
        </div>

        {/* Second Update */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '200px',
            backgroundColor: '#FFF',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Image
            src="/selma.png" // Placeholder image for alert icon
            alt="Alert Icon"
            width={50}
            height={50}
          />
          <h2 style={{ color: '#D72B3F', fontSize: '1.2rem', marginTop: '10px' }}>
            Selma’s blood glucose rose 187 above her baseline
          </h2>
        </div>
      </div>

      {/* Patient Updates Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          width: '80%',
          marginBottom: '30px',
        }}
      >
        {/* Patient 1 Update */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '20px',
            backgroundColor: '#FFF',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Image
            src="/selma.png" // Placeholder image for patient image
            alt="Patient Image"
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
          <div>
            <p style={{ fontSize: '1.2rem', color: '#6A4C9C' }}>Selma scheduled an appointment with you for April 15th</p>
          </div>
        </div>

        {/* Patient 2 Update */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '20px',
            backgroundColor: '#FFF',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Image
            src="/boy.png" // Placeholder image for patient image
            alt="Patient Image"
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
          <div>
            <p style={{ fontSize: '1.2rem', color: '#6A4C9C' }}>
              Jones has taken his supplements 15 days in a row!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          position: 'fixed',
          bottom: '0',
          padding: '10px 0',
          backgroundColor: '#6A4C9C',
          color: '#fff',
        }}
      >
        <p style={{ fontSize: '1rem' }}>© 2024 MediLink. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default DoctorView;