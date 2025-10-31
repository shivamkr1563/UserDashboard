const API_URL = 'https://jsonplaceholder.typicode.com/users';

/**
 * Fetch all users from the API
 * @returns {Promise<Array>} Array of user objects
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

/**
 * Fetch a single user by ID
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} User object
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw error;
  }
};
