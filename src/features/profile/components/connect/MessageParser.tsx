// in MessageParser.js
import React from "react";
import { connect } from "../../../../data/config";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import {
  selectIsOpenAIEnabled,
  toggleIsOpenAIEnabled,
  setAPIKey,
  selectAPIKey,
  selectMessages,
  setMessage,
  clear
} from "../../../openai/openAISlice";
import { openAIParser } from "../../../openai/openAIParser";

type Props = {
  actions: any;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
};

export const parser = (
  message: string,
  callback: Function,
  toggleIsChatGPTEnabled?: Function
) => {

  if (message === connect.gpt.exit.text) {
    callback(connect.gpt.exit.context);
    return;
  }

  for (var i = 0; i < connect.context.length; i++) {
    var conn = connect.context[i];

    for (var j = 0; j < conn.keywords.length; j++) {
      var keyword = conn.keywords[j];

      if (message.toLowerCase().includes(keyword.toLowerCase())) {
        if (conn.text === connect.gpt.text && toggleIsChatGPTEnabled) {
          toggleIsChatGPTEnabled();
        }

        conn.text = message;
        callback(conn);
        return;
      }
    }
  }

  connect.default.text = message;
  connect.default2.text = message;

  callback(connect.default);
  callback(connect.default2);
};

const MessageParser: React.FC<Props> = ({ actions, children }) => {
  const isChatOpenAIEnabled = useAppSelector(selectIsOpenAIEnabled);
  const apiKey = useAppSelector(selectAPIKey);
  const dispatch = useAppDispatch();
  let messages = useAppSelector(selectMessages);

  const openAIKeySetting = (apiKey: string) => {
    dispatch(setAPIKey(apiKey));
    actions.handleGPTTokenSetting(connect.gpt.answers.tokenSetting);
  };

  const parseOpenAI = (message: string) => {
    if (!apiKey) {
      openAIKeySetting(message);
      return;
    }

    messages = [
      ...messages,
      {
        role: "user",
        content: message,
      },
    ];

    openAIParser(messages, apiKey, actions.handleChatGPTResponse);
    dispatch(setMessage(messages));
  };

  const restartOpenAPI = (text: string) => {
    parser(text, actions.handleInput);
    dispatch(clear());
  }

  const parse = (message: string) => {

    if (message === connect.gpt.exit.text) {
      restartOpenAPI(message);
      return;
    }

    if (isChatOpenAIEnabled) {
      parseOpenAI(message);
      return;
    }

    parser(message, actions.handleInput, () =>
      dispatch(toggleIsOpenAIEnabled())
    );
  };

  return (
    <div>
      {React.Children.map(
        children,
        (child: React.DetailedReactHTMLElement<any, HTMLElement>) => {
          return React.cloneElement(child, {
            parse: parse,
            actions,
          });
        }
      )}
    </div>
  );
};

export default MessageParser;
