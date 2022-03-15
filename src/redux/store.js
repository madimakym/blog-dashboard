import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './category/category-slice';

export default configureStore({
    reducer: {
        category: categorySlice,
    },
});