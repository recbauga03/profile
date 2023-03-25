import { useEffect } from "react";
import { parser } from "../MessageParser";
import { openAIParser } from "../../../../openai/openAIParser";
import Button from "@mui/material/Button";
import "../../../styles/options.css";

import { connect } from "../../../../../data/config";
import { useAppSelector, useAppDispatch } from "../../../../../app/hooks";
import {
  selectIsOpenAIEnabled,
  toggleIsOpenAIEnabled,
  setAPIKey,
  selectAPIKey,
  selectMessages,
  setMessage,
  clear
} from "../../../../openai/openAISlice";

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
  const dispatch = useAppDispatch();
  let messages = useAppSelector(selectMessages);

  const openAIKeySetting = (apiKey: string) => {
    dispatch(setAPIKey(apiKey));
    actionProvider.handleChatGPTTokenSetting(connect.gpt.answers.tokenSetting);
  };

  const parseOpenAI = (text: string) => {
    if (!apiKey) {
      openAIKeySetting(text);
      return;
    }

    messages = [
      ...messages,
      {
        role: "user",
        content: text,
      },
    ];

    openAIParser(messages, apiKey, actionProvider.handleChatGPTResponse);
    dispatch(setMessage(messages));
  };

  const restartOpenAPI = (text: string) => {
    parser(text, actionProvider.handleSelection);
    dispatch(clear());
  }

  const selectOption = (text: string) => {

    if (text === connect.gpt.exit.text) {
      restartOpenAPI(text);
      return;
    }

    if (isChatOpenAIEnabled) {
      parseOpenAI(text);
      return;
    }

    parser(text, actionProvider.handleSelection, () =>
      dispatch(toggleIsOpenAIEnabled())
    );
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
