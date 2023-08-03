function attachEvents() {
    document.querySelector('#refresh').addEventListener('click', loadMessages)
    document.querySelector('#submit').addEventListener('click', postMessage)
}

async function loadMessages(){
    const messages = await(await fetch("http://localhost:3030/jsonstore/messenger")).json()

    const msgBox = document.querySelector('#messages')
    msgBox.textContent = ""

    Object.values(messages).forEach(message => {
        msgBox.textContent+=`${message.author}: ${message.content}\n`
    })
    msgBox.textContent = msgBox.textContent.trim()
}

async function postMessage(){
    const author = document.querySelector('input[name="author"]').value;
    const content = document.querySelector('input[name="content"]').value;

    const resporne = await fetch("http://localhost:3030/jsonstore/messenger", {
        method: "POST",
        body: JSON.stringify({author, content})
    })
}

attachEvents();