function numberOfBooksRead(library) {
  // Check if the library object is defined and has a books property
  if (library && library.books) {
    // Use the filter function to get an array of books with readingStatus true
    const readBooks = library.books.filter(book => book.readingStatus === true);

    // Return the count of read books
    return readBooks.length;
  } else {
    // Return 0 if the library object or books property is missing
    return 0;
  }
}

// Example usage:
const library = {
  books: [
    { author: 'Author1', title: 'Book1', readingStatus: true },
    { author: 'Author2', title: 'Book2', readingStatus: false },
    { author: 'Author3', title: 'Book3', readingStatus: true }
    // Add more books as needed
  ]
};

const result = numberOfBooksRead(library);
console.log(result); // Output: 2
