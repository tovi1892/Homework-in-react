
import React from 'react';

export const JewishBooks = (props) => {
    const { jewishBooks } = props;
    return (
        <li>
            <div className="jewishBooks">
                <h3>{jewishBooks.title}</h3>
                <p>{jewishBooks.NumberOfQuestions}</p>
                <p>{jewishBooks.publicationDate}</p>
                 <p>{jewishBooks.writer}</p>
                <p>{jewishBooks.availableForBorrowing ? 'Available' : 'Not available'}</p>
            </div>
        </li>
    );
};