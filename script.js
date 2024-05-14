document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            const title = project.getAttribute('data-title');
            const competition = project.getAttribute('data-competition');
            const skills = project.getAttribute('data-skills');
            const description = project.getAttribute('data-description');
            const projectURL = project.getAttribute('data-project-url');
            const imagePath = project.getAttribute('data-image-path');

            const existingModal = document.querySelector('.modal');
            if (existingModal) {
                existingModal.remove();
            }

            const modalContent = `
                <div class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2>${title}</h2>
                        <img src="${imagePath}" alt="${title}" class="modal-image">
                        <p><strong>Competition/Program:</strong> ${competition}</p>
                        <p><strong>Skills Demonstrated:</strong> ${skills}</p>
                        <p><strong>Description:</strong> ${description}</p>
                        <p><strong>Link:</strong> <a href="${projectURL}" target="_blank" rel="noopener noreferrer">${title}</a></p>
                    </div>
                </div>
            `;

            document.body.insertAdjacentHTML('beforeend', modalContent);
            const modal = document.querySelector('.modal');
            modal.style.display = 'block';

            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var learnMoreBtn = document.getElementById('learn-more-btn');
    var experienceSection = document.getElementById('experience');
    var navHeight = document.querySelector('nav').offsetHeight;

    learnMoreBtn.addEventListener('click', function() {
        var scrollToPosition = experienceSection.offsetTop - navHeight;
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
    var navHeight = document.querySelector('nav').offsetHeight;

    learnMoreBtn.addEventListener('click', function() {
        var scrollToPosition = experienceSection.offsetTop - navHeight;
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    });

    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var scrollToPosition = targetSection.offsetTop - navHeight;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
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

document.body.classList.remove('dark-mode');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

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
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;
    var isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Function to toggle dark mode
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.textContent = 'Light Mode'; // Change button text to "Light Mode"
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', null);
            darkModeToggle.textContent = 'Dark Mode'; // Change button text back to "Dark Mode"
        }
    }

    // Initial dark mode state
    if (isDarkMode) {
        enableDarkMode();
        darkModeToggle.textContent = 'Light Mode'; // Change button text to "Light Mode" if dark mode is enabled initially
    } else {
        disableDarkMode();
        darkModeToggle.textContent = 'Dark Mode'; // Change button text to "Dark Mode" if dark mode is disabled initially
    }

    // Event listener for dark mode toggle button
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
    }
});