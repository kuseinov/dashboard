import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Doshboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar/Calendar";
import BoardPage from "./pages/Board/Board";
import DataGrind from "./pages/DataGrind/DataGrind";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="users" element={<DataGrind />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
