import React, { useState } from "react";
import { createUniversity } from "../services/universityService";

const AddUniversity = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [courses, setCourses] = useState([{ courseName: "", description: "" }]);
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState("");

  const handleCourseChange = (index, event) => {
    const { name, value } = event.target;
    const newCourses = courses.slice();
    newCourses[index][name] = value;
    setCourses(newCourses);
  };

  const handleAddCourse = () => {
    setCourses([...courses, { courseName: "", description: "" }]);
  };

  const handleRemoveCourse = (index) => {
    const newCourses = courses.slice();
    newCourses.splice(index, 1);
    setCourses(newCourses);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const universityData = {
      name,
      location,
      courses,
      website,
      logo,
    };

    try {
      await createUniversity(universityData);
      alert("University added successfully");
      // Clear form or redirect
      setName("");
      setLocation("");
      setCourses([{ courseName: "", description: "" }]);
      setWebsite("");
      setLogo("");
    } catch (error) {
      alert("Error adding university");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add University</h2>
      <input
        type="text"
        placeholder="University Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <input
        type="text"
        placeholder="Logo URL"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
      />
      <div>
        <h4>Courses Offered:</h4>
        {courses.map((course, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="courseName"
              placeholder="Course Name"
              value={course.courseName}
              onChange={(e) => handleCourseChange(index, e)}
            />
            <input
              type="text"
              name="description"
              placeholder="Course Description"
              value={course.description}
              onChange={(e) => handleCourseChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveCourse(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddCourse}>
          Add Another Course
        </button>
      </div>
      <button type="submit">Add University</button>
    </form>
  );
};

export default AddUniversity;
