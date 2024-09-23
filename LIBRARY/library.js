/*console.log("This is  the college library smaple project made using html ,bootsreatp nad java script")


//1.) constructor
function book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

//display constructor
function display() {}
display.prototype.add = function (Book) {
    console.log("Adding it to UI");
    let tableBody = document.getElementById('tableBody');
    let uistring = `<tr>
                        <td>${Book.name}</td>
                        <td>${Book.author}</td>
                        <td>${Book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uistring;

}

//add mehtods to display prtotype
display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}



//2.) what will happen if someone submit the form ,so lets first give the form an id libraryForm
//add submit event listner to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)//submit pai click hoaga toh the fucntion written  after comma will be called

function libraryFormSubmit(e) {
    console.log("Library form has been submitted");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    //a.) type mai options hai
    //fiction,programming,cooking
    let fiction = document.getElementById('fiction').value;
    let programming = document.getElementById('programming').value;
    let cooking = document.getElementById('cooking').value;
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let Book = new book(name, author, type);
    console.log(Book);



    //b.) but the libraryForm the result will be displaye only ing console which no one opens so lets work on ui
    let Display = new display();
    Display.add(book);
    Display.clear();

    //note the default behaviour of the form is that after you clck the form the instruction run and the page is reloaded ,so lets take care of that 
    e.preventDefault();
}

*/

console.log("This is the college library sample project made using HTML, Bootstrap, and JavaScript");

// 1. Constructor for Book
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display() { }

// Add methods to Display prototype
Display.prototype.add = function (book) {
    console.log("Adding it to UI");
    let tableBody = document.getElementById('tableBody');
    let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uistring;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}



//validation ka fucntion
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;

    }
    else {
        return true;
    }
}


//show walla function
Display.prototype.show = function (type,displayMessage) {
    let messages = document.getElementById('message');
    messages.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;

//ab erase bhi toh karna hai
    setTimeout(function(){
        messages.innerHTML=' '
    },2000);
}


// 2. Add submit event listener to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("Library form has been submitted");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    // Type options: fiction, programming, cooking
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    // Display the book on the UI
    //3.) agar validate function nahi lgya toh asie hi field adds hoti janega empty walli bhi
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','book has been added');
    }
    else {
        //show error to the user
        display.show('danger','book cannot be added');
    }




    // Prevent the default behavior of the form
    e.preventDefault();
}

//to do lis
/* 1.) seach pai click karte hi page reload ho jata hai fix thaht
2.) make it using es6 classes on yur own
3.) add them to local storage
*/