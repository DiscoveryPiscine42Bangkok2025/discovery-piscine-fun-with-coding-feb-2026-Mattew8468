const btn = document.getElementById('colorBtn');

btn.addEventListener('click', function() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Apply it to the body background
    document.body.style.backgroundColor = randomColor;
});