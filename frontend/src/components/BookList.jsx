import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = ({ onEdit, onDelete, refreshTrigger }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [refreshTrigger]);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div className="book-list">
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Published Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.category}</td>
                            <td>{book.publishedYear}</td>
                            <td>
                                <button onClick={() => onEdit(book)}>Edit</button>
                                <button onClick={() => onDelete(book._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookList; 