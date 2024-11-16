import waiting from "@/assets/waiting.svg";
import safe from "@/assets/safe.svg";
import partiallyConfirmed from "@/assets/parciallySafe.svg";
import caDeployed from "@/assets/caDeployed.svg";

export const getStatusImage = (status: string): string => {
  switch (status) {
    case "safe":
      return safe;
    case "partially":
      return partiallyConfirmed;
    case "already_deployed":
      return caDeployed;
    case "checking":
      return waiting;
    default:
      return safe;
  }
};

export default getStatusImage;
