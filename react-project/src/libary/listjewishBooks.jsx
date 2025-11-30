import React, { useEffect, useState } from 'react';
import { getBook } from '../data/jewishBooks';
import { JewishBooks } from './jewishBooks';

export const ListJewishBooks = () => {
    const [Books, setbook] = useState([]);

    useEffect(() => {
        getBook().then((data) => {
            setbook(data);
        });
    }, []);

    return (
        <>
            <h2>All Books</h2>
            <ul>
                {Books.map(b => (
                    <JewishBooks key={b.title} jewishBooks={b} />
                ))}
            </ul>
        </>
    );
};
