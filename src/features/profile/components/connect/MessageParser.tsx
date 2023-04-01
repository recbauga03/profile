// in MessageParser.js
import React from "react";
import { connect } from "../../../../data/config";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { ChatCompletionRequestMessage } from "openai";
import { parseOpenAI } from "../../../openai/openAIParser";
import {
  selectIsOpenAIEnabled,
  setAPIKey,
  selectAPIKey,
  selectMessages,
  setMessage,
  clear,
  selectType,
} from "../../../openai/openAISlice";

type Props = {
  actions: any;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
};

export const parser = (message: string, callback: Function) => {
  if (message === connect.openAI.exit.text) {
    callback(connect.openAI.exit.context);
    return;
  }

  for (var i = 0; i < connect.context.length; i++) {
    var conn = connect.context[i];

    for (var j = 0; j < conn.keywords.length; j++) {
      var keyword = conn.keywords[j];

      if (message.toLowerCase().includes(keyword.toLowerCase())) {
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
  const openAIType = useAppSelector(selectType);
  let messages = useAppSelector(selectMessages);

  const dispatch = useAppDispatch();

  const restartOpenAPI = (text: string) => {
    parser(text, actions.handleInput);
    dispatch(clear());
  };

  const parse = (message: string) => {
    if (message === connect.openAI.exit.text) {
      restartOpenAPI(message);
      return;
    }

    if (isChatOpenAIEnabled) {
      parseOpenAI({
        actions: actions,
        message: message,
        messages: messages,
        apiKey: apiKey,
        openAIType: openAIType,
        setAPIKey: (apiKey: string) => dispatch(setAPIKey(apiKey)),
        setMessage: (messages: ChatCompletionRequestMessage[]) =>
          dispatch(setMessage(messages)),
      });
      return;
    }

    parser(message, actions.handleInput);
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
