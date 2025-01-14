import * as motion from "framer-motion/client";

interface TitleTransitionProps {
  children: React.ReactNode;
}

export default function TitleTransition({ children }: TitleTransitionProps) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 0.5,
        scale: { type: "spring", visualDuration: 0.3, bounce: 0.4 },
      }}
    >
      {children}
    </motion.div>
  );
}
