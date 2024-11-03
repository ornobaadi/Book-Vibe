import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishlist  } from '../../utility/addToDb';

const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId)

    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    // console.log(book);

    const {bookId: currentBookId, image} = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }
    const handleAddToWishlist = () => {
        addToStoredWishlist(id);
    }


    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-52' src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} class="btn mr-4 btn-outline btn-accent">Mark as Read</button>
            <button onClick={() => handleAddToWishlist(bookId)} class="btn btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;