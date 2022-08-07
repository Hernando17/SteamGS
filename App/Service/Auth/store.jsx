import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './AuthSlice'

export default configureStore({
    reducer: {
        [AuthSlice.name]: AuthSlice.reducer
    }
})