import React, { useEffect, useState } from 'react';
import { JewishBooks } from './jewishBooks';
import { getBook, addNewBook } from '../data/jewishBooks'

export const ListJewishBooks = () => {
    const [Books, setbook] = useState([]);
    useEffect(() => {
        getBook().then((data) => {
            setbook(data);
        });
    }, []);
    const addBook = (event) => {
        event.preventDefault();
        const newbook = {
            title: event.target.title.value,
            NumberOfQuestions: 0,
            publicationDate: event.target.publicationDate.value,
            availableForBorrowing: true,
            writer: event.target.writer.value,
        }
        event.target.reset();
        addNewBook(newbook).then(data => {
            setbook(data);
        })

    }
    return (
        <>
            <h2>All Books</h2>
            <ul>
                {Books.map(b => (
                    <JewishBooks key={b.title} jewishBooks={b} />
                ))}
            </ul>
            <form onSubmit={addBook}>
                <h3>להוספת ספר חדש</h3>
                <li>title:</li>
                <input type="text" name="title" placeholder='title' /> <br />
                <li>publicationDate:</li>
                <input type="date" name='publicationDate' placeholder='publicationDate' /> <br />
                <li>writer:</li>
                <input type="text" name='writer' placeholder='writer' /><br />
                <br />
                <button> add new Book </button>
            </form>
        </>
    );
};
