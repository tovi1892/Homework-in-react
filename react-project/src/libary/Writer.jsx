

import React from "react";
import { getBook } from '../data/jewishBooks';
import { JewishBooks } from './jewishBooks';

export const Writer = () => { 
    const jewishBooks = getBook();
    return (
        
        <>
         <h2>writer list</h2>
            <ul>
                {jewishBooks.map(b => (
                   <p>{b.writer}</p>
                ))}
            </ul>
        </>
    );
};