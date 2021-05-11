import Axios from 'axios';

export const setAuthHeader = async (token) => {
   delete Axios.defaults.headers.common['Authorization'];
   Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteAuthHeader = () => {
   delete Axios.defaults.headers.common['Authorization'];
}