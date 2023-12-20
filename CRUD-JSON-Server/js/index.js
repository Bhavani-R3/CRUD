let usersList = document.querySelector('#usersList');

function readUser() {
    fetch(`http://localhost:3000/users`)
    .then(res => res.json())
    .then(res => {
        print(res)
    }).catch(err => console.log(err))
}

function print(users) {
    users.forEach(item => {
        usersList.innerHTML += `<tr>
                                   <td>${item.id}</td>
                                   <td>${item.name}</td>
                                   <td>${item.email}</td>
                                   <td>${item.mobile}</td>
                                   <td>
                                       <a href="update.html?id=${item.id}" class="btn btn-success">Edit</a>
                                       <a class="btn btn-danger">Delete</a>
                                   </td>
                                </tr>`;
    });
}