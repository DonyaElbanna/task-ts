import "./App.css";
import Track from "./Track";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
document.body.dir = i18n.dir()
  return (
    <div className="App">
      <Track />
    </div>
  );
}

export default App;
