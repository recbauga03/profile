import { useEffect } from "react";
import { parser } from "../MessageParser";
import { parseOpenAI } from "../../../../openai/openAIParser";
import Button from "@mui/material/Button";

import { ChatCompletionRequestMessage } from "openai";
import { connect } from "../../../../../data/config";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import {
  toggleIsOpenAIEnabled,
  selectIsOpenAIEnabled,
  selectMessages,
  selectAPIKey,
  selectType,
  setMessage,
  setAPIKey,
  setType,
  clear,
  OpenAIType,
} from "../../../../openai/openAISlice";
import "../../../styles/options.css";

type Props = {
  options: string[];
  props: any;
};

const Options: React.FC<Props> = ({ options, props }) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const actionProvider = props.actionProvider;
  const isChatOpenAIEnabled = useAppSelector(selectIsOpenAIEnabled);
  const apiKey = useAppSelector(selectAPIKey);
  const openAIType = useAppSelector(selectType);
  let messages = useAppSelector(selectMessages);

  const dispatch = useAppDispatch();

  const restartOpenAPI = (text: string) => {
    parser(text, actionProvider.handleSelection);
    dispatch(clear());
  }

  const selectOption = (text: string) => {

    if (text === connect.openAI.exit.text) {
      restartOpenAPI(text);
      return;
    }

    if (isChatOpenAIEnabled) {
      parseOpenAI({
        actions: actionProvider,
        message: text,
        messages: messages,
        apiKey: apiKey,
        openAIType: openAIType,
        setAPIKey: (apiKey: string) => dispatch(setAPIKey(apiKey)),
        setMessage: (messages: ChatCompletionRequestMessage[]) =>
          dispatch(setMessage(messages)),
      });
      return;
    }

    if (text === connect.openAI.chat.text) {
      dispatch(toggleIsOpenAIEnabled());
      dispatch(setType(OpenAIType.CHAT));
    } else if (text === connect.openAI.image.text) {
      dispatch(toggleIsOpenAIEnabled());
      dispatch(setType(OpenAIType.IMAGE));
    }

    parser(text, actionProvider.handleSelection);
  };

  const buttons = options.map((option, index) => (
    <Button
      key={index}
      variant="outlined"
      size="small"
      onClick={() => selectOption(option)}
    >
      {option}
    </Button>
  ));

  return <div className="optionContainer">{buttons}</div>;
};

export default Options;
