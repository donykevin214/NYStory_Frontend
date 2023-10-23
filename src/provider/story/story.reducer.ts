import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { StoryData } from '~/interfaces/api.interfaces';

export interface IAppState {
    storyData: Array<StoryData>;
}

const INITIAL_STATE: IAppState = {
    storyData: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setStoryData(state, action: PayloadAction<Array<StoryData>>) {
      state.storyData = action.payload;
    },
    resetStoryReducer(state) {
      state.storyData = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { setStoryData, resetStoryReducer } = appSlice.actions;

export default appSlice.reducer;