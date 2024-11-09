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
          <div className="bg-blueee text-white rounded-lg p-4 flex items-center justify-center">
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
              {User.contacts.flatMap(contact => contact.transactions).slice(0, 5).map(transaction => (
                <li key={transaction.id} className="mb-2">
                  <p className="font-semibold">{transaction.description}</p>
                  <p className="text-sm text-gray-600">Amount: {transaction.amount}</p>
                  <p className="text-xs text-gray-400">Date: {new Date(transaction.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
