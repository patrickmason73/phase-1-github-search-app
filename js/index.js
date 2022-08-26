document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#github-form').addEventListener('submit', function(event) {
        event.preventDefault()
        let formInput = event.target.search.value;
        fetch(`https://api.github.com/search/users?q=${formInput}`)
        .then(res => res.json())
        .then(data => (renderUsers(data)))
    })
function renderUsers (data) {
    for (i = 0; i < data.items.length; i++) {
        let user = document.createElement('h2')
        user.textContent = `User ${i + 1} info`
        let userInfo = document.createElement('p')
        let userName = document.createElement('li')
        userName.textContent = data.items[i].login
        userName.setAttribute('id', 'userName')
        let userPic = document.createElement('img');
        userPic.setAttribute('src', data.items[i].avatar_url)
        let userLink = document.createElement('li');
        userLink.textContent = data.items[i].url;
        userLink.style.fontSize = 'medium'
        document.querySelector('#user-list').appendChild(user);
        user.appendChild(userInfo)
        userInfo.appendChild(userName)
        userInfo.appendChild(userPic);
        userInfo.appendChild(userLink);
    }
}
})