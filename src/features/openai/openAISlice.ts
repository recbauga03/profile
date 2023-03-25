import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ChatCompletionRequestMessage } from "openai";

export interface OpenAIState {
  isEnabled: boolean;
  apiKey?: string;
  messages: ChatCompletionRequestMessage[];
}

const initialState: OpenAIState = {
  isEnabled: false,
  messages: [],
};

export const openAISlice = createSlice({
  name: "openAI",
  initialState,
  reducers: {
    setAPIKey: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
    },
    toggleIsOpenAIEnabled: (state) => {
      state.isEnabled = !state.isEnabled;
    },
    clear: (state) => {
      state.isEnabled = false;
      state.messages = [];
      state.apiKey = '';
    },
    setMessage: (state, action: PayloadAction<ChatCompletionRequestMessage[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<ChatCompletionRequestMessage>) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { setAPIKey, toggleIsOpenAIEnabled, clear, setMessage, addMessage } = openAISlice.actions;
export const selectAPIKey = (state: RootState) => state.openAI.apiKey;
export const selectIsOpenAIEnabled = (state: RootState) => state.openAI.isEnabled;
export const selectMessages = (state: RootState) => state.openAI.messages;

export default openAISlice.reducer;
