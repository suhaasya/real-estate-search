import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
}

export default App;
