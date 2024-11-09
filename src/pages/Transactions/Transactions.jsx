/* eslint-disable react/prop-types */
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import profile from '../../images/hisbKitab_profile.jpeg';
// import { useState } from "react";


const transactions = [
  {
    id: 1,
    amount: 120.5,
    description: "Dinner at Italian Bistro",
    date: new Date("2023-10-10T19:30:00Z"),
    contact: {
      id: 101,
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "+1234567890",
      balance: 220.5, // John owes 220.5 to the user
    },
  },
  {
    id: 2,
    amount: -50.0,
    description: "Grocery shared",
    date: new Date("2023-09-30T14:00:00Z"),
    contact: {
      id: 102,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "+1234567891",
      balance: -10.0, // User owes 10 to Jane
    },
  },
  {
    id: 3,
    amount: 200.0,
    description: "Concert tickets",
    date: new Date("2023-09-20T20:00:00Z"),
    contact: {
      id: 103,
      name: "Mark Johnson",
      email: "markjohnson@example.com",
      phoneNumber: "+1234567892",
      balance: 300.0, // Mark owes 300 to the user
    },
  },
  {
    id: 4,
    amount: -30.75,
    description: "Coffee outing",
    date: new Date("2023-09-15T10:30:00Z"),
    contact: {
      id: 104,
      name: "Emily Clark",
      email: "emilyclark@example.com",
      phoneNumber: "+1234567893",
      balance: -50.0, // User owes 50 to Emily
    },
  },
  {
    id: 5,
    amount: 90.0,
    description: "Uber fare for team dinner",
    date: new Date("2023-09-10T18:00:00Z"),
    contact: {
      id: 105,
      name: "Chris Lee",
      email: "chrislee@example.com",
      phoneNumber: "+1234567894",
      balance: 140.0, // Chris owes 140 to the user
    },
  },
  {
    id: 6,
    amount: 65.25,
    description: "Shared Netflix subscription",
    date: new Date("2023-08-25T08:00:00Z"),
    contact: {
      id: 101,
      name: "John Doe",
      email: "johndoe@example.com",
      phoneNumber: "+1234567890",
      balance: 100.25, // John owes 100.25 to the user
    },
  },
  {
    id: 7,
    amount: -150.0,
    description: "Hotel booking for vacation",
    date: new Date("2023-08-15T12:00:00Z"),
    contact: {
      id: 102,
      name: "Jane Smith",
      email: "janesmith@example.com",
      phoneNumber: "+1234567891",
      balance: -60.0, // User owes 60 to Jane
    },
  },
  {
    id: 8,
    amount: 40.0,
    description: "Lunch split",
    date: new Date("2023-08-10T13:30:00Z"),
    contact: {
      id: 104,
      name: "Emily Clark",
      email: "emilyclark@example.com",
      phoneNumber: "+1234567893",
      balance: -20.0, // User owes 20 to Emily
    },
  },
  {
    id: 9,
    amount: 120.0,
    description: "Gift contribution",
    date: new Date("2023-07-25T15:00:00Z"),
    contact: {
      id: 103,
      name: "Mark Johnson",
      email: "markjohnson@example.com",
      phoneNumber: "+1234567892",
      balance: 150.0, // Mark owes 150 to the user
    },
  },
  {
    id: 10,
    amount: -20.5,
    description: "Taxi fare after dinner",
    date: new Date("2023-07-20T22:00:00Z"),
    contact: {
      id: 105,
      name: "Chris Lee",
      email: "chrislee@example.com",
      phoneNumber: "+1234567894",
      balance: 49.5, // Chris owes 49.5 to the user
    },
  },
];


const EmptyTransactions = () => {

  return (
    <>
    </>
  )
}

const TransactionCard = ({ transaction }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Main Transaction Card */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-5 sm:gap-x-10 items-center hover:bg-[#294c5c] p-2 rounded-md w-full" onClick={onOpen}>
        <div className="col-span-1 cursor-pointer text-lg text-left hover:underline">
          {transaction.contact.name}
        </div>
        <div className="col-span-2 text-left hidden sm:block">
          {transaction.description}
        </div>
        <div className="col-span-2 text-left hidden sm:block">
          {new Date(transaction.date).toLocaleString()}
        </div>
        <div className="col-span-1 text-right">
          {transaction.amount >= 0 ? (
            <span className="text-green-400">+{transaction.amount}</span>
          ) : (
            <span className="text-red-500">{transaction.amount}</span>
          )}
        </div>
      </div>

      {/* Blurred Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-md z-40" onClick={onClose}></div>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} className="modal-blur no-border fixed top-1/2 left-[45%] sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[330px] sm:w-[350px] z-50">
        <ModalContent className="bg-blue-50 text-bluee rounded-md p-2 overflow-x-auto mx-5 sm:mx-0">
          <ModalHeader className="flex flex-col gap-1 items-center justify-center text-blueee text-2xl">
            Transaction Details
          </ModalHeader>
          <ModalBody className="text-blueee mx-auto">
            <div className="flex items-center gap-x-5 mb-4">
              <img className="rounded-full w-16 bg-blueee p-1" src={profile} alt="" />
              <div>
                <p className="flex items-center gap-x-2"><CgProfile className="text-blueee text-xl" />{transaction.contact.name}</p>
                {transaction.contact.email && <p className="flex items-center gap-x-2"><SiGmail className="text-blueee" /> {transaction.contact.email}</p>}
                {transaction.contact.phoneNumber && <p className="flex items-center gap-x-2"><FaPhoneAlt className="text-blueee" /> {transaction.contact.phoneNumber}</p>}
              </div>
            </div>
            <p>Description: {transaction.description}</p>
            <p>Date: {new Date(transaction.date).toLocaleString()}</p>
            <p>Amount: {transaction.amount >= 0 ? <span className="text-green-400">+{transaction.amount}</span> : <span className="text-red-500">{transaction.amount}</span>}</p>
            <p>Balance: {transaction.contact.balance}</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
const Transactions = () => {




  return (
    <div>
      <div className="mt-4 flex flex-col gap-2 bg-blueee text-white p-5 rounded-xl mb-10">
        <p className=" text-xl sm:text-2xl font-semibold flex items-center justify-between">Transactions <GiTakeMyMoney className="text-5xl" /> </p>
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-5 sm:gap-x-10 items-center bg-[#294c5c]  p-2 rounded-md w-full">
          <div className="font-semibold sm:text-xl col-span-1">Name</div>
          <div className="font-semibold sm:text-xl col-span-2 hidden sm:block">Description</div>
          <div className="font-semibold sm:text-xl col-span-2 hidden sm:block">Date</div>
          <div className="font-semibold sm:text-xl text-right col-span-1">Amount</div>
        </div>

        {!transactions || transactions.length == 0 ? <EmptyTransactions /> : transactions.map(transaction => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        ))}


      </div>
    </div>
  )
}

export default Transactions