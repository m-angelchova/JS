let posts;

function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', loadPosts)
    document.querySelector('#btnViewPost').addEventListener('click', viewPost)

}

async function loadPosts(){
    const result = await(await fetch('http://localhost:3030/jsonstore/blog/posts')).json();
    posts = result;
    
    const postDropdown = document.querySelector('#posts')

    Object.values(result).forEach(post => {
        const option = document.createElement('option')
        option.value = post.id
        option.textContent = post.title

        postDropdown.appendChild(option)
    });
    
}

async function viewPost(){
    const result = await(await fetch('http://localhost:3030/jsonstore/blog/comments')).json();
    const selectedPost = posts[document.querySelector('#posts').value]

    loadCurrentPost(selectedPost)
    
    const commentsList = document.querySelector("#post-comments")
    commentsList.innerHTML = ""

    Object.values(result)
    .filter((comment) => comment.postId === selectedPost.id)
    .forEach(comment => {
        const listElement = document.createElement('li')
        listElement.textContent = comment.text;

        commentsList.appendChild(listElement)
    })
}


function loadCurrentPost(post){
    document.querySelector('#post-title').textContent = post.title
    document.querySelector('#post-body').textContent = post.body
}


attachEvents();