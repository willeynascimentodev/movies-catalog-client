import axios from 'axios'

const API_URL = 'http://localhost:3000'
const API_KEY = 'mapoj321khy'

const updateDB = async () => {
    const response = await axios.get(`${ API_URL }/movies/update/db`, { headers: { 'api_key': API_KEY } });
    return response.data;
}

const findAll = async (titulo = '', skip = null, limit = null) => {
    const response = await axios.get(`${ API_URL }/movies?titulo=${titulo}&skip=${skip}&limit=${limit}`, { headers: { 'api_key': API_KEY } });
    return response.data;
}

const findOne = async (id) => {
    const response = await axios.get(`${ API_URL }/movies/${id}`, { headers: { 'api_key': API_KEY } });
    return response.data;
}

const movieService = { 
    updateDB,
    findAll,
    findOne
}

export default movieService;