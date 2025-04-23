import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookForm = ({ book, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: '',
        publishedYear: ''
    });

    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title,
                author: book.author,
                category: book.category,
                publishedYear: book.publishedYear
            });
        }
    }, [book]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="book-form">
            <h2>{book ? 'Edit Book' : 'Add New Book'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Published Year:</label>
                    <input
                        type="number"
                        name="publishedYear"
                        value={formData.publishedYear}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{book ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default BookForm; 