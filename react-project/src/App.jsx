
import React, { useState } from 'react';
import { Books } from './libary/Books';
import { Conditions } from './libary/Conditions'; // Ensure this component is defined correctly
import { ListJewishBooks } from './libary/listjewishBooks';
import './App.css';
import { Writer } from './libary/writer';

function App() {
    const [showWriter, setshowWriter] = useState(false)
    const showWriterclick = () => {
        setshowWriter(!showWriter);
    }
    const [showbooks, setshowBooks] = useState(false)
    const showBooksclick = () => {
        setshowBooks(!showbooks);
    }
    let temp = '';
    // const [temp, addset] = useState('')
    // const addSet = (n) => {
    //     addset(n);
    // }
    const [name, addName] = useState('')
    const name1 = (n) => {
        temp = n;
    }
    const [namevalu, addnamevalue] = useState(true);
    const ChangenameValue = () => {
        addnamevalue(!namevalu);
    }
    const addname = () => {
        addName(temp);
        ChangenameValue();

    }

    return (
        <div>

            <Books color="#5656be" />
            <Conditions />
            <h1 > {name} שלום</h1>
            {namevalu ? <input type="text" placeholder='הכנס שם' onChange={event => name1(event.target.value)} /> : ''}
            {namevalu ? <button onClick={addname}>keeping</button> : ''}
            <button onClick={showWriterclick}>{showWriter ? 'להסתרת הסופרים' : 'להצגת הסופרים'}</button>
            <button onClick={showBooksclick} >{showbooks ? 'להסתרת הספרים' : 'להצגת הספרים'} </button>
            {showbooks ? <ListJewishBooks /> : ''}

            {showWriter ? < Writer /> : ''}


        </div>
    );
}

export default App;