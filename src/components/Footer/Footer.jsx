import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Logo from '../../images/Logo.png'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.footer initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="bg-blue-50 text-[#1E2F5B] py-10">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold">HisabKitab</h2>
                        <img className='w-[100px]' src={Logo} alt="" />
                        <p className="text-[#1E2F5B]">
                            Simplify the way you manage shared expenses with friends and family.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-[#1E2F5B]">Home</a></li>
                            <li><a href="#" className="hover:text-[#1E2F5B]">Features</a></li>
                            <li><a href="#" className="hover:text-[#1E2F5B]">Pricing</a></li>
                            <li><a href="#" className="hover:text-[#1E2F5B]">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Get in Touch</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <EnvelopeIcon className="h-5 w-5 text-[#1E2F5B]" />
                                <span>support@hisabkitab.com</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <PhoneIcon className="h-5 w-5 text-[#1E2F5B]" />
                                <span>+91 12345 67890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-500 pt-4 text-center lg:text-left">
                    <p className="text-sm text-[#1E2F5B]">
                        &copy; 2024 HisabKitab. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
