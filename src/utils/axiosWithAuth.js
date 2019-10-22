import axios from 'axios';

/* endpoints: 
logs/all
logs/add
locations/all */


export default function axiosWithAuth() {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'http://fishfriends.herokuapp.com/',
    headers: {
      Authorization: token,
    },
  });
}
