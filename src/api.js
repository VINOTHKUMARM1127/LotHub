import axios from "axios";

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODFlN2EyYmZkMmU4MWQ4MTIwYzNlNmJkYzlmYjdhNyIsIm5iZiI6MTczMTQ3NzM1MC4xMjk1NTU3LCJzdWIiOiI2NzMwZWFlMGY2YzVhODI2OWVmZmE4ZTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Ij9t7QIYKMfh9Hv5WcLPfzR1vcJFbw_Jlaicq8lwbA8'
const baseURL = "https://api.themoviedb.org/3";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}


export const fetchDataFromApi = async (url, params) => {
    try{
        const {data} = await axios.get(baseURL + url,{
            headers,
            params
        })
        return data;
    } catch (err) {
        console.log(err)
    }
}