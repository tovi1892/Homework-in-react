

import React, { useEffect, useState } from 'react';
import { getBook } from '../data/jewishBooks';
import { JewishBooks } from './jewishBooks';

export const Writer = () => {
    const [getWriter, setWriter] = useState([]);
    useEffect(() => {
        getBook().then((data) => {
            setWriter(data);
        });
    }, []);

    return (

        <>
            <h2>writer list</h2>
            <ul>
                {getWriter.map(b => (
                    <p>{b.writer}</p>
                ))}
            </ul>
        </>
    );
};