import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTU0NjA5OTE1MmVhYWFmMmI3MDdhZDg4ZTI1MTgyNyIsInN1YiI6IjY2NDBhNjgyYzA4NDBmZTEwYjM2YzcyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_4x9FspTCYVmP6iu58CRPWnf_8Rns-p1gJj6DUavKc"
const headers = {
    Authorization:"bearer "+ TMDB_TOKEN
}
export const fetchDataFromApi = async (url,params) => {
    try{
        console.log('hii');
        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params
        })
       // console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }

}