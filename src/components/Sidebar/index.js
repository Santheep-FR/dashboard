import React, { useState } from 'react';
import './index.css'; // CSS for styling the sidebar
import SearchIcon from '@mui/icons-material/Search';
import MonitorIcon from '@mui/icons-material/Monitor';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HeadsetIcon from '@mui/icons-material/Headset';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';

function Sidebar() {
    const [isSidebarExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
      setIsExpanded(!isSidebarExpanded);
    };
  

  return (
    <div className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={toggleSidebar}>
        {isSidebarExpanded ? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}
      </button>
      <ul>
        <li className='icon-container'>
            <div> <SearchIcon /> </div>
            <Typography variant='p'className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>search</Typography> 
        </li>
        <li className='icon-container'>
            <div> <MonitorIcon /> </div>
            <Typography variant='p'className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>Data</Typography>
        </li>
        <li className='icon-container'>
            <div> <HelpOutlineIcon /> </div>
            <Typography variant='p'className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>Help</Typography>
        </li>
        <li className='icon-container'>
            <div> <EventIcon /> </div>
            <Typography variant='p'className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>Schedule</Typography> 
        </li>
        <li className='icon-container'>
            <div> <BusinessIcon /> </div>
            <Typography variant='p'className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>About</Typography> 
        </li>
        <li className='icon-container'>
            <div> <MonetizationOnIcon /> </div>
            <Typography variant='p' className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>Money</Typography>
        </li>
        <li className='icon-container'>
            <div> <HeadsetIcon /> </div>
            <Typography variant='p' className={`label ${isSidebarExpanded ? '' : 'hide-label'}`}>Support</Typography>
        </li>
      </ul>
      <button><SettingsIcon/></button>
    </div>
  );
}

export default Sidebar;
