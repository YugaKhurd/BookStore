import React, { useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [refreshList, setRefreshList] = useState(false);

    const handleAddBook = async (bookData) => {
        try {
            await axios.post('http://localhost:5000/api/books', bookData);
            setSelectedBook(null);
            setRefreshList(prev => !prev);
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleUpdateBook = async (bookData) => {
        try {
            await axios.put(`http://localhost:5000/api/books/${selectedBook._id}`, bookData);
            setSelectedBook(null);
            setRefreshList(prev => !prev);
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const handleDeleteBook = async (bookId) => {
        try {
            await axios.delete(`http://localhost:5000/api/books/${bookId}`);
            setRefreshList(prev => !prev);
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <div className="app">
            <h1>Book Directory</h1>
            <BookForm
                book={selectedBook}
                onSubmit={selectedBook ? handleUpdateBook : handleAddBook}
            />
            <BookList
                onEdit={setSelectedBook}
                onDelete={handleDeleteBook}
                refreshTrigger={refreshList}
            />
        </div>
    );
};

export default App; 