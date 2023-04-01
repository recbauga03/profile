import {
  postOpenAIChatCompletions,
  postOpenAIImageGeneration,
} from "../api/api";
import { ChatCompletionRequestMessage } from "openai";
import { OpenAIType } from "./openAISlice";
import { connect } from "../../data/config";
import { ContentType } from "../profile/components/connect/connectSlice";

export interface OpenAIContainer {
  actions: any;
  message: string;
  messages?: ChatCompletionRequestMessage[];
  apiKey?: string;
  openAIType?: OpenAIType;
  setAPIKey: Function;
  setMessage: Function;
}

export const parseOpenAI = (openAI: OpenAIContainer) => {
  const apiKey = openAI.apiKey;
  const message = openAI.message;

  if (!apiKey) {
    openAIKeySetting(openAI.actions, openAI.setAPIKey, message);
    return;
  }

  const openAIType = openAI.openAIType;

  if (OpenAIType.CHAT === openAIType && openAI.messages) {
    parseOpenAIChat(openAI);
  } else if (OpenAIType.IMAGE === openAIType) {
    parseOpenAIImage(openAI);
  }
};

const openAIKeySetting = (
  actions: any,
  setAPIKey: Function,
  apiKey: string
) => {
  setAPIKey(apiKey);
  actions.handleGPTTokenSetting(connect.openAI.answers.tokenSetting);
};

const parseOpenAIChat = (openAI: OpenAIContainer) => {
  if (!openAI.messages || !openAI.apiKey) return;

  const messages: ChatCompletionRequestMessage[] = [
    ...openAI.messages,
    {
      role: "user",
      content: openAI.message,
    },
  ];

  openAIChatParser(
    messages,
    openAI.apiKey,
    openAI.actions.handleOpenAIChatResponse
  );

  openAI.setMessage(messages);
};

const parseOpenAIImage = (openAI: OpenAIContainer) => {
  if (!openAI.apiKey) return;

  openAIImageParser(
    openAI.message,
    openAI.apiKey,
    openAI.actions.handleOpenAIImageResponse
  );
};

const openAIChatParser = async (
  messages: ChatCompletionRequestMessage[],
  apiKey: string,
  callback: Function
) => {
  const responseCallback = (data: any) => {
    const context = {
      text: "response",
      keywords: [],
      answer: data.data.choices[0].message.content,
      options: { widget: "openai" },
    };

    callback(context);
  };

  const errorCallback = (error: any) => {
    const context = {
      text: "response",
      keywords: [],
      options: { widget: "openai" },
      answer: "",
    };

    if (error.response) {
      context.answer =
        error.response.data.error.code +
        ": " +
        error.response.data.error.message;
    } else {
      context.answer = error.message;
    }

    callback(context);
  };

  postOpenAIChatCompletions(messages, apiKey, responseCallback, errorCallback);
};

export const openAIImageParser = async (
  prompt: string,
  apiKey: string,
  callback: Function
) => {
  const responseCallback = (data: any) => {

    const context = {
      text: "response",
      keywords: [],
      answer: "Here you go",
      options: { widget: "openAIWidget", widgetHistory: true },
      card: {
        header: "DALL·E",
        content: data.data.data[0].url,
        contentType: ContentType.IMAGE,
        subcontent: prompt,
        link: data.data.data[0].url,
      },
    };

    callback(context);
  };

  const errorCallback = (error: any) => {
    const context = {
      text: "response",
      keywords: [],
      options: { widget: "openai" },
      answer: "",
    };

    if (error.response) {
      context.answer =
        error.response.data.error.code +
        ": " +
        error.response.data.error.message;
    } else {
      context.answer = error.message;
    }

    callback(context);
  };

  postOpenAIImageGeneration(prompt, apiKey, responseCallback, errorCallback);
};
