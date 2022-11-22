import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movie.service'

const initialState =  {
    movies: movies ? movies : null,
    movie: movie ? movie : null,
    isError: false,
    isSuccess: false,
    message: ''
}

export const updateDB = createAsyncThunk('movies/update/db', async (thunkAPI) => {
    try {
        return await movieService.updateDB()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const findAll = createAsyncThunk('movies', async (skip, limit, thunkAPI) => {
    try {
        return await movieService.findAll(skip, limit)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const findOne = createAsyncThunk('movies/', async (id, thunkAPI) => {
    try {
        return await movieService.findOne(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const movieSlice = createSlice({
    name: 'movies',
    initialState, 
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateDB.pending, (state) => {
            state.isLoading = true
        })
        
        .addCase(updateDB.fulfilled, (state, action) => {
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
            state.isloading = false
            state.isSuccess = true
            state.movies = action.payload
        })
        
        .addCase(findAll.rejected, (state, action) => {
            state.isloading = false
            state.isError = true
            state.message = action.payload
            state.movies = null
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

export const { reset } = movieSlice.actions
export default movieSlice.reducer