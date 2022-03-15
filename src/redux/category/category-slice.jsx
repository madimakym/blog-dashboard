import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { API_ROOT } from '../../utils/api-config';
import { handleApiError } from '../../utils/errorHandler';

export const categoryFetchAsync = createAsyncThunk(
    'category/categoryFetchAsync',
    async (rejectWithValue) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_ROOT}/api/category`,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data
        } catch (error) {
            return rejectWithValue(handleApiError(error.response.data))
        }
    }
);

export const categoryFetchOneAsync = createAsyncThunk(
    'category/categoryFetchOneAsync',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'GET',

                url: `${API_ROOT}/api/category/${payload}`,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data
        } catch (error) {
            return rejectWithValue(handleApiError(error.response.data))
        }
    }
);


export const categoryCreateAsync = createAsyncThunk(
    'category/categoryCreateAsync',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_ROOT}/api/category`,
                data: payload
            });
            return response.data
        } catch (error) {
            return rejectWithValue(handleApiError(error.response.data))
        }
    }
);

export const categoryEditAsync = createAsyncThunk(
    "categorie/categoryEditAsync",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_ROOT}/api/category/${payload.id}`,
                data: payload.data
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error.response.data))
        }
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        status: 'idle',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        successMessage: "",
        categories: [],
        category: ""
    },
    reducers: {
        categoryClearState: (state) => {
            state.status = 'idle';
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = "";
            state.successMessage = "";
            return state;
        }
    },
    extraReducers: {
        // Create
        [categoryCreateAsync.pending](state) {
            state.status = 'pending'
            state.isFetching = true
            state.isSuccess = false
        },

        [categoryCreateAsync.fulfilled](state) {
            state.status = 'success'
            state.isFetching = false
            state.isSuccess = true
        },

        [categoryCreateAsync.rejected](state) {
            state.status = 'failed'
            state.isFetching = false
            state.isSuccess = false
        },

        // Fetch
        [categoryFetchAsync.pending](state) {
            state.status = 'pending'
            state.isFetching = true
        },

        [categoryFetchAsync.fulfilled](state, { payload }) {
            state.status = 'success'
            state.isFetching = false
            state.categories = payload
        },

        [categoryFetchAsync.rejected](state) {
            state.status = 'failed'
            state.isFetching = false
            state.isError = true
        },

        // Fetch one
        [categoryFetchOneAsync.pending]: (state) => {
            state.status = 'pending'
            state.isFetching = true
        },
        [categoryFetchOneAsync.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.isFetching = false;
            state.category = payload;
        },
        [categoryFetchOneAsync.rejected]: (state) => {
            state.status = 'failed'
            state.isFetching = false
        },

        // Update
        [categoryEditAsync.pending](state) {
            state.status = 'pending'
            state.isFetching = true
            state.isSuccess = false
        },

        [categoryEditAsync.fulfilled](state) {
            state.status = 'success'
            state.isFetching = false
            state.isSuccess = true
        },

        [categoryEditAsync.rejected](state) {
            state.status = 'failed'
            state.isFetching = false
            state.isSuccess = false
        }
    }
});

export const { categoryClearState } = categorySlice.actions;
export default categorySlice.reducer;