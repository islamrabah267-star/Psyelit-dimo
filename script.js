// script.js

// Sample data for DSM-5 disorders
const disorders = [
    { id: 1, name: 'Anxiety Disorders', description: 'Disorders characterized by excessive fear or anxiety.' },
    { id: 2, name: 'Mood Disorders', description: 'Disorders that primarily affect a person’s emotional state.' },
    { id: 3, name: 'Personality Disorders', description: 'Disorders that affect how a person thinks, feels, and behaves.' },
    // Add more disorders as needed...
];

// Function to load disorders
function loadDisorders() {
    const list = document.getElementById('disorder-list');
    list.innerHTML = '';
    disorders.forEach(disorder => {
        const listItem = document.createElement('li');
        listItem.textContent = `${disorder.name}: ${disorder.description}`;
        list.appendChild(listItem);
    });
}

// Function to filter disorders
function filterDisorders() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredDisorders = disorders.filter(disorder => disorder.name.toLowerCase().includes(searchTerm) || disorder.description.toLowerCase().includes(searchTerm));
    const list = document.getElementById('disorder-list');
    list.innerHTML = '';
    filteredDisorders.forEach(disorder => {
        const listItem = document.createElement('li');
        listItem.textContent = `${disorder.name}: ${disorder.description}`;
        list.appendChild(listItem);
    });
}

// Event listeners for searching
document.getElementById('search-input').addEventListener('input', filterDisorders);

// Initial load
loadDisorders();