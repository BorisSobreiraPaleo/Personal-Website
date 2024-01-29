import useTheme from "../themeContext/useTheme";
import { MdOutlineLightMode, MdOutlineDarkMode  } from "react-icons/md";

const ThemeSelector = () => {
  const {isDarkMode, toggleTheme} = useTheme()
  return (
  <div onClick={toggleTheme}>
    { isDarkMode ? (<MdOutlineLightMode size={25} />) : (<MdOutlineDarkMode size={25} />) }
  </div>
  )
};

export default ThemeSelector;
