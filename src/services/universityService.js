import axios from 'axios';

const API_URL = 'http://localhost:5001/api/universities'; // Adjust to your backend URL

// Create a new university
export const createUniversity = async (universityData) => {
  try {
    const response = await axios.post(API_URL, universityData);
    return response.data;
  } catch (error) {
    console.error('Error creating university:', error);
    throw error;
  }
};

// Get all universities
export const getUniversities = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching universities:', error);
    throw error;
  }
};

// Get a single university by ID (optional, if you need this functionality)
export const getUniversityById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching university by ID:', error);
    throw error;
  }
};
