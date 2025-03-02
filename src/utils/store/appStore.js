import {configureStore} from '@reduxjs/toolkit';
import { useReducer } from 'react';
import { moviesReducer } from './slice/moviesSlice';
import { gptReducer } from './slice/gptSlice';
import { configReducer } from './slice/configSlice';

const appStore = configureStore({
    user:useReducer,
    movies:moviesReducer,
    gpt:gptReducer,
    config:configReducer,
});
export default appStore;