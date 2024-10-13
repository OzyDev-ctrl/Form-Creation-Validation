document.addEventListener('DOMContentLoaded', function () {
  fetchUserData();
});

async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
      const response = await fetch(apiUrl);
      const users = await response.json();

      dataContainer.innerHTML = ''; // Clear loading message

      const userList = document.createElement('ul');

      users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name; // Set the text content to the user's name
          userList.appendChild(listItem); // Append the <li> to the userList
      });

      dataContainer.appendChild(userList); // Append userList to dataContainer
  } catch (error) {
      dataContainer.innerHTML = ''; // Clear existing content
      dataContainer.textContent = 'Failed to load user data.'; // Display error message
  }
}
