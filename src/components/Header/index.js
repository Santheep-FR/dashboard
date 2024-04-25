import React, { useState } from 'react';
import './index.css'; // CSS for styling the header
import DatePicker from 'react-datepicker'; // Importing datepicker
import { FaCalendarAlt, FaClock } from 'react-icons/fa'; // Importing icons from react-icons
import 'react-datepicker/dist/react-datepicker.css'; // Importing default CSS for react-datepicker

const Header = ({ isSidebarExpanded }) =>{
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = date => {
    setSelectedDate(date);
  };

  return (
    <div className={`header ${isSidebarExpanded ? 'shifted' : ''}`}>
      <h1>My Website</h1>
      <div className="header-right">
        <div className="date-time">
          <div className="icon-container">
            <FaCalendarAlt className="icon" />
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              showTimeSelect
              dateFormat="MMMM d, yyyy"
            />
          </div>
          <div className="icon-container">
            <FaClock className="icon" />
            <DatePicker
              selected={selectedDate}
              onChange={handleChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
