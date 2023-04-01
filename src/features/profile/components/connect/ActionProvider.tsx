import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useAppDispatch } from "../../../../app/hooks";
import { CardState, setCardState } from "./connectSlice";
import { addMessage } from "../../../openai/openAISlice";

export interface Context {
  text: string;
  keywords: string[];
  answer: string;
  options: IMessageOptions;
  card?: CardState;
}

interface IMessageOptions {
  loading?: boolean;
  widget?: string;
  widgetHistory?: boolean;
  delay?: number;
  payload?: any;
}

type Props = {
  createChatBotMessage: any;
  setState: any;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
};

const updateMessages = (setState: any, message: any, prevIndex: number) => {
  setState((prev: any) => {
    let messages = prev.messages;
    let prevMessage = messages.at(prevIndex);

    if (prevMessage.widget && !prevMessage.widgetHistory) {
      prevMessage.widget = null;
    }

    return {
      ...prev,
      messages: [...prev.messages, message],
    };
  });
};

const ActionProvider: React.FC<Props> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleGPTTokenSetting = (context: Context) => {
    handleInput(context);
  };

  const handleOpenAIChatResponse = (context: Context) => {
    handleInput(context); 
    dispatch(addMessage({role: "assistant", content: context.answer}));
  };

  const handleOpenAIImageResponse = (context: Context) => {

    if (context.card) {
      dispatch(setCardState(context.card));
    }

    handleInput(context); 
  };

  const handleInput = (context: Context) => {
    const botMessage = createChatBotMessage(context.answer, context.options);
    updateMessages(setState, botMessage, -2);
  };

  const handleSelection = (context: Context) => {
    const clientMessage = createClientMessage(context.text, {});

    if (context.card) {
      dispatch(setCardState(context.card));
    }

    updateMessages(setState, clientMessage, -1);
    handleInput(context);
  };

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleInput,
            handleSelection,
            handleGPTTokenSetting,
            handleOpenAIChatResponse,
            handleOpenAIImageResponse
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
