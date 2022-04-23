import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";

const App = () => {
  useEffect(() => {
    localStorage.clear();
    return;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
