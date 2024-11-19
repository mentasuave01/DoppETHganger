import { useState, useEffect } from "react";
import { collisions } from "../constants/collisions.ts";
import getNetworkLogo from "../utils/getNetworkLogo.ts";

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
        <div className="w-full flex flex-wrap justify-center mt-4 gap-4">
          <div className="chainContainer">
            {/* <div className="dopperChainBadge">
              {collision.origin_type}: {collision.origin_chain}
            </div> */}
            <div className="dopperAddressBadge">{collision.address}</div>
            <img
              src={getNetworkLogo(collision.origin_chain)}
              alt="origin_chain"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="chainContainer">
            {/* <div className="dopperChainBadge">
              {collision.other_chain}: {collision.other_type}
            </div> */}
            <div className="dopperAddressBadge">{collision.address}</div>
            <img
              src={getNetworkLogo(collision.other_chain)}
              alt="other_chain"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collisions;
