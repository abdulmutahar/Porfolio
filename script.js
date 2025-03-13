function showProjectDetails(title, description, image) {
    const modal = document.getElementById('projectModal');
    const projectTitle = document.getElementById('projectTitle');
    const projectDescription = document.getElementById('projectDescription');
    const projectImage = document.getElementById('projectImage');
    projectTitle.textContent = title;
    projectDescription.textContent = description;
    projectImage.src = image;
    modal.classList.remove('hidden');
    }
    function closeProjectModal() {
    document.getElementById('projectModal').classList.add('hidden');
    }
    document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    particlesJS('particles-js', {
    particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#4F46E5' },
    shape: { type: 'circle' },
    opacity: { value: 0.2, random: false },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#4F46E5', opacity: 0.2, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
    });
    });
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const successModal = document.getElementById('successModal');
    menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    });
    window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
    backToTop.style.opacity = '1';
    } else {
    backToTop.style.opacity = '0';
    }
    });
    backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
    button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('bg-primary', 'text-white'));
    button.classList.add('bg-primary', 'text-white');
    });
    });
    function showSuccessModal() {
    successModal.classList.remove('hidden');
    }
    function closeSuccessModal() {
    successModal.classList.add('hidden');
    }
    contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccessModal();
    contactForm.reset();
    });
    newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showSuccessModal();
    newsletterForm.reset();
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    target.scrollIntoView({
    behavior: 'smooth'
    });
    mobileMenu.classList.add('hidden');
    }
    });
    });