// Tableau pour stocker les livres
let books = [];

// Fonction pour afficher les livres dans la table
function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  
  books.forEach((book, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${book.status}</td>
      <td>
        <button class="edit" onclick="toggleStatus(${index})">Changer statut</button>
        <button class="delete" onclick="deleteBook(${index})">Supprimer</button>
      </td>
    `;
    bookList.appendChild(row);
  });
}

// Fonction pour ajouter un livre
document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const status = document.getElementById('status').value;
  
  const newBook = { title, author, year, status };
  books.push(newBook);
  
  displayBooks();
  this.reset();
});

// Fonction pour changer le statut d'un livre
function toggleStatus(index) {
  books[index].status = books[index].status === 'Lu' ? 'Non lu' : 'Lu';
  displayBooks();
}

// Fonction pour supprimer un livre
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// Afficher les livres au chargement initial
displayBooks();