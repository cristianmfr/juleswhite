import * as motion from "framer-motion/client";

interface HoverMotionProps {
  children: React.ReactNode;
}

export function HoverMotion({ children }: HoverMotionProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
      {children}
    </motion.div>
  );
}
