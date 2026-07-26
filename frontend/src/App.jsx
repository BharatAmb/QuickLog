import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import AdminDashboard from "./Layouts/AdminDashboard";
import './index.css';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
      <Route path="/" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;