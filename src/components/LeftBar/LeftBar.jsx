import pro from '../../images/Logowhite.png';
import profile from '../../images/hisbKitab_profile.jpeg';
import { MdOutlineDashboard, MdOutlineContacts } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from 'react-router-dom';



const LeftBar = () => {
  return (
    <div className="hidden sm:flex w-60 h-lvh bg-blueee flex-col justify-start items-center gap-10 py-14 fixed top-0 left-0"  >
      <div className="flex justify-center cursor-default items-center rounded-md gap-1 p-1 select-none">
        <img className="w-8" src={pro} alt="" />
        <p style={{ fontFamily: 'Yatra One, sans-serif' }} className='text-2xl text-white' >HisabKitab</p>
      </div>

      <div className='flex flex-col justify-center items-center '>
        <img className='w-14 rounded-full cursor-pointer select-none' src={profile} alt="" />
        <p className='text-center text-slate-100 hover:underline cursor-pointer hover:text-blue-300'> Aryan Jain</p>
      </div>


      <div className='text-slate-100 flex flex-col items-start justify-start gap-4'>
        <Link to={'/dashboard'} className='flex items-center gap-2 hover:bg-blue-200 hover:text-blueee py-2 px-4 rounded-full ease-in duration-200 w-full'>
          <MdOutlineDashboard />
          <p className='cursor-pointer'>Dashboard</p>
        </Link>
        <Link to={'/Contacts'} className="flex items-center gap-2 hover:bg-blue-200 hover:text-blueee py-2 px-4 rounded-full ease-in duration-200 w-full">
          <MdOutlineContacts />
          <p className='cursor-pointer'>Contacts</p>
        </Link>
        <Link to={'/Transactions'} className="flex items-center gap-2 hover:bg-blue-200 hover:text-blueee py-2 px-4 rounded-full ease-in duration-200 w-full">
          <FaMoneyBillTransfer />
          <p className='cursor-pointer'>Transactions</p>
        </Link>
      </div>

      <p className='text-slate-100 flex items-center text-sm gap-1 cursor-pointer mt-auto hover:text-blue-300 '>
        <HiOutlineLogout className='text-xl' />
        Logout
      </p>

    </div>
  )
}

export default LeftBar