import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceList from "./pages/ServiceList";
import ServiceDetail from "./pages/ServiceDetail";


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<ServiceList />} />
              <Route path='/:id/details' element={<ServiceDetail />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
