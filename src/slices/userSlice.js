import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userEmail: "User",
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    currentUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
  },
});

console.log("userSLice", userSlice);
export const { currentUserEmail } = userSlice.actions;
export default userSlice.reducer;
