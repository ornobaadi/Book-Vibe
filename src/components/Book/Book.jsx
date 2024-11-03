import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { rating, bookId, image, bookName, author, tags, category, totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className='bg-blue-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-44'
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-2 justify-center'>
                        {
                            tags.map((tag, index) => <button
                            key={index}
                            className="bg-green-200 text-green-900 btn btn-xs">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-lg'>By: {author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{totalPages} Pages</div>
                        <div>{rating}</div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;