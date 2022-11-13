import { useEffect } from "react";
import { parser } from "../MessageParser";
import Button from "@mui/material/Button";
import "../../../styles/options.css";

type Props = {
  options: string[];
  props: any;
};

const Options: React.FC<Props> = ({ options, props }) => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);    
  });

  const selectOption = (text: string, actionProvider: any) => {
    parser(text, actionProvider.handleSelection);
  };

  const buttons = options.map((option, index) => (
    <Button
      key={index}
      variant="outlined"
      size="small"
      onClick={() => selectOption(option, props.actionProvider)}
    >
      {option}
    </Button>
  ));

  return <div className="optionContainer">{buttons}</div>;
};

export default Options;
