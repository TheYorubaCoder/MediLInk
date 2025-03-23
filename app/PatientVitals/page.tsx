'use client';
import React from 'react';

const VitalsPage = () => {
  // Mock data for patient
  const patientData = {
    name: "John Doe",
    age: 45,
    medicalHistory: "No chronic illnesses",
    familyHistory: "Heart disease",
    lastDoctorVisit: "March 16, 2024",
    medicationList: "Aspirin",
    imageUrl: "/image.png",  // Path to the uploaded image
  };

  // Mock vitals data
  const vitalsData = [
    { date: "March 20", spO2: "98%", heartRate: "98 bpm", temp: "98.1°F", rr: "18 bpm", bp: "120/80 mmHg", glucose: "183 mg/dL", bodyWeight: "2009.0 lbs" },
    { date: "March 19", spO2: "98%", heartRate: "96 bpm", temp: "98.2°F", rr: "19 bpm", bp: "150/80 mmHg", glucose: "209 mg/dL", bodyWeight: "1989.0 lbs" },
    { date: "March 18", spO2: "98%", heartRate: "110 bpm", temp: "98.3°F", rr: "20 bpm", bp: "165/90 mmHg", glucose: "157 mg/dL", bodyWeight: "2008.0 lbs" },
    { date: "March 17", spO2: "98%", heartRate: "94 bpm", temp: "97.8°F", rr: "14 bpm", bp: "120/75 mmHg", glucose: "170 mg/dL", bodyWeight: "2009.0 lbs" },
    { date: "March 16", spO2: "98%", heartRate: "95 bpm", temp: "97.9°F", rr: "14 bpm", bp: "120/76 mmHg", glucose: "172 mg/dL", bodyWeight: "1994.0 lbs" },
  ];

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Patient Information Section */}
      <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
        <img
          src={patientData.imageUrl}
          alt="Patient"
          style={{ width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px' }}
        />
        <div>
          <h1 style={{ fontSize: '2rem', color: '#D8A7CA' }}>{patientData.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#777' }}>Age: {patientData.age}</p>
          <p style={{ fontSize: '1.2rem', color: '#777' }}>Medical History: {patientData.medicalHistory}</p>
          <p style={{ fontSize: '1.2rem', color: '#777' }}>Family History: {patientData.familyHistory}</p>
          <p style={{ fontSize: '1.2rem', color: '#777' }}>Last Doctor Visit: {patientData.lastDoctorVisit}</p>
          <p style={{ fontSize: '1.2rem', color: '#777' }}>Medications: {patientData.medicationList}</p>
        </div>
      </div>

      <h1 style={{ fontSize: '2rem', marginBottom: '30px', color: '#D8A7CA' }}>Patient Vitals</h1>

      {/* Vitals Table Header */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '20px', textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold', color: '#D8A7CA' }}>
        <div>Date</div>
        <div>SpO2</div>
        <div>HR</div>
        <div>Temp.</div>
        <div>RR</div>
        <div>BP</div>
        <div>Glucose</div>
        <div>Body Weight</div>
      </div>

      {/* Display vitals data */}
      {vitalsData.map((row, index) => (
        <div key={index} style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '20px', marginBottom: '20px', fontSize: '1rem', color: '#777' }}>
          <div>{row.date}</div>
          <div>{row.spO2}</div>
          <div>{row.heartRate}</div>
          <div>{row.temp}</div>
          <div>{row.rr}</div>
          <div>{row.bp}</div>
          <div>{row.glucose}</div>
          <div>{row.bodyWeight}</div>
        </div>
      ))}
    </div>
  );
};

export default VitalsPage;