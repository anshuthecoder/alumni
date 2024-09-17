import { useState, useEffect } from 'react';
import { getAlumni } from '../services/alumniService';

const AlumniList = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    const fetchAlumni = async () => {
      const data = await getAlumni();
      setAlumni(data);
    };

    fetchAlumni();
  }, []);

  return (
    <div>
      <h2>Alumni List</h2>
      <ul>
        {alumni.map(alumnus => (
          <li key={alumnus._id}>
            {alumnus.name} - {alumnus.currentPosition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniList;
