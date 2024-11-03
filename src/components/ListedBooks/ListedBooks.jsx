import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);

    }, []);

    const handleSort = sortType => {
        setSort(sortType);

        if(sortType === 'Number of pages'){
            const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages)
            setReadList(sortedReadList);
        }

        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating)
            setReadList(sortedReadList);
        }


    }


    const [wishList, setWishList] = useState([])

    useEffect(() => {
        const storedWishList = getStoredWishlist();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedWishList, storedWishListInt, allBooks);

        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId))

        setWishList(wishBookList);

    }, [])



    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort By'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
                    <li onClick={() => handleSort('Number of pages')}><a>Number of pages</a></li>
                </ul>
            </div>


            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I've read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }

                </TabPanel>

                <TabPanel>
                    <h2 className='text-2xl'>My wish list: {wishList.length}</h2>
                    {
                        wishList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;