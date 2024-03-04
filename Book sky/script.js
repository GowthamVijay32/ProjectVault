// book-title-input,book-author-input,book-description-input

const popupoverlay = document.querySelector(".popup-overlay");
const popupbox = document.querySelector(".popup-box");
const addbutton = document.querySelector(".add-button");
const cancelPopup = document.getElementById("cancel-popup");

// form elements
const container = document.querySelector(".container");
const addbook = document.getElementById("add-book");
const booktitleinput = document.querySelector("#book-title-input");
const bookauthorinput = document.querySelector("#book-author-input");
const bookdescriptioninput = document.querySelector("#book-description-input");

addbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

cancelPopup.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

addbook.addEventListener("click", function (e) {
  e.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
  <h5>${bookauthorinput.value}</h5>
  <p>${bookdescriptioninput.value}</p>
  <button onclick="deletebook(this)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function deletebook(e) {
  e.parentElement.remove();
}
