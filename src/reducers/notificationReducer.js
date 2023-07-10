import { createSlice } from "@reduxjs/toolkit";

const notiSlice = createSlice({
  name: "filter",
  initialState: null,
  reducers: {
    noti_acce(state, action) {
      //console.log("State",JSON.parse(JSON.stringify(state)));
      //console.log("Action",action);
      return action.payload;
    }
    

  },
});

export const { noti_acce,hide_noti } = notiSlice.actions;
export default notiSlice.reducer;
