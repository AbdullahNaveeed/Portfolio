document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-links a');

    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
function openPDF() {
    window.open('Images/Resume.pdf', '_blank');
}

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation (optional)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you for your message! I will get back to you soon.');
        // Optionally, you can reset the form here
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
