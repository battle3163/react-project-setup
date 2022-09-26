import { configureStore } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '../api/index'
import toastReducer from '../api/toast/toast-slice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        toast: toastReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export const rtkQueryErrorLogger = (api) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!')
    }
}

setupListeners(store.dispatch)