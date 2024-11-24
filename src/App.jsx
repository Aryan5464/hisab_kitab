import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import BottomBar from "./components/BottomBar/BottomBar";
import Wlcm from "./components/Common/Wlcm";
import LeftBar from "./components/LeftBar/LeftBar";
import TopBar from "./components/TopBar/TopBar";
import Contacts from "./pages/Contacts/Contacts";
import { NextUIProvider } from "@nextui-org/react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transactions from "./pages/Transactions/Transactions";
import Dashboard from './pages/Dashboard/Dashboard';
import SingleContact from "./pages/SingleContact/SingleContact";
// import Signup from './pages/Signup/Signup';

const Layout = () => {
  return (
    <>
      <LeftBar />
      <TopBar />
      <BottomBar />
      <div className="sm:ml-60 mt-14 sm:mt-0">
        <div className="px-5 py-2 lg:px-32 lg:py-5 ">
          <Wlcm />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/SingleContact" element={<SingleContact />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <NextUIProvider>
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={<Layout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </NextUIProvider>
    </Router>
  );
};

export default App;
