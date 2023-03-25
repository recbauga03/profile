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

  postOpenAIChatCompletions(messages, apiKey, responseCovertCallback);
};
