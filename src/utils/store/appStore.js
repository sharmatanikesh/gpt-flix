import {configureStore} from '@reduxjs/toolkit';
import  moviesReducer  from './slice/moviesSlice';
import  gptReducer from './slice/gptSlice';
import  configReducer  from './slice/configSlice';
import userReducer from './slice/userSlice'

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configReducer,
    }
  
});
export default appStore;