import { motion } from "framer-motion"
import hro from '../../images/Hero.png'
const Hero = () => {
    return (
        <motion.div initial={{ y: -500, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:h-[600px] py-[90px] sm:p-64 flex items-center justify-center">
            <div className="releative flex flex-col items-center justify-center">
                <img className="sm:hidden w-48" src={hro} alt="" />
                <h1 style={{ fontFamily: 'Yatra One, sans-serif' }} className="flex items-center justify-center space-x-2 md:space-x-4 lg:text-8xl md:text-6xl text-4xl"><span className="lg:text-7xl md:text-5xl text-3xl text-[#488B54]">Welcome</span> <span className="lg:text-5xl md:text-3xl text-xl text-slate-500 ">to</span > <span className="text-[#1E2F5B]">HisabKitab</span> </h1>
                <h2 className="text-center text-xl sm:text-2xl md:text-4xl italic"> ~ Track Your Shared Expenses with Ease</h2>
                <p className=" m-6 sm:m-8 w-4/6 text-center">Managing expenses with friends and family can get messy, but with HisabKitab, you&apos;ll never have to worry about who owes whom!</p>
                {/* <p style={{ fontFamily: 'Happy Monkey, sans-serif' }} className="absolute text-[0.8em] left-16 w-[12rem] rounded-full -rotate-12 text-center top-32  p-6">Managing expenses with friends and family can get messy, but with HisabKitab, you&apos;ll never have to worry about who owes whom! </p> */}
                <p style={{ fontFamily: 'Happy Monkey, sans-serif' }} className="hidden 2xl:block absolute text-[0.8em] right-16 w-[14rem] bg-slate-50 rounded-full rotate-[20deg] text-center top-48 border-slate-800 border-2 border-dotted p-6 py-8">HisabKitab is your go-to app for keeping track of all shared expenses, simplifying the process of managing accounts, and helping you stay organized when it comes to money matters.</p>
                <button type="button" style={{ fontFamily: 'Happy Monkey, sans-serif' }} className="flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 hover:bg-[#488B54] bg-[#1E2F5B] rounded-2xl text-slate-50 font-semibold transition delay-100">Go to Dashboard</button>
            </div>



        </motion.div>
    )
}

export default Hero