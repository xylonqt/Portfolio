// Navbar Toggle Functionality
document.getElementById('navbar-toggle').addEventListener('click', function() {
    var menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active');
});
// Filter functionality
const filterButtons = document.querySelectorAll('.filter-buttons button');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Lightbox functionality
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${e.target.src}" alt="${e.target.alt}">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
    // Add form submission code here
});
