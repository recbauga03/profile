import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { home } from "../../../data/config";
import "../styles/home.css";
import BouncyText from "../../../components/common/BouncyText";

const Home: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mnousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      opacity: 0,
    },
    hover: {
      x: `calc(${mousePosition.x}px - 5vw)`,
      y: `calc(${mousePosition.y}px - 5vw)`,
      height: "10vw",
      width: "10vw",
      backgroundColor: "var(--color-blend)",
      opacity: 1,
    },
  };

  const enterTitle = () => setCursorVariant("hover");
  const leaveTitle = () => setCursorVariant("default");
  const title = home.title.split("");

  return (
    <div id="home">
      <div id="title">
        <span onMouseEnter={enterTitle} onMouseLeave={leaveTitle}>
          {title.map((letter, index) => {
            return (
              <BouncyText key={index}>{letter === " " ? "\u00A0" : letter}</BouncyText>
            );
          })}
        </span>
      </div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default Home;
