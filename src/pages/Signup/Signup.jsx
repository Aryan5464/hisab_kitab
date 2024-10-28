import { useState } from 'react';
import axios from 'axios';
import img from '../../images/Logo.png';

const Signup = () => {
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('API_URL', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200 || response.status === 201) {
                alert('Signup successful!');
            } else {
                alert(`Signup failed: ${response.data.message}`);
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup.');
        }
    };

    return (
        <div className='flex overflow-y-auto h-lvh justify-center items-center bg-gradient-to-r from-[#295E3E] to-[#204353]'>
            <form onSubmit={handleSubmit} className="bg-white py-2 px-8 sm:p-8 rounded-lg shadow-md w-5/6 sm:w-[400px] md:w-[500px] 2xl:w-[600px]">
                <div className="flex items-center justify-center gap-1">
                    <img className="w-12 mb-4 justify-self-center" src={img} alt="Logo" />
                    <p style={{ fontFamily: 'Yatra One, sans-serif' }} className='text-2xl text-[#295E3E]'>Hisab<span className='text-[#204353]'>Kitab</span></p>
                </div>
                <p className="text-2xl font-semibold mb-6 justify-self-center">Signup to your account</p>

                <label className="block mb-1 font-medium" htmlFor="userName">User Name</label>
                <input type="text" name="userName" id="userName" autoComplete="off" required value={formData.userName} onChange={handleChange} className="bg-slate-200 rounded-md w-full px-2 py-1 mb-4" />

                <div className="flex justify-between gap-1 flex-col sm:flex-row">
                    <div className='sm:w-1/2'>
                        <label className="block mb-1 font-medium" htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" autoComplete="off" required value={formData.firstName} onChange={handleChange} className="bg-slate-200 rounded-md w-full px-2 py-1 mb-4" />
                    </div>
                    <div className='sm:w-1/2'>
                        <label className="block mb-1 font-medium" htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" autoComplete="off" required value={formData.lastName} onChange={handleChange} className="bg-slate-200 rounded-md w-full px-2 py-1 mb-4" />
                    </div>
                </div>

                <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" autoComplete="off" required value={formData.email} onChange={handleChange} className="bg-slate-200 rounded-md w-full px-2 py-1 mb-4" />

                <label className="block mb-1 font-medium" htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" autoComplete="off" required value={formData.phoneNumber} onChange={handleChange} className="bg-slate-200 rounded-md w-full px-2 py-1 mb-4" />

                <label className="block mb-1 font-medium" htmlFor="password">Password</label>
                <input type="password" name="password" id="password" autoComplete="off" required value={formData.password} onChange={handleChange} className="bg-slate-200 rounded-md w-full px-2 py-1 mb-6" />

                <button type="submit" className="w-full bg-[#204353] text-white py-2 rounded-md hover:bg-[#295E3E] transition duration-200">Sign Up</button>

                <hr className='border-x-black' />
                <p className='text-center mt-5'>Already have an account? <span className="text-blue-600 cursor-pointer">Sign in</span></p>
            </form>
        </div>
    );
};

export default Signup;
