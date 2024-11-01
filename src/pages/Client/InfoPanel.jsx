import React from 'react';

function InfoPanel() {
    const panelStyle = {
        backgroundColor: '#f7f7f7',
        padding: '20px',
        borderRadius: '10px',
        height: '100%',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    };

    return (
        <div style={panelStyle}>
            <h3>Info Panel</h3>
            <p>This is the information panel where additional information can be displayed.</p>
        </div>
    );
}

export default InfoPanel;
