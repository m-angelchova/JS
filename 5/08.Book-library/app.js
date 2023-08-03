const table = document.querySelector("tbody")

function attachEvents() {
  document.querySelector('#loadBooks').addEventListener('click', loadBooks)
  document.querySelector('#form button').addEventListener('click', handleBookSubmission)

}

async function loadBooks(){
  const books = await(await fetch('http://localhost:3030/jsonstore/collections/books')).json();
  table.innerHTML = ""
  console.log(books)
  Object.entries(books).forEach(createAndAppendBook)
}


function createAndAppendBook([id, book]){
  const bookRow = document.createElement('tr')
  const titleCol = document.createElement('td')
  const authorCol = document.createElement('td')
  const actionCol = document.createElement('td')
  const editButton = document.createElement('button')
  const deleteButton = document.createElement('button')

  titleCol.textContent = book.title
  authorCol.textContent = book.author
  editButton.textContent = 'Edit'
  deleteButton.textContent = 'Delete'

  editButton.setAttribute("data-bookid", id)
  deleteButton.setAttribute("data-bookid", id)

  editButton.addEventListener('click', fillEditForm)
  deleteButton.addEventListener('click', deleteBook)

  actionCol.appendChild(editButton)
  actionCol.appendChild(deleteButton)

  bookRow.appendChild(titleCol)
  bookRow.appendChild(authorCol)
  bookRow.appendChild(actionCol)
  

  table.appendChild(bookRow)
}


async function submitBook(){
  const author =  document.querySelector('#form input[name="author"]').value
  const title =  document.querySelector('#form input[name="title"]').value

  if(!title || !author){
    return;
  }

  fetch('http://localhost:3030/jsonstore/collections/books', {
    method: "POST",
    body: JSON.stringify({title, author})
  })

  switchToSubmit();
}

function fillEditForm(e){
  document.querySelector('h3').textContent = "Edit FORM"

  const title = e.currentTarget.parentElement.parentElement.querySelector('td:first-child').textContent
  const author = e.currentTarget.parentElement.parentElement.querySelector('td:nth-child(2)').textContent

  document.querySelector('#form input[name="author"]').value = author
  document.querySelector('#form input[name="title"]').value = title
  document.querySelector('#form button').setAttribute('data-bookid', e.currentTarget.dataset.bookid)
}

function switchToSubmit(){
  document.querySelector('h3').textContent = "FORM"
  document.querySelector('#form input[name="author"]').value = ''
  document.querySelector('#form input[name="title"]').value = ''

  loadBooks();
}


function handleBookSubmission(e){
  const isEditing = document.querySelector('h3').textContent.includes('Edit')
  
  isEditing ? updateBook(e) : submitBook(e)
}

async function updateBook(e){
  const id = e.currentTarget.dataset.bookid
  const author =  document.querySelector('#form input[name="author"]').value
  const title =  document.querySelector('#form input[name="title"]').value

  fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
    method: "PUT",
    body: JSON.stringify({title, author})
  })

  switchToSubmit();
}

async function deleteBook(e){
  const id = e.currentTarget.dataset.bookid

  fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
    method: "DELETE",
  })

  loadBooks();
}

attachEvents();