import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../index';

export const selectStoryRoot = createSelector(
  (state: RootState) => state,
  (state) => state.story,
);

export const selecStoryData = createSelector(selectStoryRoot, (state) => state.storyData);