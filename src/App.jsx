import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import CatalogSection from "./components/shared/CatalogSection";
import Loading from "./components/shared/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loading"
            className="absolute inset-0 flex items-center justify-center bg-gray-900 h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            className="px-4 py-6 mx-auto sm:px-6 lg:px-4 max-w-7xl overflow-hidden"
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CatalogSection />
          </motion.div>
        )}
      </AnimatePresence>
      <div></div>
    </div>
  );
};

export default App;
