import axios from "axios";

const API_URL = "http://localhost:5001/api/alumni";

// Create a new alumni
export const createAlumni = async (alumniData) => {
  const response = await axios.post(API_URL, alumniData);
  return response.data;
};

// Get all alumni
export const getAlumni = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a single alumni by ID
export const getAlumniById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update an alumni by ID
export const updateAlumni = async (id, alumniData) => {
  const response = await axios.put(`${API_URL}/${id}`, alumniData);
  return response.data;
};

// Delete an alumni by ID
export const deleteAlumni = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
