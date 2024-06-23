import { useSelector } from "react-redux";

const Selector = () => {
  const languageSelector = useSelector((state) => state.language);
  return { languageSelector };
};

export default Selector;
