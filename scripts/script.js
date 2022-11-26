let popupButton = document.querySelector(".btn");
let popup = document.querySelector(".popup");
let closePopupButton = document.querySelector(".close-btn");

popupButton.addEventListener("click",  () => {
    popup.classList.toggle("toggle-popup")
    console.log("clicked");
});

closePopupButton.addEventListener("click", () => {
    popup.classList.remove("toggle-popup");
})

function Book() {
    this.title = "";
    this.author = "";
    this.pages = 0;
    this.genre = "";
    this.publisher = "";
    this.publishDate = "";
    
    this.setTitle = function(newTitle) {
        this.title = newTitle;
    };

    this.setAuthor = function(newAuthor) {
        this.author = newAuthor;
    };

    this.setPages = function(newPages) {
        this.pages = newPages;
    };

    this.setGenre = function(newGenre) {
        this.genre = newGenre
    };

    this.setPublisher = function(newPublisher) {
        this.publisher = newPublisher
    };

    this.setPublishDate = function(newDate) {
        this.publishDate = newDate;
    }

    this.getTitle = function() {
        return this.title;
    };

    this.getAuthor = function() {
        return this.author;
    };

    this.getPages = function() {
        return this.pages;
    };

    this.getPublisher = function() {
        return this.publisher;
    };

    this.getPublishDate = function() {
        return this.setPublishDate;
    };

    this.isEmpty = function() {
        return (this.title === "") && (this.author === "") && (this.pages === 0);
    }
}

function Library() {

    const library = new Map();

    this.size = function() {
        return this.library.size;
    }

    this.getBook = function(id) {
        return this.library.get(id);
    }

    this.insertBook = function(book) {
        if (book.isEmpty()) return false;

        let id = this.library.size + 1;
        library.set(id, book);
        return true;
    }

    this.removeBook = function(id) {
        if (!this.library.has(id)) return false;
        console.log("Book \"" + id + "\" has been deleted");

        library.delete(id);
        return true;
    }
}

let library = new Library();

let addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let book = new Book();
    book.setTitle(title);
    book.setAuthor(author);
    book.setPages(pages)

    library.insertBook(book);
});

