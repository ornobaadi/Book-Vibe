import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishlist } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(() =>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter( book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);

    }, [])


    const [wishList, setWishList] = useState([])

    useEffect(() =>{
        const storedWishList = getStoredWishlist();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedWishList, storedWishListInt, allBooks);

        const wishBookList = allBooks.filter( book => storedWishListInt.includes(book.bookId))

        setWishList(wishBookList);

    }, [])



    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
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