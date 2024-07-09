import React from "react";
import DashboardRoute from "./routes/admin/DashboardRoute";
import StudentRoute from "./routes/admin/StudentRoute";

const App = () => {
  return (
    <>
      <DashboardRoute />
      <StudentRoute />
    </>
  );
};

export default App;
