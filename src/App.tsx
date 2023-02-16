import "./styles/App.css";
import Track from "./components/Track";
import { useTranslation } from "react-i18next";

function App() {
  
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="App">
      <Track />
    </div>
  );
}

export default App;
