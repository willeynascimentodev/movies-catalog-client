import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movie.service'

const initialState =  {
    movies: [],
    moviesTotal: 0,
    movie: {},
    searchMovie: '',
    skip: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

var aditionalState = {
    search: '',
    skip: 0
}

export const updateDB = createAsyncThunk('movies/update/db', async (thunkAPI) => {
    try {
        return await movieService.updateDB();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const findAll = createAsyncThunk('movies/findAll', async (data, thunkAPI) => {
    aditionalState.search = data.titulo;
    aditionalState.skip = data.skip;
    try {
        return await movieService.findAll(data.titulo, data.skip, data.limit)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const findOne = createAsyncThunk('movies/findOne', async (id, thunkAPI) => {
    try {
        return await movieService.findOne(id);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const movieSlice = createSlice({
    name: 'movies',
    initialState, 
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(updateDB.pending, (state) => {
            state.isLoading = true
        })
        
        .addCase(updateDB.fulfilled, (state) => {
            state.isloading = false
            state.isSuccess = true
        })
        
        .addCase(updateDB.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
        })

        .addCase(findAll.pending, (state) => {
            state.isLoading = true
        })
        
        .addCase(findAll.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.movies = action.payload.movies
            state.moviesTotal = action.payload.total
            state.searchMovie = aditionalState.search;
            state.skip = aditionalState.skip;
        })
        
        .addCase(findAll.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            state.movies = null
            state.searchMovie = aditionalState.search;
            state.skip = aditionalState.skip;
        })
        .addCase(findOne.pending, (state) => {
            state.isLoading = true
        })
        
        .addCase(findOne.fulfilled, (state, action) => {
            state.isloading = false
            state.isSuccess = true
            state.movie = action.payload
        })
        
        .addCase(findOne.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            state.movie = null
        })

        
    }
})

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;