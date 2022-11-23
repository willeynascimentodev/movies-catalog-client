import axios from 'axios'

const API_URL = 'http://localhost:3000'

const updateDB = async () => {
    const response = await axios.get(`${ API_URL }/movies/updateDB`);
    console.log(response.data);
    return response.data;
}

const findAll = async (titulo = '', skip = null, limit = null) => {
    const response = await axios.get(`${ API_URL }/movies?titulo=${titulo}&skip=${skip}&limit=${limit}`);
    return response.data;
}

const findOne = async (id) => {
    const response = await axios.get(`${ API_URL }/movies/${id}`);
    console.log(response.data);
    return response.data;
}

const movieService = { 
    updateDB,
    findAll,
    findOne
}

export default movieService;