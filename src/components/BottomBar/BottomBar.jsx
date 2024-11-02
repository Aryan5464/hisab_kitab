import profile from '../../images/hisbKitab_profile.jpeg';
import { MdOutlineDashboard, MdOutlineContacts } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { Link } from 'react-router-dom';



const BottomBar = () => {
    return (
        <div className="sm:hidden fixed w-svw h-14 bg-blueee bottom-0 flex justify-between items-center px-5 text-slate-100">

            <Link to={'/Dashboard'} className='flex flex-col items-center gap-1 hover:text-blue-300 hover:scale-110 '>
                <MdOutlineDashboard className='text-2xl' />
            </Link>
            <p className='opacity-50'>.</p>
            <Link to={'/Contacts'} className="flex flex-col items-center gap-1 hover:text-blue-300 hover:scale-110">
                <MdOutlineContacts className='text-2xl' />
            </Link>
            <p className='opacity-50'>.</p>
            <Link to={'/Transactions'} className="flex flex-col items-center gap-1 hover:text-blue-300 hover:scale-110">
                <FaMoneyBillTransfer className='text-2xl' />
            </Link>
            <p className='opacity-50'>.</p>

            <div className="flex flex-col items-center gap-1 hover:text-blue-300 hover:scale-110">
                <img className='w-8 rounded-full' src={profile} alt="" />
            </div>

        </div>
    )
}

export default BottomBar