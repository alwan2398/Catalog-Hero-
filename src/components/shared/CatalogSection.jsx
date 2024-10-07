import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CatalogSection = () => {
  const catalogHero = [
    {
      title: "Shangguan",
      desc: "Shangguan suffered for years from nightmares filled with deadly peonies and endless copybooks.",
      img: "https://i.pinimg.com/474x/1c/ec/c3/1cecc32d3ee46b9370eee9fa516c5258.jpg",
    },
    {
      title: "Jing",
      desc: "Jing was born to an old enforcer family, receiving rigorous training since her early years. However,",
      img: "https://i.pinimg.com/474x/09/ab/ad/09abad3ea7cf66161fe92b1544cab42d.jpg",
    },
    {
      title: "Yao",
      desc: "As a young admirer of Li Bai, Yao has always been filled with passion and ambition.",
      img: "https://i.pinimg.com/474x/8c/f2/bf/8cf2bfff24a33dd2b5924e7769ba246b.jpg",
    },
    {
      title: "Li Bai",
      desc: "Born in Alsahraa, he was well-versed in the writings of Madinat Erudit's sages from an early age,",
      img: "https://i.pinimg.com/474x/c1/74/2e/c1742e464b8f513ca980e5fb90f4cbe2.jpg",
    },
  ];

  const [clickedIndexes, setClickedIndexes] = useState(
    Array(catalogHero.length).fill(false)
  );

  const handleClick = (index) => {
    setClickedIndexes((prevClickedIndexes) =>
      prevClickedIndexes.map((clicked, i) => (i === index ? !clicked : clicked))
    );
  };

  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 lg:divide-x divide-gray-300">
      {catalogHero.map((hero, index) => (
        <div className="relative overflow-hidden group" key={hero.title}>
          <div>
            <img
              src={hero.img}
              alt={hero.title}
              width={300}
              className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              onClick={() => handleClick(index)}
            />
          </div>

          <div className="absolute top-72 bg-white text-black bg-opacity-60 backdrop-blur m-12 px-4 rounded-md">
            <h3 className="text-xl font-semibold">{hero.title}</h3>
            <p className="text-sm">{hero.desc}</p>
            <a href="#" className="inline-flex items-center text-sm gap-1">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div
            className="insert-0 bg-hero bg-cover bg-center bg-no-repeat absolute top-0 w-full h-full flex flex-col items-center justify-end md:absolute border-b-2 md:border-b-0"
            initial={{ y: 0 }}
            animate={clickedIndexes[index] ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default CatalogSection;
