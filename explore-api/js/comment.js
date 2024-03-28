function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
};

function displayComment(comments) {
    const commentList = document.getElementById('comment-list')
    for(const comment of comments) {
        // console.log(comment)
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>comment-${comment.id}</h4>
            <h5>email is ${comment.email}</h5>
            <p>${comment.body}</p>
        `;
        commentList.appendChild(div);
    };
};
loadComment();