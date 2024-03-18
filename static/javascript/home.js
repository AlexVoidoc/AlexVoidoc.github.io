
// Event listener for scroll animations
window.addEventListener('scroll', function() {
    // Get all elements with animated element tag
    var elements = document.querySelectorAll('.animated-element');

    // Scroll through all elements
    for (let i = 0; i < elements.length; i++) {

        // Get element
        let element = elements[i];
        let position = element.getBoundingClientRect();

        // check if element is visible in viewport
        if(position.top >= 100 && position.bottom <= window.innerHeight + 100) {
            element.classList.add('in-view');
        }

    }
});

// Event listener for switching active section of website
window.addEventListener('scroll', function() {
    // Navigation sections
    var sections = ['about-text', 'skills', 'education-section', 'projects-section']
    let sectionNavMap = {
        'about-text': '.home-nav',
        'skills': '.skills-nav',
        'education-section': '.education-nav',
        'projects-section': '.projects-nav'
    }

    // Scroll through each navigation section
    for (let i = 0; i < sections.length; i++) {
        // Get section
        let section = document.getElementById(sections[i]);
        let position = section.getBoundingClientRect();

        // Check if section is visible
        if(position.top >= 0 && position.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {

            // Remove current navigation active id
            document.getElementById('navigation-active').removeAttribute('id');

            // Add new active navigation id
            document.querySelector(sectionNavMap[sections[i]]).setAttribute('id', 'navigation-active');

            // Break as only one may be active at a time
            break;
        }
    }
});