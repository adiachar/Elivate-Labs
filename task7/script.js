const usersContainer = document.getElementById('users');
const errorDiv = document.getElementById('error');
const reloadBtn = document.getElementById('reloadBtn');

function formatAddress(address) {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
}

function displayUsers(users) {
    usersContainer.innerHTML = '';
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <div class="user-name">${user.name}</div>
            <div class="user-email">${user.email}</div>
            <div class="user-address">${formatAddress(user.address)}</div>
        `;
        usersContainer.appendChild(card);
    });
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function hideError() {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
}

function fetchUsers() {
    hideError();
    usersContainer.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            displayUsers(data);
        })
        .catch(() => {
            showError('Failed to fetch user data. Please try again.');
        });
}

reloadBtn.addEventListener('click', fetchUsers);

fetchUsers();
