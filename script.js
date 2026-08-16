// Toggle between light and dark modes.
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle__icon');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Mobile navigation menu toggle.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form success message.
const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const { name, email, message } = contactForm.elements;
  if (!name.value || !email.value || !message.value) {
    formStatus.textContent = 'Please fill in all fields before sending your message.';
    return;
  }

  formStatus.textContent = `Thanks, ${name.value}! Your message has been sent successfully.`;
  contactForm.reset();
});

// Download resume as a text file.
const resumeDownload = document.getElementById('resume-download');

resumeDownload.addEventListener('click', (event) => {
  event.preventDefault();

  const resumeContent = `Your Name\nStudent and Aspiring Web Developer\n\nSkills:\n- HTML\n- CSS\n- JavaScript\n- Bootstrap\n- Microsoft Office\n\nEducation:\nBachelor's Student in Technology / Web Development Enthusiast\n\nProfile:\nMotivated student focused on building clean, user-friendly websites and learning modern web design practices.`;

  const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = downloadUrl;
  link.download = 'Your_Name_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
});
