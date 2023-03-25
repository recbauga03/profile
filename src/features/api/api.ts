import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

export const postOpenAIChatCompletions = async (
  messages: ChatCompletionRequestMessage[],
  apiKey: string,
  callback: (data: any) => void
) => {
  
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messages,
  });

  callback(completion);
};
