import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './category/category-slice';
import postSlice from './post/post-slice';

export default configureStore({
    reducer: {
        category: categorySlice,
        post: postSlice,
    },
});