import React, { useState } from 'react';
import { createAlumni } from '../services/alumniService';

const AddAlumni = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [degree, setDegree] = useState('');
  const [major, setMajor] = useState('');
  const [currentPosition, setCurrentPosition] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const alumniData = {
      name,
      email,
      graduationYear,
      degree,
      major,
      currentPosition,
      company,
      location,
      bio,
    };

    try {
      await createAlumni(alumniData);
      alert('Alumni added successfully');
      // Clear form or redirect
    } catch (error) {
      console.error('Error adding alumni:', error);
      alert('Error adding alumni');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Alumni</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Graduation Year"
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
      <input
        type="text"
        placeholder="Major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Current Position"
        value={currentPosition}
        onChange={(e) => setCurrentPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <textarea
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit">Add Alumni</button>
    </form>
  );
};

export default AddAlumni;
