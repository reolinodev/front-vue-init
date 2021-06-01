import axios from 'axios';

function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}api/${url}`,
  });
}

export const opens = createInstance('opens');
