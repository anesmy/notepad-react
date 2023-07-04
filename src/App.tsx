import { Routes, Route } from "react-router-dom";
import NotePage from "./components/NotePage";

function App() {
  return (
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<NotePage />} />
        <Route path="/login" element={<NotePage />} />
        <Route path="/notepad" element={<NotePage />} />
      </Routes>
    </div>
  );
}

export default App;
