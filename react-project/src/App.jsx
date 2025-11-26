import React, { useState } from 'react';
import { Books } from './libary/Books';
import { Conditions } from './libary/Conditions';
import { ListJewishBooks } from './libary/listjewishBooks';
import './App.css';
import { Writer } from './libary/writer';

function App() {
    const [showWriter, setShowWriter] = useState(false);
    const [showBooks, setShowBooks] = useState(false);
    const [name, setName] = useState('');
    const [isNameInputVisible, setIsNameInputVisible] = useState(true);
    let nameInput = '';

    const toggleWriterVisibility = () => {
        setShowWriter(!showWriter);
    };

    const toggleBooksVisibility = () => {
        setShowBooks(!showBooks);
    };

    const handleNameChange = (n) => {
        nameInput = n;
    };

    const toggleNameInputVisibility = () => {
        setIsNameInputVisible(!isNameInputVisible);
    };

    const addName = () => {
        setName(nameInput);
        toggleNameInputVisibility();
    };

    return (
        <div>
            <Books color="#be80b7ff" />
            <Conditions />
            <h1>{name} שלום</h1>
            {isNameInputVisible && (
                <>
                    <input type="text" placeholder='הכנס שם'
                        onChange={event => handleNameChange(event.target.value)}
                    />
                    <button onClick={addName}>keeping</button>
                </>
            )}
            <button onClick={toggleWriterVisibility}>
                {showWriter ? 'להסתרת הסופרים' : 'להצגת הסופרים'}
            </button>
            <button onClick={toggleBooksVisibility}>
                {showBooks ? 'להסתרת הספרים' : 'להצגת הספרים'}
            </button>
         
            {showBooks&& <ListJewishBooks />}
            {showWriter&&<Writer />}
            
        </div>
    );
}

export default App;