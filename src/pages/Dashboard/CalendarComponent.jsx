const CalendarComponent = () => {
    // Get the current date
    const currentDate = new Date();

    // Extract the date, month, and year as separate variables
    const day = currentDate.getDate(); // Day of the month (1-31)
    const month = currentDate.toLocaleString('en-US', { month: 'long' }); // Full month name
    const year = currentDate.getFullYear(); // Year (e.g., 2024)

    // Get the day of the week (e.g., 'Monday')
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <div className="p-4 text-center">
            <p className="text-4xl text-red-400 font-semibold">{dayOfWeek}</p>
            <p className="text-xl">
                <span className='text-2xl font-bold text-green-200'>{day}</span> <span className='text-blue-200'>{month}</span> <br /><span className='text-lg text-pink-400'>{year}</span>
            </p>
        </div>
    );
};

export default CalendarComponent;