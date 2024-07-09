import axios from 'axios';
const API_URL = 'http://localhost:5000/messages/note_id';

export const getMessages = async (noteId) => {
    try {
      const response = await axios.get(`${API_URL}/${noteId}`);
      console.log(response.data)
      return response.data;
    
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error; // Re-throw the error to handle it in the component
    }
  };