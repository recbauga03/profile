import { postOpenAIChatCompletions } from "../api/api";
import { ChatCompletionRequestMessage } from "openai";

export const openAIParser = async (
  messages: ChatCompletionRequestMessage[],
  apiKey: string,
  callback: Function
) => {
  const responseCovertCallback = (data: any) => {
    const context = {
      text: "response",
      keywords: [],
      answer: data.data.choices[0].message.content,
      options: { widget: "gpt" },
    };

    callback(context);
  };

  const errorCallback = (error: any) => {
    const context = {
      text: "response",
      keywords: [],
      options: { widget: "gpt" },
      answer: "",
    };

    if (error.response) {
      context.answer = error.response.data.error.code + ": " + error.response.data.error.message;
    } else {
      context.answer = error.message;
    }

    callback(context);
  };

  postOpenAIChatCompletions(messages, apiKey, responseCovertCallback, errorCallback);
};
