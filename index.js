

function fetchBooks() {
  const response = new Promise((resolve, reject) => {
    fetch('https://anapioficeandfire.com/api/books')
      .then(response => {
        if (!response.ok) {
          reject(new Error('Network response was not ok'));
        }
        resolve(response.json());
      })
      .catch(error => reject(error));
  });

  response.then(books => {
    renderBooks(books);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


