import { useState } from 'react';
import axios from 'axios';
import img from '../../images/Logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('API_URL', formData, { headers: { 'Content-Type': 'application/json' } });
      if (response.status === 200) {
        alert('Login successful!');
      } else {
        alert(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div className='flex overflow-y-auto h-lvh justify-center items-center bg-gradient-to-r from-[#295E3E] to-[#204353]'>
      <form onSubmit={handleSubmit} className="bg-white py-2 px-8 sm:p-8 rounded-lg shadow-md w-5/6 sm:w-[400px] md:w-[500px] 2xl:w-[400px]">
        <div className="flex items-center justify-center gap-1">
          <img className="w-12 mb-4 justify-self-center" src={img} alt="Logo" />
          <p style={{ fontFamily: 'Yatra One, sans-serif' }} className='text-2xl text-[#295E3E]'>Hisab<span className='text-[#204353]'>Kitab</span></p>
        </div>
        <p className="text-2xl font-semibold mb-6 justify-self-center">Login to your account</p>
        <label className="block mb-1 font-medium" htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} autoComplete="off" className="bg-slate-200 rounded-md w-full px-2 py-1 mb-4" />
        <label className="block mb-1 font-medium" htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required value={formData.password} onChange={handleChange} autoComplete="off" className="bg-slate-200 rounded-md w-full px-2 py-1 mb-6" />
        <button type="submit" className="w-full bg-[#204353] text-white py-2 rounded-md hover:bg-[#295E3E] transition duration-200">Log In</button>
        <hr />
        <Link to={'/Signup'}><p className='text-center mt-5'>Don&apos;t have an account? <span className="text-blue-600 cursor-pointer">Sign up</span></p></Link>
      </form>
    </div>
  );
};

export default Login;
