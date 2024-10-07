import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen bg-hero bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-t-transparent border-orange-600 animate-spin rounded-full"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Loading;
