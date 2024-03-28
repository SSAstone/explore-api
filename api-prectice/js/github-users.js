const loadGit = async() => {
    try {
        const res = await fetch('https://api.github.com/users?per_page=10');
        const data = await res.json();
        displayGit(data);
    }
    catch(error) {
        console.log(error);
    }
};
loadGit();

const displayGit = (data) => {
    const githubUsers = document.getElementById('github-users');
    data.forEach(u => {
        console.log(u);
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${u.type}</p>
            <h1>${u.login}</h1>
            <img src="${u.avatar_url}" alt="">
            <h1>followers</h1>
            <img src="${u.followers_url}" alt="">
            <img src="${u.following_url}" alt="">
        `;
        githubUsers.appendChild(div);
    })
};