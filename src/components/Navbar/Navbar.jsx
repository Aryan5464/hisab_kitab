

import Logo from '../../images/Logo.png';
import { motion } from "framer-motion";




const Navbar = () => {
    return (

        <motion.nav initial={{ opacity: 0, x: -600 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="absolute bg-blue-50 z-10 w-full flex px-10 py-5 justify-between items-center">
            <div className="flex justify-between items-center space-x-1">
                <img className="w-10" src={Logo} alt="" />
                <p style={{ fontFamily: 'Yatra One, sans-serif' }} className="text-2xl font-bold text-[#31683B]"><span className="text-[#1E2F5B]">Hisab</span>Kitab</p>
            </div>
            <div className="hidden md:flex space-x-4">

            </div>
            <div className="flex  ">
                <button type="button" className="bg-[#1E2F5B] hover:bg-[#2d4275] text-slate-50 px-4 py-2 rounded-l-full flex items-center justify-center transition duration-300 cursor">Login</button>
                <button type="button" className="bg-[#31683B] hover:bg-[#488b54] text-slate-50 px-4 py-2 rounded-r-full flex items-center justify-center transition duration-300 cursor">Signup</button>
            </div>
        </motion.nav>
    )
}

export default Navbar



{/* <div className="relative"> 
    <nav className="bg-blue-500 text-white px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:bg-blue-700 px-3 py-2 rounded">Home</a>
            <a href="#contact" className="hover:bg-blue-700 px-3 py-2 rounded">Contact</a>
        </div>
        <button className="md:hidden block text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg                   
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
            </svg>
        </button>
    </nav>
 
    <div className={`fixed top-0 right-0 h-full w-64 bg-blue-500 p-4 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}>
        <button className="text-white mb-4" onClick={() => setIsOpen(false)}>Close</button>
        <a href="#home" className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
        <a href="#contact" className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>
    </div>
</div> */}