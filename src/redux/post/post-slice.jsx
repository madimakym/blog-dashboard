import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import { API_ROOT } from '../../utils/api-config';
import { handleApiError } from '../../utils/errorHandler';

export const postFetchAsync = createAsyncThunk(
    'post/postFetchAsync',
    async (rejectWithValue) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_ROOT}/api/post`,
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

export const postFetchOneAsync = createAsyncThunk(
    'post/postFetchOneAsync',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'GET',

                url: `${API_ROOT}/api/post/${payload}`,
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


export const postCreateAsync = createAsyncThunk(
    'post/postCreateAsync',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `${API_ROOT}/api/post`,
                data: payload
            });
            return response.data
        } catch (error) {
            return rejectWithValue(handleApiError(error.response.data))
        }
    }
);

export const postEditAsync = createAsyncThunk(
    "post/postEditAsync",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'PUT',
                url: `${API_ROOT}/api/post/${payload.id}`,
                data: payload.data
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error.response.data))
        }
    }
);


export const postDeleteAsync = createAsyncThunk(
    "post/postDeleteAsync",
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios({
                method: 'DELETE',
                url: `${API_ROOT}/api/post/${payload}`,
                data: payload
            });
            dispatch(postFetchAsync())
            return response.data;
        } catch (error) {
            return rejectWithValue(handleApiError(error.response))
        }
    }
);

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        status: 'idle',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        successMessage: "",
        posts: [],
        post: ""
    },
    reducers: {
        postClearState: (state) => {
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
        [postCreateAsync.pending](state) {
            state.status = 'pending'
            state.isFetching = true
            state.isSuccess = false
        },

        [postCreateAsync.fulfilled](state) {
            state.status = 'success'
            state.isFetching = false
            state.isSuccess = true
        },

        [postCreateAsync.rejected](state) {
            state.status = 'failed'
            state.isFetching = false
            state.isSuccess = false
        },

        // Fetch
        [postFetchAsync.pending](state) {
            state.status = 'pending'
            state.isFetching = true
        },

        [postFetchAsync.fulfilled](state, { payload }) {
            state.status = 'success'
            state.isFetching = false
            state.posts = payload
        },

        [postFetchAsync.rejected](state) {
            state.status = 'failed'
            state.isFetching = false
            state.isError = true
        },

        // Fetch one
        [postFetchOneAsync.pending]: (state) => {
            state.status = 'pending'
            state.isFetching = true
        },
        [postFetchOneAsync.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.isFetching = false;
            state.post = payload;
        },
        [postFetchOneAsync.rejected]: (state) => {
            state.status = 'failed'
            state.isFetching = false
        },

        // Update
        [postEditAsync.pending](state) {
            state.status = 'pending'
            state.isFetching = true
            state.isSuccess = false
        },

        [postEditAsync.fulfilled](state) {
            state.status = 'success'
            state.isFetching = false
            state.isSuccess = true
        },

        [postEditAsync.rejected](state) {
            state.status = 'failed'
            state.isFetching = false
            state.isSuccess = false
        },

        // Delete
        [postDeleteAsync.pending]: (state) => {
            state.status = 'pending'
            state.isFetching = true
        },
        [postDeleteAsync.fulfilled]: (state) => {
            state.status = "success";
            state.isFetching = false
        },
        [postDeleteAsync.rejected]: (state) => {
            state.status = 'failed'
            state.isFetching = false
        },
    }
});

export const { postClearState } = postSlice.actions;
export default postSlice.reducer;