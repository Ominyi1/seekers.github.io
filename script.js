function toggleRotation() {
    const image = document.getElementById('rotating-image');
    image.classList.toggle('rotate');
}

// Optional: Automatically start the rotation when the page loads
window.onload = function() {
    toggleRotation();
};

