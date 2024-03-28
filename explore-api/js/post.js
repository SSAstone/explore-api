function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
};

function displayPost(posts) {
    const postCon = document.getElementById('post-con');
    for(const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>User - ${post.userId}</h4>
            <h5>post: ${post.title}</h5>
            <p>post description: ${post.body}</p> 
        `;
        postCon.appendChild(div);

    }
    // console.log(post);
};

loadPost();

