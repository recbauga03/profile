import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

type Props = {
  children?: React.ReactNode;
};

const BouncyText: React.FC<Props> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1,.55,1)",
        "scale3d(1,1.25,1)",
        "scale3d(1,.85,1)",
        "scale3d(1,1.05,1)",
        "scale3d(1,1,1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {children}
      </motion.div>
    </motion.span>
  );
};

export default BouncyText;
