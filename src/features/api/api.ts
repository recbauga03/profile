import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";

export const postOpenAIChatCompletions = async (
  messages: ChatCompletionRequestMessage[],
  apiKey: string,
  callback: (data: any) => void,
  errorCallback: (data: any) => void
) => {
  const openai = getOpenAI(apiKey);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    callback(completion);
  } catch (error) {
    errorCallback(error);
  }
};

export const postOpenAIImageGeneration = async (
  prompt: string,
  apiKey: string,
  callback: (data: any) => void,
  errorCallback: (data: any) => void
) => {
  const openai = getOpenAI(apiKey);
  
  try {
    const image = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512"
    });
    callback(image);
  } catch (error) {
    errorCallback(error);
  }
};

const getOpenAI = (apiKey: string): OpenAIApi => {
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  return new OpenAIApi(configuration);
};
