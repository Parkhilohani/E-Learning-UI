// Scroll to Courses Section
function scrollToCourses() {
    const coursesSection = document.getElementById("courses");
    window.scrollTo({
        top: coursesSection.offsetTop,
        behavior: "smooth"
    });
}

// Show Course Details (just an example action)
function showDetails(courseName) {
    alert(`You selected the course: ${courseName}`);
}

// Handle Form Submission
function handleSubmit(event) {
    event.preventDefault();  // Prevent the form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else {
        document.getElementById('responseMessage').innerHTML = `Thank you, ${name}! Your message has been received.`;
    }

    // Clear form after submission
    document.getElementById('contactForm').reset();
}
