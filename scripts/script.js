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
    this.version = "";

    this.getCard = function() {
        if (this.isEmpty()) return false;

        return this.bookCard;
    }
    
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

    this.setVersion = function(newVersion) {
        if (isNaN(newVersion)) return false;

        this.version = newVersion;
        return true;
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
        console.log(library.size);
        return library.size;
    }

    this.getBook = function(id) {
        return library.get(id);
    }

    this.insertBook = function(book) {
        if (book.isEmpty()) return false;

        let id = library.size + 1;
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

// <div class="card">
//     <div class="id">1</div>
//     <div class="img-container">
//         <img src="../images/clipart1853715.png" alt="question mark">
//     </div>
                    
//     <div class="book-information">
//         <div class="book-title">Lorem, ipsum dolor.</div>
//         <div class="author">Lorem, ipsum.</div>
//         <div class="pages">Pages 100</div>
//     </div>

//     <div class="card-btns">
//         <div class="edit-card card-btn"><img src="../images/circle-edit-outline.svg" alt=""></div>
//         <div class="more-information card-btn"><img src="../images/information-outline.svg" alt=""></div>
//     </div>
// </div>


function createCard(cardNumber, newBook) {
    if (newBook.isEmpty()) return false;

    let card = document.createElement("div");
    card.classList.add("card");

    // Id

    let id = document.createElement("div");
    id.classList.add("id");
    id.textContent = cardNumber;

    card.append(id);

    // book image

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");

    let img = document.createElement("img");
    img.src = "../images/clipart1853715.png";

    imageContainer.append(img);

    card.append(imageContainer);

    // book information 

    let bookInformation = document.createElement("div");
    bookInformation.classList.add("book-information");

    let title = document.createElement("div");
    title.classList.add("book-title");
    title.textContent = newBook.getTitle();

    let author = document.createElement("div");
    author.classList.add("author");
    author.textContent = newBook.getAuthor();

    let pages = document.createElement("div");
    pages.classList.add("pages");
    pages.textContent = newBook.getPages();

    bookInformation.append(title);
    bookInformation.append(author);
    bookInformation.append(pages);

    card.append(bookInformation);

    // card buttons

    let cardButtons = document.createElement("div");
    cardButtons.classList.add("card-btns");

    let editButton = document.createElement("div");
    editButton.classList.add("edit-card");
    editButton.classList.add("card-btn");

    let editImage = document.createElement("img");
    editImage.src = "../images/circle-edit-outline.svg"

    editButton.append(editImage);

    let moreButton = document.createElement("div");
    moreButton.classList.add("more-information");
    moreButton.classList.add("card-btn");

    let moreImage = document.createElement("img");
    moreImage.src = "../images/information-outline.svg";

    moreButton.append(moreImage);

    cardButtons.append(editButton);
    cardButtons.append(moreButton);

    card.append(cardButtons);

    return card;
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

    if(library.insertBook(book)) {
        let card = createCard(library.size(), library.getBook(library.size()));
        document.querySelector(".library-display").append(card);
    }



});


