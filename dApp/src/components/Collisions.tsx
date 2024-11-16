import { useState, useEffect } from "react";
import { collisions } from "../constants/collisions.ts";

const Collisions: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % collisions.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const collision = collisions[currentIndex];

  return (
    <div>
      <div
        id="chainContainers"
        className={`fade ${fade ? "fade-out" : "fade-in"}`}
      >
        <div className="w-full flex justify-center mt-2 gap-8 overflow-hidden">
          <div id="chainOne" className="dopperChainBadge">
            {collision.origin_type}: {collision.origin_chain}
          </div>
          <div id="chainTwo" className="dopperChainBadge">
            {collision.other_chain}: {collision.other_type}
          </div>
        </div>
        <div className="w-full flex justify-center mt-4 gap-8">
          <div id="addressOne" className="dopperAddressBadge">
            {collision.address}
          </div>
          <div id="addressTwo" className="dopperAddressBadge">
            {collision.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collisions;
