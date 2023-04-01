import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { chatbotEndRef } from "../Connect";

import { useAppSelector } from "../../../../../app/hooks";
import { ContentType, initialState, selectCardState } from "../connectSlice";

const Cards: React.FC = () => {
  const cardState = useAppSelector(selectCardState);
  const [card, setCard] = useState(initialState);

  const scrollingBottom = () => {
    const e = chatbotEndRef;

    e.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  useEffect(() => {
    setCard(cardState);
  }, []);

  useEffect(() => {
    scrollingBottom();
  });

  let content : string | React.ReactElement = card.content;

  if (ContentType.IMAGE === card.contentType) {
    content = <img src={card.content} className="imgCard"/>;
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {card.header}
        </Typography>
        <Typography variant="h6" component="div">
          {content}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }} color="text.secondary">
          {card.subcontent}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            window.open(card.link, "_blank");
          }}
        >
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
