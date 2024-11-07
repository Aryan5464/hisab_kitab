import profile from '../../images/hisbKitab_profile.jpeg';
import { Button} from "@nextui-org/react";
import { MdAccountBalance } from "react-icons/md";



const User = {
  id: 1,
  userName: "aryanjain123",
  firstName: "Aryan",
  lastName: "Jain",
  email: "aryanjain@example.com",
  phoneNumber: "+1234567890",
  password: "password123", // This would typically be hashed in production
  contacts: [
    {
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
    },
    {
      id: 2,
      name: "Sneha Verma",
      email: "sneha.verma@example.com",
      phoneNumber: "+1123456790",
      ownerId: 1,
      balance: -30.0,
      transactions: [
        {
          id: 3,
          contactId: 2,
          amount: -30.0,
          description: "Gift purchase",
          date: new Date("2024-10-05T15:20:00Z"),
        },
      ],
    },
  ],
};


const Dashboard = () => {
  function getTotalBalance(user) {
    return user.contacts.reduce((total, contact) => total + contact.balance, 0);
  }    // Example usage:
  // const totalBalance = getTotalBalance(User);

  return (
    <div>
      <div className="text-4xl h-80 flex items-center"> Dash the board </div>
      {/* <div className="mt-4 flex flex-col gap-2 bg-blueee text-white px-36 p-5 rounded-xl mb-10">
        <div className='flex justify-between mx-auto gap-28' >
          <img className='w-36 rounded-full' src={profile} alt="" />
          <div >
            <div className='flex gap-x-5 items-center'>
              <p className=''>{User.userName}</p>
              <Button variant="default" className="border-1 hover:bg-blue-50 hover:text-blueee transition-all ease-in-out border-blue-50 rounded-lg !h-7 w-24 text-[.7rem]">Edit profile</Button>
            </div>
            <div className='flex gap-x-5 items-center'>
              <span>{User.contacts.length} contacts</span>
              <span>69 Transactions</span>
              <span className='flex items-center gap-x-1'><MdAccountBalance /> {totalBalance > 0 ? <span className='text-green-400'>+{totalBalance}</span> : <span className='text-red-500'>{totalBalance}</span>} </span>
            </div>
            <div className='mt-3'>
              <p className='text-sm'> {User.firstName + ' ' + User.lastName} </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard