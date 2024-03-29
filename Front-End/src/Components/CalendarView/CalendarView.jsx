import React, { useState } from 'react';
import './CalendarView.css'; // Import CSS for styling (you can define your own styles)

function calendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to generate an array of dates for a given month
  const getDaysInMonth = (year, month) => {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    const days = [];
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date));
    }
    return days;
  };

  // Function to render a single day cell
  const renderDayCell = (day) => {
    return <div key={day.toISOString()} className="day">{day.getDate()}</div>;
  };

  // Function to render the entire calendar grid
  const renderCalendarGrid = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    return daysInMonth.map(renderDayCell);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
          Previous Month
        </button>
        <h2>{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
          Next Month
        </button>
      </div>
      <div className="days">{renderCalendarGrid()}</div>
    </div>
  );
}

export default calendarView;
