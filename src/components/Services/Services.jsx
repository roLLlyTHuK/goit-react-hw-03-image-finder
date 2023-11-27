import axios from 'axios';

const apiKey = '39198737-e441a494d9c878a4c9c462200';
const perPage = 12;

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

export { fetchImages };
