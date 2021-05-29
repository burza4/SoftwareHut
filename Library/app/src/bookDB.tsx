import React from 'react';
import HP from './images/HP.jpg';
import H from './images/Hobbit.jpg';
import L from './images/L.jpg';
import OC from './images/OC.jpg';
import IS from './images/IS.jpg';
import M from './images/M.jpg';

let bookDB = {

    books: [
        {
            id: 0,
            title: 'Harry Potter',
            author: 'J.K. Rowling',
            img: HP,
            score: 1000,
            publicationDate: 1997,
            comments: [
                {
                    id: 0,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 1,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 2,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 3,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 4,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                }

            ]
        },
        {
            id: 1,
            title: 'Hobbit',
            author: 'J.R.R. Tolkien',
            img: H,
            score: 9,
            publicationDate: 1937,
            comments: [
                {
                    id: 0,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 1,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 2,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 3,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                },
                {
                    id: 4,
                    user: 'Paweł Antończyk',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    time: '10-10-2020 15:34',
                }
            ]
        },
        {
        id: 2,
                title: 'Lśnienie',
                author: 'Stephen King',
                img: L,
                score: 7,
                publicationDate: 1977,
                comments: [
                    {
                        id: 0,
                        user: 'Paweł Antończyk',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        time: '10-10-2020 15:34',
                    },
                    {
                        id: 1,
                        user: 'Paweł Antończyk',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        time: '10-10-2020 15:34',
                    },
                    {
                        id: 2,
                        user: 'Paweł Antończyk',
                        content: 'Polecanko',
                        time: '10-10-2020 15:34',
                    },
                    {
                        id: 3,
                        user: 'Paweł Antończyk',
                        content: 'Fajna książka',
                        time: '10-10-2020 15:34',
                    }
                ]
            },
            {
                id: 3,
                title: 'Ojciec Chrzestny',
                author: 'Mario Puzo',
                img: OC,
                score: 100,
                publicationDate: 1969,
                comments: [
                    {
                        id: 0,
                        user: 'Paweł Antończyk',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        time: '10-10-2020 15:34',
                    },
                    {
                        id: 1,
                        user: 'Paweł Antończyk',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        time: '10-10-2020 15:34',
                    },
                    {
                        id: 2,
                        user: 'Paweł Antończyk',
                        content: 'Super',
                        time: '10-10-2020 15:34',
                    }
                ]
            },
            {
                id: 4,
                title: 'Igrzyska Śmierci',
                author: 'Suzanne Collins',
                img: IS,
                score: 6.8,
                publicationDate: 2008,
                comments: [
                    {
                        id: 0,
                        user: 'Paweł Antończyk',
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        time: '10-10-2020 15:34',
                    },
                    {
                        id: 1,
                        user: 'Paweł Antończyk',
                        content: 'Mocne 2/10',
                        time: '10-10-2020 15:34',
                    }
                ]
            },
            {
                    id: 5,
                    title: 'Metro 2033',
                    author: 'Dmitry Glukhovsky',
                    img: M,
                    score: 7.3,
                    publicationDate: 2005,
                    comments: [
                        {
                            id: 0,
                            user: 'Paweł Antończyk',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                            time: '10-10-2020 15:34',
                        },
                        {
                            id: 1,
                            user: 'Paweł Antończyk',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                            time: '10-10-2020 15:34',
                        },
                        {
                            id: 2,
                            user: 'Paweł Antończyk',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                            time: '10-10-2020 15:34',
                        },
                        {
                            id: 3,
                            user: 'Paweł Antończyk',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                            time: '10-10-2020 15:34',
                        }
                    ]
            }        
    ]
}


export default bookDB;