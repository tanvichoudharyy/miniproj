import axios from 'axios';
const API_BASE_URL='http://localhost:5001/api/user';

const api=axios.create({
    baseURL:API_BASE_URL,
});

export const signup=async(userData)=>{
    try{
        const response=await api.post('/signup',userData);
        return response.data;
    } catch (error){
        console.error('error during signup:',error);
        throw error;
    }
}

export default api;