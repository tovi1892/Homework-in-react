
import React from 'react';
import { getBook } from '../data/jewishBooks';
import { JewishBooks } from './jewishBooks';

export const ListJewishBooks = () => {
    const jewishBooks = getBook();
    return (
        <>
            
            <h2>All Books</h2>
            <ul>
                {jewishBooks.map(b => (
                    <JewishBooks key={b.title} jewishBooks={b} />
                ))}
            </ul>
        </>
    );
};