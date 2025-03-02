import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:()=>{
            return null;
        }
    }
});

// actions are function that we can use later that's why we are exporting them
export const {addUser,removeUser} = userSlice.actions;

// exporting the reducer so that we can use it in the store
export default userSlice.reducer;
