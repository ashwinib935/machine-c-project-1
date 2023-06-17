import React, { createContext, useContext, useState } from "react";
const allBooks = [
  {
    _id: "1",
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image:
      "https://literatureglobe.com/wp-content/uploads/2020/10/Rich-Dad-Poor-Dad-Front-min-e1601808025506.jpg",
    category: "Read",
  },
  {
    _id: "2",
    name: "The 5 AM Club",
    author: "Robin Sharma",
    image:
      "https://5.imimg.com/data5/XE/DD/AO/SELLER-19351533/the-5-am-club-own-your-morning-elevate-your-life-robin-sharma-250x250.jpg",
    category: "Read",
  },
  {
    _id: "3",
    name: "Subtle Art of Not...",
    author: "Mark Manson",
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707._UY400_SS400_.jpg",
    category: "Read",
  },
  {
    _id: "4",
    name: "Sherlock Holmes",
    author: "Sir Arthur Conan Doyle",
    image:
      "https://m.media-amazon.com/images/I/415FBJlfUfL._SX331_BO1,204,203,200_.jpg",
    category: "Want to Read",
  },
  {
    _id: "5",
    name: "Diary of a Wimpy Kid",
    author: "Jeff Kinney",
    image:
      "https://m.media-amazon.com/images/I/51T6mDOH41L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Want to Read",
  },
  {
    _id: "6",
    name: "The Girl Who Drank the Moon",
    author: "Kelly Barnhill",
    image:
      "https://m.media-amazon.com/images/I/51CmZgnxeXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Want to Read",
  },
  {
    _id: "7",
    name: "The Blue Umbrella",
    author: "Ruskin Bond",
    image:
      "https://m.media-amazon.com/images/I/51TGU8igF-L._SX310_BO1,204,203,200_.jpg",
    category: "Currently Reading",
  },
  {
    _id: "8",
    name: "The Four Agrements",
    author: "Don Miguel Ruiz",
    image:
      "https://m.media-amazon.com/images/I/51EA+bXwJsL._SY344_BO1,204,203,200_.jpg",
    category: "Currently Reading",
  },
  {
    _id: "9",
    name: "The Art Of War",
    author: "Sun Tzu",
    image:
      "https://m.media-amazon.com/images/I/31Ym1oKlpLL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "Currently Reading",
  },
  {
    _id: "10",
    name: "Think and Grow Rich",
    author: "Napoleon Hill",
    image:
      "https://m.media-amazon.com/images/I/51ugqPxmyrL._SX332_BO1,204,203,200_.jpg",
    category: "None",
  },
  {
    _id: "11",
    name: "Switch",
    author: "Chip Heath",
    image:
      "https://m.media-amazon.com/images/I/41pfm3UZ7ZL._SX346_BO1,204,203,200_.jpg",
    category: "None",
  },
  {
    _id: "12",
    name: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    category: "None",
  },
];
export const BookContext = createContext();
function BookProvider({ children }) {
  const [books, setBooks] = useState(allBooks);
  const handleFilterChoice = (selectedCategory, id) => {
    console.log(selectedCategory, id);
    if (selectedCategory !== "None") {
      const newBooks = books.reduce(
        (acc, curr) =>
          curr._id === id
            ? [...acc, { ...curr, category: selectedCategory }]
            : [...acc, curr],
        []
      );
      setBooks(newBooks);
    } else {
      setBooks(books);
    }
  };
  const handleSearch = (searchName) => {
    const searchedBook = [...books].filter((book) =>
      book.name.toLowerCase().includes(searchName.toLowerCase())
    );
    console.log(searchedBook);
    setBooks(searchedBook);
  };

  return (
    <BookContext.Provider value={{ handleFilterChoice, books, handleSearch }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
export const useBook = () => useContext(BookContext);
