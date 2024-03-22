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