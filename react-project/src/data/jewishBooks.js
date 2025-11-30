
const childrenBooks = [
    {
        title: "The Very Hungry Caterpillar",
        NumberOfQuestions: 10,
        publicationDate: "1/01/1969",
        availableForBorrowing: true,
        writer: "Eric Carle"
    },
    {
        title: "Where the Wild Things Are",
        NumberOfQuestions: 12,
        publicationDate: "1/10/1963",
        availableForBorrowing: false,
        writer: "Maurice Sendak"
    },
    {
        title: "Goodnight Moon",
        NumberOfQuestions: 15,
        publicationDate: "1/09/1947",
        availableForBorrowing: true,
        writer: "Margaret Wise Brown"
    },
    {
        title: "Charlotte's Web",
        NumberOfQuestions: 30,
        publicationDate: "1/10/1952",
        availableForBorrowing: true,
        writer: "E.B. White"
    }
];

// export const getBook  = () => {
//     return childrenBooks;
// }
export const getBook = () => {
    return new Promise((resolve) => {
        resolve(childrenBooks);
    })
}


export const addNewTask = (Books) => {
    childrenBooks.push(Books);
    return Promise.resolve([...childrenBooks]);
}