import { Link } from 'react-router-dom';
import profile from '../../images/hisbKitab_profile.jpeg';
import CalendarComponent from './CalendarComponent';
import ClockComponent from './ClockComponent';


const User = {
  id: 1,
  userName: "aryanjain123",
  firstName: "Aryan",
  lastName: "Jain",
  email: "aryanjain@example.com",
  phoneNumber: "+1234567890",
  contacts: [
    // Contacts array as given above...
  ],
};

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

const Dashboard = () => {
  function getTotalBalance(user) {
    return user.contacts.reduce((total, contact) => total + contact.balance, 0);
  }

  const totalBalance = getTotalBalance(User);

  return (
    <div className="p-4 mb-10">
      {/* Main Container */}
      <div className="grid gap-4">

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Profile Component */}
          <div className="col-span-1 sm:col-span-2 bg-blueee text-white rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4">
            <img className="w-24 rounded-full" src={profile} alt="Profile" />
            <div>
              <h2 className="text-xl font-bold">{User.firstName} {User.lastName}</h2>
              <p className="text-gray-100">{User.userName}</p>
              <p>Total Balance: {totalBalance > 0 ? `+${totalBalance}` : totalBalance}</p>
            </div>
          </div>

          {/* Clock Component */}
          <div className="bg-green-200 text-white rounded-lg p-4 flex items-center justify-center">
            {/* Replace with actual Clock component */}
            <ClockComponent />
          </div>

          {/* Calendar Component */}
          <div className="bg-blueee text-white rounded-lg p-auto flex items-center justify-center">
            {/* Replace with actual Calendar component */}
            <CalendarComponent />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Recent Contacts */}
          <div className="col-span-1 sm:col-span-2 bg-blueee text-white rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Recent Contacts</h3>
            {/* Render a list of recent contacts */}
            <ul>
              {User.contacts.map(contact => (
                <li key={contact.id} className="mb-2">
                  <p className="font-semibold">{contact.name}</p>
                  <p className="text-sm text-gray-600">{contact.email}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Transactions */}
          <div className="col-span-1 sm:col-span-2 bg-blueee text-white rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
            {/* Render a list of recent transactions */}
            <ul>
              {transactions.slice(0, 5).map(transaction => (
                <li key={transaction.id} className="mb-2 flex items-center justify-between gap-1 border-gray-500 border-b-1">
                  <div>
                    <p className="font-semibold text-sm">{transaction.description}</p>
                    <p className="text-xs text-gray-400 -mt-1">{transaction.contact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Amount: {transaction.amount}</p>
                    <p className="text-xs text-gray-400 -mt-1">Date: {new Date(transaction.date).toLocaleDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to={'/Transactions'}><p className='text-[.8em] text-center text-gray-300'>more...</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
