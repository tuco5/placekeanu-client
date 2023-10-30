import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type KeanuState = {
  keanuImage: string;
  isLoading: boolean;
  error?: string;
};

export type getKeanuPayload = {
  width: number;
  height?: number;
  y?: boolean;
  g?: boolean;
};

const initialState = {
  keanuImage: "",
  isLoading: false,
  error: undefined,
} as KeanuState;

export const keanuSlice = createSlice({
  name: "keanu",
  initialState,
  reducers: {
    getKeanuFetch: (state, action: PayloadAction<getKeanuPayload>) => {
      state.isLoading = true;
    },
    getKeanuSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.keanuImage = action.payload;
    },
    getKeanuFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getKeanuFetch, getKeanuSuccess, getKeanuFailure } =
  keanuSlice.actions;
export default keanuSlice.reducer;
