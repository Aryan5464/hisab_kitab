import BottomBar from "./components/BottomBar/BottomBar"
import LeftBar from "./components/LeftBar/LeftBar"
import TopBar from "./components/TopBar/TopBar"
import Contacts from "./pages/Contacts/Contacts"
// import Dashboard from './pages/Dashboard/Dashboard'
// import Transactions from "./pages/Transactions/Transactions"
// import Signup from './pages/Signup/Signup'

import { NextUIProvider } from "@nextui-org/react";

const App = () => {

  return (
    <NextUIProvider >
      <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
        <LeftBar />
        <TopBar />
        <BottomBar />
        <div className="sm:ml-60 mt-14 sm:mt-0">
          <div className="px-5 py-2 lg:px-32 lg:py-5 ">
            {/* <Dashboard /> */}
            <Contacts />
            {/* <Transactions /> */}
          </div>
        </div>
        {/* <Signup/> */}
      </div>
    </NextUIProvider>
  )
}
export default App