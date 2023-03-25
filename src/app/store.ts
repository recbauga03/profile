import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../features/profile/profileSlice';
import connectReducer from '../features/profile/components/connect/connectSlice';
import openAIReducer from '../features/openai/openAISlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    connect: connectReducer,
    openAI: openAIReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
