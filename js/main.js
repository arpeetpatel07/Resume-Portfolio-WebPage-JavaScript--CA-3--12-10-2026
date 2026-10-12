/**
 * main.js — Core JavaScript Functionality
 * Implements: Navigation, Theme Switch, Typing Animation, Scroll Effects,
 *             Smooth Scrolling, Back-to-Top, Section Rendering, localStorage,
 *             Intersection Observer API, Certificate Filtering, Skills Rendering
 *
 * CA3 Mini Project | Arpeet Patel | PRN: 24070521218
 * Symbiosis Institute of Technology, Nagpur
 */

// ═══════════════════════════════════════════════════
// 1. THEME SWITCHING (Dark / Light Mode + localStorage)
// ═══════════════════════════════════════════════════

/**
 * Initializes and toggles between dark and light themes.
 * Saves user preference to localStorage so it persists across page visits.
 */
function initTheme() {
  // Retrieve saved theme from localStorage (persists across sessions)
  const savedTheme = localStorage.getItem('ap-portfolio-theme') || 'light';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    root.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeToggleBtn) themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
  }
  // Save to localStorage
  localStorage.setItem('ap-portfolio-theme', theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem('ap-portfolio-theme') || 'light';
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ═══════════════════════════════════════════════════
// 2. TYPING / ROTATING TEXT ANIMATION
// ═══════════════════════════════════════════════════

/**
 * Creates a typewriter animation effect that cycles through an array of strings.
 * Demonstrates: setInterval, DOM manipulation, array indexing
 */
function initTypingAnimation() {
  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  const texts = personalInfo.typingTexts; // From data.js
  let textIndex = 0;    // Tracks which string we are currently typing
  let charIndex = 0;    // Tracks which character we are at
  let isDeleting = false;
  const typingSpeed = 80;     // ms per character when typing
  const deletingSpeed = 40;   // ms per character when deleting
  const pauseEnd = 1800;      // ms to pause at the end of a word
  const pauseStart = 400;     // ms to pause before typing next word

  function typeCharacter() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      // Remove one character
      typingEl.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add one character
      typingEl.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end before deleting
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = pauseStart;
    }

    setTimeout(typeCharacter, delay);
  }

  typeCharacter(); // Start the animation
}

// ═══════════════════════════════════════════════════
// 3. NAVIGATION — RESPONSIVE HAMBURGER MENU
// ═══════════════════════════════════════════════════

/**
 * Sets up the mobile hamburger menu toggle.
 * Uses event listeners and CSS class toggling (DOM manipulation).
 */
function initNavigation() {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu   = document.getElementById('nav-menu');
  const navLinks  = document.querySelectorAll('.nav-link');

  if (!hamburger || !navMenu) return;

  // Toggle menu open/close
  hamburger.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('nav-open');
    hamburger.classList.toggle('hamburger-active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Close menu when a nav link is clicked (for smooth scroll UX)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('nav-open');
      hamburger.classList.remove('hamburger-active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove('nav-open');
      hamburger.classList.remove('hamburger-active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }
  });
}

// ═══════════════════════════════════════════════════
// 4. ACTIVE NAVIGATION HIGHLIGHTING ON SCROLL
// ═══════════════════════════════════════════════════

/**
 * Uses Intersection Observer API to highlight the active nav link
 * as the user scrolls through sections.
 */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    rootMargin: '-30% 0px -60% 0px', // Fires when section is in the middle third of viewport
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Remove active from all nav links
        navLinks.forEach(link => link.classList.remove('nav-active'));
        // Add active to matching nav link
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('nav-active');
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

// ═══════════════════════════════════════════════════
// 5. NAVBAR SCROLL EFFECT (sticky + background change)
// ═══════════════════════════════════════════════════

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, { passive: true }); // passive: true for performance
}

// ═══════════════════════════════════════════════════
// 6. SMOOTH SCROLLING
// ═══════════════════════════════════════════════════

/**
 * Implements smooth scrolling for all anchor links that point to sections.
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 70;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });
}

// ═══════════════════════════════════════════════════
// 7. BACK TO TOP BUTTON
// ═══════════════════════════════════════════════════

/**
 * Shows/hides back-to-top button based on scroll position.
 * Scrolls to top when clicked.
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════════════════════
// 8. SCROLL-TRIGGERED ANIMATIONS (Intersection Observer)
// ═══════════════════════════════════════════════════

/**
 * Animates elements into view as they enter the viewport.
 * Uses Intersection Observer API for performance-efficient detection.
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .section-header, .about-card, .skill-category-card, ' +
    '.cert-card, .achievement-card, .contribution-card, .timeline-item, .edu-item'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════
// 9. SKILLS SECTION RENDERING
// ═══════════════════════════════════════════════════

/**
 * Dynamically renders skill categories and skill pills from data.js.
 * Demonstrates: Object.entries(), Array.map(), DOM manipulation
 */
function renderSkills(activeFilter = 'all') {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';

  Object.entries(skills).forEach(([category, skillList]) => {
    // Apply filter
    if (activeFilter !== 'all') {
      const categoryKey = category.toLowerCase().replace(/\s+&?\s*/g, '-').replace(/[^a-z-]/g, '');
      if (!categoryKey.includes(activeFilter.replace('filter-', ''))) return;
    }

    const skillPills = skillList
      .map(skill => `
        <div class="skill-pill" title="${skill.name}">
          <span class="skill-icon">${skill.icon}</span>
          <span class="skill-name">${skill.name}</span>
        </div>
      `).join('');

    const categoryCard = document.createElement('div');
    categoryCard.className = 'skill-category-card animate-on-scroll';
    categoryCard.innerHTML = `
      <h3 class="skill-category-title">${category}</h3>
      <div class="skill-pills">${skillPills}</div>
    `;
    container.appendChild(categoryCard);
  });

  // Re-run scroll animation for new elements
  initScrollAnimations();
}

// ═══════════════════════════════════════════════════
// 10. CERTIFICATIONS RENDERING & FILTERING
// ═══════════════════════════════════════════════════

/**
 * Renders certification cards. Supports category filtering.
 * @param {string} filter - Category filter value
 */
function renderCertifications(filter = 'all') {
  const container = document.getElementById('certs-grid');
  if (!container) return;

  const filtered = filter === 'all'
    ? certifications
    : certifications.filter(c => c.category === filter);

  container.innerHTML = filtered.map(cert => `
    <div class="cert-card animate-on-scroll" style="--cert-color: ${cert.color}">
      <div class="cert-icon-wrap" style="background: ${cert.color}20; border-color: ${cert.color}40">
        <span class="cert-icon">${cert.icon}</span>
      </div>
      <div class="cert-info">
        <h4 class="cert-name">${cert.name}</h4>
        <p class="cert-issuer">${cert.issuer}</p>
        <span class="cert-code">${cert.code}</span>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

/**
 * Sets up certificate filter buttons.
 */
function setupCertFilters() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderCertifications(this.getAttribute('data-filter'));
    });
  });
}

// ═══════════════════════════════════════════════════
// 11. ACHIEVEMENTS RENDERING
// ═══════════════════════════════════════════════════

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  if (!container) return;

  container.innerHTML = achievements.map(ach => `
    <div class="achievement-card animate-on-scroll">
      <div class="achievement-icon">${ach.icon}</div>
      <div class="achievement-info">
        <span class="achievement-type">${ach.type.toUpperCase()}</span>
        <h4 class="achievement-title">${ach.title}</h4>
        <p class="achievement-org">${ach.organization}</p>
        <p class="achievement-date">${ach.date}</p>
        <p class="achievement-desc">${ach.description}</p>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════
// 12. CONTRIBUTIONS RENDERING
// ═══════════════════════════════════════════════════

function renderContributions() {
  const container = document.getElementById('contributions-container');
  if (!container) return;

  container.innerHTML = contributions.map((item, index) => `
    <div class="contribution-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
      <div class="contribution-icon">${item.icon}</div>
      <div class="contribution-info">
        <span class="contribution-type ${item.type}">${item.type.toUpperCase()}</span>
        <h4 class="contribution-title">${item.title}</h4>
        <p class="contribution-org">${item.organization}</p>
        <p class="contribution-role"><strong>Role:</strong> ${item.role}</p>
        <p class="contribution-desc">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════
// 13. EDUCATION TIMELINE RENDERING
// ═══════════════════════════════════════════════════

function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container) return;

  container.innerHTML = education.map((edu, index) => `
    <div class="timeline-item animate-on-scroll" style="animation-delay: ${index * 0.15}s">
      <div class="timeline-connector">
        <div class="timeline-dot">${edu.icon}</div>
        ${index < education.length - 1 ? '<div class="timeline-line"></div>' : ''}
      </div>
      <div class="timeline-card">
        <div class="timeline-header">
          <span class="edu-level">${edu.level}</span>
          <span class="edu-status ${edu.status === 'Ongoing' ? 'status-ongoing' : 'status-done'}">${edu.status}</span>
        </div>
        <h3 class="edu-institution">${edu.institution}</h3>
        ${edu.university ? `<p class="edu-university">${edu.university}</p>` : ''}
        <p class="edu-degree">${edu.degree}</p>
        ${edu.specialization ? `<p class="edu-spec">🔬 ${edu.specialization}</p>` : ''}
        <p class="edu-duration">📅 ${edu.duration}</p>
        <ul class="edu-details">
          ${edu.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════
// 14. INTERNSHIP SECTION RENDERING
// ═══════════════════════════════════════════════════

function renderInternships() {
  const container = document.getElementById('internship-container');
  if (!container) return;

  container.innerHTML = internships.map(intern => `
    <div class="internship-card animate-on-scroll">
      <div class="internship-header">
        <div>
          <h3 class="internship-title">${intern.title}</h3>
          <p class="internship-company">${intern.company}</p>
          <p class="internship-meta">${intern.location} · ${intern.duration}</p>
        </div>
        <span class="internship-badge">💼 ${intern.type}</span>
      </div>
      <ul class="internship-responsibilities">
        ${intern.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>
      <div class="tech-tags">
        ${intern.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════
// 15. CAREER INTERESTS RENDERING
// ═══════════════════════════════════════════════════

function renderCareerInfo() {
  const objectiveEl = document.getElementById('career-objective');
  if (objectiveEl) objectiveEl.textContent = careerInfo.objective;

  const interestsEl = document.getElementById('career-interests-list');
  if (interestsEl) {
    interestsEl.innerHTML = careerInfo.interests
      .map(i => `<li class="interest-item">🎯 ${i}</li>`)
      .join('');
  }

  const goalsEl = document.getElementById('career-goals-list');
  if (goalsEl) {
    goalsEl.innerHTML = careerInfo.goals
      .map(g => `<li class="goal-item">🚀 ${g}</li>`)
      .join('');
  }
}

// ═══════════════════════════════════════════════════
// 16. DYNAMIC COPYRIGHT YEAR
// ═══════════════════════════════════════════════════

function updateCopyrightYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ═══════════════════════════════════════════════════
// 17. ABOUT HIGHLIGHTS RENDERING
// ═══════════════════════════════════════════════════

function renderAboutHighlights() {
  const container = document.getElementById('about-highlights');
  if (!container) return;

  container.innerHTML = aboutHighlights.map((h, i) => `
    <div class="about-card animate-on-scroll" style="animation-delay: ${i * 0.1}s">
      <div class="about-card-icon">${h.icon}</div>
      <h4 class="about-card-title">${h.title}</h4>
      <p class="about-card-desc">${h.description}</p>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════
// 18. HERO STATS COUNTER ANIMATION
// ═══════════════════════════════════════════════════

/**
 * Animates numbers counting up for hero statistics.
 */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // ms
    const step = target / (duration / 16); // ~60fps
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + (counter.getAttribute('data-suffix') || '');
      }
    };
    updateCounter();
  });
}

// Trigger counter animation when hero comes into view
function initCounterAnimation() {
  const statsSection = document.querySelector('.hero-stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.unobserve(statsSection);
    }
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

// ═══════════════════════════════════════════════════
// 19. REDUCED MOTION SUPPORT
// ═══════════════════════════════════════════════════

/**
 * Checks if user prefers reduced motion and disables animations accordingly.
 * Accessibility compliance (WCAG 2.1 guideline 2.3).
 */
function respectReducedMotion() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.documentElement.classList.add('reduce-motion');
  }
}

// ═══════════════════════════════════════════════════
// 20. INITIALISE EVERYTHING ON DOM READY
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
  // Performance: respect user motion preferences first
  respectReducedMotion();

  // UI / Theme
  initTheme();

  // Layout & Navigation
  initNavigation();
  initNavbarScroll();
  initSmoothScrolling();
  initActiveNavHighlight();

  // Hero animations
  initTypingAnimation();
  initCounterAnimation();

  // Render dynamic content from data.js
  renderAboutHighlights();
  renderEducation();
  renderSkills();
  renderCertifications();
  renderAchievements();
  renderContributions();
  renderInternships();
  renderCareerInfo();

  // Utility features
  initBackToTop();
  initScrollAnimations();
  updateCopyrightYear();

  // Certificate filter setup
  setupCertFilters();

  // Theme toggle button event
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  console.log('✅ Portfolio initialized | Arpeet Patel | PRN: 24070521218');
});
