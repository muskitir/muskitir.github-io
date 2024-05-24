// Function to toggle visibility of items in a category
function toggleItems(categoryId) {
    var category = document.getElementById(categoryId);
    var itemList = category.querySelector('ul');
    itemList.classList.toggle('show');
}

// Add click event listeners to each category title
document.getElementById('appetizers').querySelector('h2').addEventListener('click', function() {
    toggleItems('appetizers-list');
});

document.getElementById('main-dish').querySelector('h2').addEventListener('click', function() {
    toggleItems('main-dish-list');
});

document.getElementById('desserts').querySelector('h2').addEventListener('click', function() {
    toggleItems('desserts-list');
});
