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
}

let myLibrary = [];

let addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
    console.log("add-book clicked!")
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    console.log(title.textContent);



    console.log(title);

    let book = new Book();
    book.setTitle(title);
    book.setAuthor(author);
    book.setPages(pages)

    myLibrary.push(book);
    console.log(myLibrary);


});
