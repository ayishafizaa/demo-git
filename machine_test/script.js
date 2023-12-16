const to_post = document.getElementById('topost');
const to_post1 = document.getElementById('topost1');
const topost_title = document.getElementById('topost_title');
const topost_author = document.getElementById('topost_author');
const topost_date = document.getElementById('topost_date');
const clrbtn = document.getElementById('clrbtn');
const sharebtn = document.getElementById('sharebtn');
const post_cont = document.getElementById('posts-container');
const saveChanges = document.getElementById('savechanges');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

function clearInputText() {
    document.getElementById('topost').value = "";
    document.getElementById('topost_date').value = "";
    document.getElementById('topost_title').value = "";
    document.getElementById('topost_author').value = "";
}

function sharePost() {
    const title = document.getElementById('topost_title').value.trim();
    const post = to_post.value.trim();
    const author = document.getElementById('topost_author').value.trim();
    const date = document.getElementById('topost_date').value;

    if (post !== '') {
        const newPost = { title, post, author, date };
        posts.push(newPost);
        clearInputText();
        updatePost();
    }
}

function updatePost() {
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
}

saveChanges.addEventListener('click', function () {
    if (editIndex !== -1) {
        const editedPost = {
            title: document.getElementById('topost_title1').value.trim(),
            post: to_post1.value.trim(),
            author: document.getElementById('topost_author1').value.trim(),
            date: document.getElementById('topost_date1').value
        };

        posts[editIndex] = editedPost;
        updatePost();
        editIndex = -1;
    }
});
function deleted(index) {
    posts.splice(index, 1);
    updatePost();
}

let editIndex = -1;

function displayPosts() {
    post_cont.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        const { title, post, author, date } = posts[i];

        const postContainer = document.createElement('div');
        postContainer.setAttribute('class', 'post');

        postContainer.addEventListener('dblclick', function () {
            viewPost(posts[i]);
        });

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const postElement = document.createElement('p');
        postElement.textContent = post;

        const authorElement = document.createElement('p');
        authorElement.setAttribute('class','author');
        authorElement.innerHTML = '<span>Author:</span> ' + author;

        const dateElement = document.createElement('p');
        dateElement.setAttribute('class','author');
        dateElement.innerHTML = '<span>Date: </span>' + date;

        const buttonContainer = document.createElement('div');

        const editbtn = document.createElement('button');
        editbtn.innerHTML = 'Edit';
        editbtn.setAttribute('class', 'editbtn');
        editbtn.setAttribute('data-bs-toggle', 'modal');
        editbtn.setAttribute('data-bs-target', '#exampleModal');
        editbtn.addEventListener('click', function (event) {
            editIndex = i;
            const { title, post, author, date } = posts[i];
            to_post1.value = post;
            document.getElementById('topost_title1').value = title;
            document.getElementById('topost_author1').value = author;
            document.getElementById('topost_date1').value = date;
        });


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('class', 'dltbtn');
        deleteBtn.addEventListener('click', function () {
            deleted(i);
        });

        buttonContainer.appendChild(editbtn);
        buttonContainer.appendChild(deleteBtn);

        postContainer.appendChild(titleElement);
        postContainer.appendChild(postElement);
        postContainer.appendChild(authorElement);
        postContainer.appendChild(dateElement);
        postContainer.appendChild(buttonContainer);

        post_cont.appendChild(postContainer);
    }
}
function viewPost(post) {
    const url = 'viewpost.html' +
        '?title=' + encodeURIComponent(post.title) +
        '&post=' + encodeURIComponent(post.post) +
        '&author=' + encodeURIComponent(post.author) +
        '&date=' + encodeURIComponent(post.date);

    window.open(url, '_blank');
}
function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentPosts');
    window.location.href = 'login.html';
}
updatePost();