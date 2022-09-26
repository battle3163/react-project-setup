import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: '',
    isActive:false,
    isError: false
}

export const toastSlice = createSlice({
    name: 'toastMarkUp',
    initialState,
    reducers: {
        openToast(state,action) {
            state.message = action.payload.message || 'something went wrong' ;
            state.isError = action.payload.isError;
            state.isActive = true
        },
        closeToast(state,action) {
            state.isActive = false
        }
    }
})

export const {openToast, closeToast} = toastSlice.actions;
export default toastSlice.reducer