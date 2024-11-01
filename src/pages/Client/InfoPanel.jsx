import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';

function InfoPanel() {
  const panelStyle = {
    background: 'pink',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)'
  };

  return (
    <div style={panelStyle} className="bg-secondary d-flex justify-content-center gap-3 align-items-center  p-4">
      <div>
        <FaRegQuestionCircle className="text-white" />
      </div>
      <div className="text-white">Presiona para mostrar ayuda</div>
    </div>
  );
}

export default InfoPanel;
