import pro from '../../images/Logowhite.png';
const TopBar = () => {
    return (
        <div className="sm:hidden fixed w-svw h-14 bg-blueee top-0 flex justify-between items-center px-5 text-slate-100 shadow-lg shadow-white">

            <div className="flex justify-center cursor-default items-center rounded-md gap-1 p-1 select-none">
                <img className="w-8" src={pro} alt="" />
                <p style={{ fontFamily: 'Yatra One, sans-serif' }} className='text-2xl text-white' >HisabKitab</p>
            </div>

        </div>

    )
}

export default TopBar