
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

// to add multiple reducers
// export const store = configureStore({
//     reducer: {
//         counter: null,
//         user: null,
//         hello: null,
//         counter: counterReducer,
//         user: userReducer
//     }

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

