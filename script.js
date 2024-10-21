let bookList = [
    { title: "1984", author: "George Orwell", status: "Completed" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", status: "Want to Read" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Reading" }
];

window.onload = function() {
    loadBooks();
};

function loadBooks() {
    const bookListContainer = document.getElementById("book-list");
    bookListContainer.innerHTML = "";

    for (let i = 0; i < bookList.length; i++) {
        const book = bookList[i];
        bookListContainer.innerHTML += `
            <li class='book-item'>
                <div>
                    <strong>Title:</strong> ${book.title} <br>
                    <strong>Author:</strong> ${book.author} <br>
                    <strong>Status:</strong> ${book.status}
                </div>
                <button onclick="removeBook(${i})">Remove</button>
            </li>`;
    }
}

function addBook() {
    const titleInput = document.getElementById("book-title").value.trim();
    const authorInput = document.getElementById("book-author").value.trim();
    const statusInput = document.getElementById("book-status").value;

    if (titleInput === "" || authorInput === "") {
        alert("Please fill in all fields.");
        return;
    }

    bookList.push({ title: titleInput, author: authorInput, status: statusInput });

    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-status").value = "Want to Read";

    loadBooks();
}

function removeBook(index) {
    bookList.splice(index, 1);
    loadBooks();
}
