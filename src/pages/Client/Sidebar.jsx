import React, { useState } from 'react';

function Sidebar({ onSelect }) {
    const [activeItem, setActiveItem] = useState('app.models.210.start');

    const sidebarStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
        flexBasis: '25%',
        transition: 'flex-basis 0.3s ease',
    };

    const sidebarItemStyle = {
        padding: '10px',
        cursor: 'pointer',
        color: '#333',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
    };

    const activeItemStyle = {
        ...sidebarItemStyle,
        backgroundColor: '#e0e0e0',
    };

    const handleItemClick = (item) => {
        setActiveItem(item.key);
        if (onSelect) onSelect(item.key);
    };

    const items = [
        { key: 'app.models.210.start', label: 'Start' },
        { key: 'app.models.210.personal_info', label: 'Personal Info' },
        { key: 'app.models.210.property_info', label: 'Property Info' },
        { key: 'app.models.210.property', label: 'Property' },
        { key: 'app.models.210.rental_info', label: 'Rental Info' },
        { key: 'app.models.210.overview', label: 'Resumen' },
    ];

    return (
        <div style={sidebarStyle}>
            {items.map(item => (
                <div 
                    key={item.key}
                    style={activeItem === item.key ? activeItemStyle : sidebarItemStyle} 
                    onClick={() => handleItemClick(item)}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
