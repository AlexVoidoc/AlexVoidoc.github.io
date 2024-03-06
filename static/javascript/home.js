
// Event listener for scroll animations
window.addEventListener('scroll', function() {
    // Get all elements with animated element tag
    var elements = document.querySelectorAll('.animated-element');

    // Scroll through all elements
    for (let i = 0; i < elements.length; i++) {

        let element = elements[i];
        let position = element.getBoundingClientRect();

        // check if element is visible in viewport
        if(position.top >= 0 && position.bottom <= window.innerHeight + 100) {
            element.classList.add('in-view');
        }
        else {
            element.classList.remove('in-view');
        }

    }
});