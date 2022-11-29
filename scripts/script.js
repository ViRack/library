// OBJECT CONSTRUCTORS AND LIBRARY INITIALIZATION ------------------------

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
        console.log("in isEmpty");
        if (this.title === "" || this.author === "") return true;

        return false;

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

    this.isIDIn = function(id) {
        if (library.size === 0) return false;

        if (library.has(id)) {
            console.log(id + " is in~");
            return true;
        }

        return false;
    }

}

let library = new Library();

// POPUPS -----------------------------------------

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

function resetPopup() {
    document.getElementById("title").value = "";
    document.getElementById("author").value= "";
    document.getElementById("pages").value = "";

}

// CARD ----------------------------------------------

function createCard(cardNumber, newBook) {
    if (newBook.isEmpty()) {
        console.log("book is empty");
        return false;
    }

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
    pages.textContent = "Pages: " + newBook.getPages();

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

    let trashButton = document.createElement("div");
    trashButton.classList.add("trash-card");
    trashButton.classList.add("card-btn");
    addTrashFunctionality(trashButton, cardNumber)

    let trashImage = document.createElement("img");
    trashImage.src = "../images/trash-can-outline.svg";
    
    trashButton.append(trashImage);


    let moreButton = document.createElement("div");
    moreButton.classList.add("more-information");
    moreButton.classList.add("card-btn");

    let moreImage = document.createElement("img");
    moreImage.src = "../images/information-outline.svg";

    moreButton.append(moreImage);

    cardButtons.append(editButton);
    cardButtons.append(trashButton);
    cardButtons.append(moreButton);

    card.append(cardButtons);

    return card;
}

// BUTTONS -----------------------------------------

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
        popup.classList.remove("toggle-popup");
        resetPopup();
    }
});

const editButton = document.querySelector(".edit-card");
const moreInfoButton = document.querySelector(".more-information");

const moreInfoPopup = document.querySelector(".more-information-popup");

moreInfoButton.addEventListener("click", () => {
    console.log("moreInfo");
    moreInfoPopup.classList.toggle(".toggle-popup");
    //     popup.classList.toggle("toggle-popup")

});

const trashButton = document.querySelector(".trash-card");
trashButton.addEventListener("click", () => {
    
    let parentElement = trashButton.parentElement;
    let idString = parentElement.querySelector(".id");
    let idNumber = Number.parseInt(idString);
    console.log(idNumber);

});

function addTrashFunctionality(button, idNum) {
    button.addEventListener("click", () => {
        if(library.isIDIn(idNum)) {
            let card = button.parentElement;
            let libraryView = card.parentElement;
            libraryView.remove(card);

            library.removeBook(idNum);
        }
    });
}
