import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

const useMode = () => {
  return useContext(ColorModeContext);
};

export default useMode;
