import React from 'react';
import ClientForm from './ClientForm';
import Resuman from './Resuman';

function MainContent({ activeItem }) {
  const mainContentStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  };

  const responseButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#008c8c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'app.models.210.start':
        return <div>
          <div style={{ textAlign:"center" }}><p> Indian lawyer, politician, social activist, and writer who became the leader of the Indian Independence Movement against British rule.</p></div>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <button style={responseButtonStyle}>app.yes</button>
            <button style={responseButtonStyle}>app.no</button>
          </div>
        </div>;
      case 'app.models.210.personal_info':
        return <div>
          <ClientForm/>
        </div>
      case 'app.models.210.property_info':
        return <p>Property Info: This section contains property information.</p>;
      case 'app.models.210.property':
        return <p>Property: This section contains details about properties.</p>;
      case 'app.models.210.rental_info':
        return <p>Rental Info: This section contains rental information.</p>;
      case 'app.models.210.overview':
        return <div>
          <Resuman/>
        </div>
      default:
        return null;
    }
  };

  return (
    <div style={mainContentStyle}>

      <div style={{ marginTop: '20px' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default MainContent;
