import React, { useState, useEffect } from "react";
import { getUniversities } from "../services/universityService";

const UniversityList = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const data = await getUniversities();
        setUniversities(data);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  return (
    <div>
      <h2>University List</h2>
      <ul>
        {universities.map((university) => (
          <li key={university._id}>
            <h3>{university.name}</h3>
            <p>Location: {university.location}</p>
            <p>
              Website:{" "}
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer">
                {university.website}
              </a>
            </p>
            {/* Display courses */}
            <h4>Courses Offered:</h4>
            <ul>
              {university.courses.map((course, index) => (
                <li key={index}>
                  {course.courseName}: {course.description}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;
