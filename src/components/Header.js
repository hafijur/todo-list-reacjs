import React from 'react';

const Header = () => {
    return (
        <div style={{ 
            fontSize: "30px",
            fontWeight: "bold",
            background: "#e6e0e0",
            boxShadow: "0 5px 16px -5px grey",
            padding: "10px",
            textAlign: "center"
         }}>
            Todo Manager
        </div>
    );
};

export default Header;