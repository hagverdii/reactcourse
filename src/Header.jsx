import React from 'react';

const Header = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Mamed', 'Dave'];
        const int = Math.floor(Math.random() * 4);
        return names[int];
    }
    
    return (
        <header>
            <h1>Groceries List</h1>
        </header>
    );
};

export default Header;