/* eslint-disable react/prop-types */
import profile from '../../images/hisbKitab_profile.jpeg';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";


const initialContact = {
    id: 1,
    name: "Rohit Sharma",
    email: "rohit.sharma@example.com",
    phoneNumber: "+1123456789",
    ownerId: 1,
    balance: 50.0,
    transactions: [
        {
            id: 1,
            contactId: 1,
            amount: 100.0,
            description: "Loan repayment",
            date: new Date("2024-10-01T10:30:00Z"),
        },
        {
            id: 2,
            contactId: 1,
            amount: -50.0,
            description: "Shared dinner expense",
            date: new Date("2024-10-15T18:45:00Z"),
        },
    ],
};

const SingleTransactionCard = ({ transaction, onDeleteTransaction }) => {
    return (
        <div className='flex justify-between px-2 border-b-1 border-slate-400 hover:bg-[#3e6f86]'>
            <span className='tracking-tighter font-extralight'>{transaction.description}</span>
            <div className="flex items-center gap-x-3">
                <span className={transaction.amount >= 0 ? 'text-green-400 text-[.9rem]' : 'text-red-500 text-[.9rem]'}>{transaction.amount}</span>
                <MdDeleteForever
                    className='text-red-400 text-xl cursor-pointer'
                    onClick={() => onDeleteTransaction(transaction.id)}
                />
            </div>
        </div>
    );
};

const SingleContact = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [contact, setContact] = useState(initialContact);

    const onDeleteTransaction = (transactionId) => {
        const confirmed = window.confirm("Are you sure you want to delete this transaction?");
        if (confirmed) {
            setContact(prevContact => {
                const updatedTransactions = prevContact.transactions.filter(t => t.id !== transactionId);
                const updatedBalance = updatedTransactions.reduce((sum, t) => sum + t.amount, 0);

                return {
                    ...prevContact,
                    transactions: updatedTransactions,
                    balance: updatedBalance
                };
            });
        }
    };

    return (
        <div>
            <div className="mt-4 flex flex-col gap-2 bg-blueee text-white px-5 sm:px-10 py-2 md:px-32 rounded-xl">
                <div className='flex justify-center items-center gap-x-3 text-blue-50 opacity-90'>
                    <img className='w-8 rounded-full' src={profile} alt="" />
                    <span>{contact.name}</span>
                    {contact.email && <a href={`mailto:${contact.email}`} className='ml-10'><SiGmail /></a>}
                    {contact.phoneNumber && <a href={`tel:${contact.phoneNumber}`}><FaPhoneAlt /></a>}

                    <Button className='bg-blue-50 text-blueee w-auto h-auto py-1 px-1 rounded-full no-border justify-self-end' color="primary"><MdOutlineEdit /></Button>
                </div>
                <div className="flex items-center justify-center gap-x-3">
                    <Button onPress={onOpen} className='bg-blue-50 text-blueee w-auto h-auto py-1 px-2 rounded-lg no-border scale-85' color="primary">+ Transaction</Button>
                    <AddModal isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} onClose={onClose} />
                    <Button className='bg-blue-50 text-blueee w-auto h-auto py-1 px-2 rounded-lg no-border scale-85' color="primary">Settle up</Button>
                </div>
            </div>
            <div className="mt-1 flex flex-col gap-2 bg-blueee text-white px-5 sm:px-10 md:px-36 p-5 rounded-xl mb-10">
                <p className="text-center text-2xl font-semibold">Transactions</p>
                {contact.transactions.map(transaction => (
                    <SingleTransactionCard
                        key={transaction.id}
                        transaction={transaction}
                        onDeleteTransaction={onDeleteTransaction}
                    />
                ))}
                <div className='flex bg-[#3e6f86] justify-between border-b-1 px-2 rounded-md border-slate-400'>
                    <span>Final Balance</span>
                    <span className={contact.balance >= 0 ? 'text-green-400' : 'text-red-500'}>{contact.balance}</span>
                </div>
            </div>
        </div>
    );
};


const AddModal = ({ isOpen, onOpen, onOpenChange, onClose }) => {


    return (

        <>
            {/* Blurred Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md z-40" onClick={onClose}></div>
            )}

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="modal-blur no-border fixed top-1/2 left-[45%] sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[330px] sm:w-[350px] z-50"
            >
                <ModalContent className="bg-blueee no-border opacity-80 text-white rounded-md p-4 overflow-x-auto mx-5 sm:mx-0">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 items-center justify-center text-white text-2xl font-bold">
                                Add Transaction
                            </ModalHeader>
                            <ModalBody className="text-blueee mx-auto">
                                <input autoFocus className="px-2 py-1 my-3 text-sm rounded w-60" placeholder="Enter amount" />
                                <input className="px-2 py-1 my-3 text-sm rounded" placeholder="Enter description" />
                            </ModalBody>
                            <ModalFooter className="flex justify-end items-center gap-2">
                                <Button className=' bg-red-600 opacity-90 font-semibold hover:bg-red-500 w-auto h-8 px-3  rounded-lg text-red-100' variant="flat" onPress={onClose}>Close</Button>
                                <Button className='bg-blue-50 font-semibold text-blueee w-auto h-8 px-2 hover:bg-blue-100 rounded-lg ' onPress={onClose}>Add Transaction</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>


        </>


    )
}

export default SingleContact;
