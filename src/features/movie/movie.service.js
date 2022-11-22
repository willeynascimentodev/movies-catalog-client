import axios from 'axios'

const API_URL = 'http://localhost:3000/movies/update/db'

const updateDB = async () => {
    const response = await axios.get(API_URL)
    console.log(response.data);
    return response.data;
}

const findAll = async (skip = 0, limit = null) => {
    const response = await axios.get(`${ API_URL }?skip=${ skip }&limit=${ limit }`)
    console.log(response.data);
    return response.data;
}

const findOne = async (id) => {
    const response = await axios.get(`${ API_URL }/id`)
    console.log(response.data);
    return response.data;
}

const authService = { 
    updateDB,
    findAll,
    findOne
}

export default movieService;