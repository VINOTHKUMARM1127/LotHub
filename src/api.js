import axios from "axios";

const TMDB_TOKEN = import.meta.env.VITE_API_KEY
const baseURL = "https://api.themoviedb.org/3";
const headers = {
    Authorization: "Bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(baseURL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.error("Error fetching data from API:", err);
    }
};
