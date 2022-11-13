// in MessageParser.js
import React from "react";
import { connect } from "../../../../data/config";

type Props = {
  actions: any;
  children: React.DetailedReactHTMLElement<any, HTMLElement>;
};

export const parser = (message: string, callback: Function) => {
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
  const parse = (message: string) => {
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
