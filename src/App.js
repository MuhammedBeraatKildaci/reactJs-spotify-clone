import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router} from "react-router";

function App() {
  return (
    <Router>
        <div className="wrapper h-full">
          <Sidebar />
          <MainContent />
        </div>
        <BottomBar />
    </Router>
  );
}

export default App;
