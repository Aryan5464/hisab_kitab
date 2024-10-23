import { BanknotesIcon, UserPlusIcon, ClockIcon, BellAlertIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
    {
        name: 'Simplified Expense Tracking',
        description: 'Easily record shared expenses like group meals, trips, or groceries. Track who owes what in real time and never miss a payment.',
        icon: BanknotesIcon,
    },
    {
        name: 'Add Friends & Transactions',
        description: 'Create an account, add friends, and log expenses effortlessly. Get a complete overview of your financial history with each friend.',
        icon: UserPlusIcon,
    },
    {
        name: 'Automated Transaction History',
        description: 'Keep a detailed record of your expenses and payments with friends and family. Never forget who owes whom with our transaction history.',
        icon: ClockIcon,
    },
    {
        name: 'Seamless Dues Reminders',
        description: 'Send automatic payment reminders directly via WhatsApp or email, making it easier to settle dues without awkward conversations.',
        icon: BellAlertIcon,
    },
    {
        name: 'Account Management Made Easy',
        description: 'See your balances at a glance with an intuitive dashboard. No more confusion about who owes what.',
        icon: ClipboardDocumentListIcon,
    },
];

const Features = () => {
    return (
        <div className="bg-green-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <motion.h2 initial={{y:100, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{delay:.1}} 
  viewport={{ once: true }} className="text-base font-semibold leading-7 text-[#1F325B]">Track Expenses Easily</motion.h2>
                    <motion.p initial={{y:100, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{delay:.1}} 
  viewport={{ once: true }} className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                        Simplify Expense Sharing with HisabKitab
                    </motion.p>
                    <motion.p initial={{y:100, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{delay:.1}} 
  viewport={{ once: true }} className="mt-6 text-lg leading-8 text-gray-600">
                        Manage shared expenses with friends and family. Record transactions, track balances, and send reminders in a few clicks.
                    </motion.p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <motion.div initial={{y:100, opacity: 0}} whileInView={{y:0, opacity:1}} transition={{delay:.1}} 
  viewport={{ once: true }} key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#488B54]">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Features;
