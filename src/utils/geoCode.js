import axios from 'axios';

const API_KEY = 'c4a94dca62283ae266d93d3b7e7668ec4c876d9'; 
const BASE_URL = 'https://api.geocod.io/v1.6/geocode';

export const getCoordinates = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        api_key: API_KEY,
        limit: 1,
      },
    });
    const result = response.data.results[0];
    return result ? { lat: result.location.lat, lon: result.location.lng } : null;
  } catch (error) {
    console.error(`Error fetching coordinates for city ${city}:`, error);
    return null;
  }
};
