import { configureStore } from '@reduxjs/toolkit'
import toggleReducer from '../slice/ToggleSlice';

export default configureStore({
    reducer: {
        toggle: toggleReducer,
        
    },
})