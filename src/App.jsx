import BottomBar from "./components/BottomBar/BottomBar";
import Wlcm from "./components/Common/Wlcm";
import LeftBar from "./components/LeftBar/LeftBar";
import TopBar from "./components/TopBar/TopBar";
import Contacts from "./pages/Contacts/Contacts";
import { NextUIProvider } from "@nextui-org/react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
          <Outlet />
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: 'Dashboard', element: <Dashboard /> },
      { path: 'Contacts', element: <Contacts /> },
      { path: 'Transactions', element: <Transactions /> },
      {path: 'SingleContact', element: <SingleContact />}
    ],
  },
]);

const App = () => {
  return (
    <NextUIProvider>
      <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <RouterProvider router={router} />
      </div>
    </NextUIProvider>
  );
};

export default App;
