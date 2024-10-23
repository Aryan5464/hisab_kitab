
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"


const App = () => {

  return (
    <div className="bg-blue-50">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}
export default App