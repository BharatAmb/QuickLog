import { Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import AdminDashboard from "./Layouts/AdminDashboard";
import './index.css';
import WorkspaceReport from "./SuperAdmin/WorkSpace/WorkspaceReport";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/workspace" element={<WorkspaceReport/>} />

      </Route>
    </Routes>
  );
}

export default App;