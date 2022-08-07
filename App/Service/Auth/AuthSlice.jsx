import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLogin: (state) => {
            state.isLogin = true;
        },
        clearIsLogin: (state) => {
            state.isLogin = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setIsLogin, clearIsLogin } = AuthSlice.actions

export default AuthSlice.reducer