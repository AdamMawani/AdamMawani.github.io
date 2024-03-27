document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learn-more-btn');
    var experienceSection = document.getElementById('experience');
    var navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav bar

    learnMoreBtn.addEventListener('click', function() {
        var scrollToPosition = experienceSection.offsetTop - navHeight; // Subtract the nav bar height from the scroll offset
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            link.classList.add('hovered');
        });

        link.addEventListener('mouseout', function() {
            link.classList.remove('hovered');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learn-more-btn');
    var experienceSection = document.getElementById('experience');
    var navHeight = document.querySelector('nav').offsetHeight; // Get the height of the nav bar

    learnMoreBtn.addEventListener('click', function() {
        var scrollToPosition = experienceSection.offsetTop - navHeight; // Subtract the nav bar height from the scroll offset
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    });

    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            var targetId = link.getAttribute('href').substring(1); // Get target section id
            var targetSection = document.getElementById(targetId); // Get target section
            var scrollToPosition = targetSection.offsetTop - navHeight; // Subtract the nav bar height from the scroll offset
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' }); // Smooth scroll to the target section
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;

    var isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    darkModeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', null);
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var sections = document.querySelectorAll('section');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Toggle dark mode for each section
        sections.forEach(function(section) {
            section.classList.toggle('dark-mode');
        });
    });
});

document.querySelectorAll('.progress-bar').forEach(function(bar) {
    bar.addEventListener('mouseleave', function() {
        this.querySelector('.progress-overlay').style.display = 'none';
    });
});

// JavaScript to set default light mode
document.body.classList.remove('dark-mode');

// JavaScript to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to detect user preference for dark mode (optional)
function detectDarkModePreference() {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

detectDarkModePreference();

const darkModeButton = document.getElementById('dark-mode-button');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all project elements
    const projects = document.querySelectorAll('.project');

    // Attach click event listener to each project
    projects.forEach(project => {
        project.addEventListener('click', () => {
            const title = project.getAttribute('data-title');
            const competition = project.getAttribute('data-competition');
            const skills = project.getAttribute('data-skills');
            const description = project.getAttribute('data-description');
            
            // Create modal content
            const modalContent = `
                <div class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2>${title}</h2>
                        <p><strong>Competition/Program:</strong> ${competition}</p>
                        <p><strong>Skills Demonstrated:</strong> ${skills}</p>
                        <p><strong>Description:</strong> ${description}</p>
                        <!-- Add more details as needed -->
                    </div>
                </div>
            `;
            
            // Append modal to body
            document.body.insertAdjacentHTML('beforeend', modalContent);
            
            // Show modal
            const modal = document.querySelector('.modal');
            modal.style.display = 'block';
            
            // Close modal when close button is clicked
            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            // Close modal when clicking outside of modal content
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
});