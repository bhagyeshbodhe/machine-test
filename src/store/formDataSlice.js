import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormdata(state, { payload }) {
      state.formData = { ...payload };
      console.log(state.formData);
    },
  },
});

export const { setFormdata } = formDataSlice.actions;
export default formDataSlice.reducer;
