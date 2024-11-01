import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import InfoPanel from './InfoPanel';

function ClientSVModel() {
  // State to track the active item
  const [activeItem, setActiveItem] = useState('app.models.210.start');

  // Styles for the container layout
  const appContainerStyle = {
    display: 'flex',
    gap: '10px',
    flexWrap: 'nowrap', // Prevent wrapping
  };

  const col3Style = {
    flexBasis: '25%',
    maxWidth: '25%',
  };
  const col4Style = {
    flexBasis: '25%',
    maxWidth: '25%',
    height:"100px"
  };

  const col6Style = {
    flexBasis: '50%',
    maxWidth: '50%',
  }; 

  return (
    <div style={appContainerStyle}>
      <div style={col3Style}>
        <Sidebar onSelect={setActiveItem} /> {/* Pass the function to update active item */}
      </div>
      <div style={col6Style}>
        <MainContent activeItem={activeItem} /> {/* Pass the active item to MainContent */}
      </div>
      <div style={col4Style} >
        <InfoPanel />
      </div>
    </div>
  );
}

export default ClientSVModel;
