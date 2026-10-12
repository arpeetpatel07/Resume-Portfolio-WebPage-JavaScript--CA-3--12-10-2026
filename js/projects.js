/**
 * projects.js — Dynamic Project Card Renderer
 * Demonstrates: DOM Manipulation, Array Methods, Dynamic Rendering, Modal Interactions
 *
 * CA3 Mini Project | Arpeet Patel | PRN: 24070521218
 */

// ─────────────────────────────────────────────
// PROJECT CARD RENDERER
// ─────────────────────────────────────────────

/**
 * Renders all project cards dynamically into the #projects-grid container.
 * Uses the projects array from data.js.
 */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  // Filter projects based on selected category
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  // Clear existing content
  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-results">No projects found in this category.</p>';
    return;
  }

  // Build and inject each card using map
  const cardsHTML = filtered.map(project => createProjectCard(project)).join('');
  grid.innerHTML = cardsHTML;

  // Add click listeners for modal after rendering
  attachProjectModalListeners();

  // Trigger scroll animation for newly rendered cards
  observeProjectCards();
}

/**
 * Creates the HTML string for a single project card.
 * @param {Object} project - Project data object from data.js
 * @returns {string} HTML string
 */
function createProjectCard(project) {
  const thumbnailHTML = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title} thumbnail" class="project-thumb" loading="lazy">`
    : `<div class="project-thumb-placeholder"><span class="project-thumb-icon">💻</span></div>`;

  const techTags = project.technologies
    .slice(0, 4) // Show max 4 tags on card
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  const statusClass = project.status === 'Completed & Deployed'
    ? 'status-completed'
    : project.status === 'In Development'
    ? 'status-progress'
    : 'status-default';

  const patentBadge = project.patent
    ? `<span class="patent-badge" title="${project.patent}">📜 Patent Filed</span>`
    : '';

  return `
    <article class="project-card fade-in-card" data-project-id="${project.id}" role="article">
      <div class="project-card-media">
        ${thumbnailHTML}
        <div class="project-card-overlay">
          <button class="btn-view-project" data-id="${project.id}" aria-label="View details for ${project.title}">
            View Details
          </button>
        </div>
      </div>
      <div class="project-card-body">
        <div class="project-card-header">
          <span class="project-status ${statusClass}">${project.status}</span>
          ${patentBadge}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-desc">${project.description.substring(0, 120)}…</p>
        <div class="tech-tags">${techTags}</div>
        <div class="project-card-actions">
          <button class="btn-project-modal btn-primary-sm" data-id="${project.id}">
            Learn More
          </button>
          ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-icon-link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>` : ''}
        </div>
      </div>
    </article>
  `;
}

/**
 * Attaches event listeners to all "View Details" and "Learn More" buttons.
 * Opens the project modal with detailed information.
 */
function attachProjectModalListeners() {
  const buttons = document.querySelectorAll('.btn-view-project, .btn-project-modal');
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const projectId = parseInt(this.getAttribute('data-id'));
      openProjectModal(projectId);
    });
  });
}

/**
 * Opens the project detail modal for a given project ID.
 * @param {number} id - The project ID
 */
function openProjectModal(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content-body');

  const techTagsAll = project.technologies
    .map(tech => `<span class="tech-tag">${tech}</span>`)
    .join('');

  const featuresHTML = project.features
    .map(f => `<li>✅ ${f}</li>`)
    .join('');

  const thumbnailHTML = project.thumbnail
    ? `<img src="${project.thumbnail}" alt="${project.title}" class="modal-thumbnail">`
    : `<div class="modal-thumb-placeholder"><span>💻</span></div>`;

  const patentSection = project.patent
    ? `<div class="modal-patent">
        <h4>📜 Patent</h4>
        <p>${project.patent}</p>
       </div>` : '';

  const githubBtn = project.github
    ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-modal-action btn-outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        View on GitHub
       </a>` : '';

  modalContent.innerHTML = `
    <div class="modal-header-media">
      ${thumbnailHTML}
    </div>
    <div class="modal-info">
      <div class="modal-status-row">
        <span class="project-status ${project.status === 'Completed & Deployed' ? 'status-completed' : 'status-progress'}">${project.status}</span>
        ${project.patent ? '<span class="patent-badge">📜 Patent Filed</span>' : ''}
      </div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-subtitle">${project.subtitle}</p>
      
      <div class="modal-section">
        <h4>📋 Overview</h4>
        <p>${project.description}</p>
      </div>

      <div class="modal-section">
        <h4>🎯 Problem Statement</h4>
        <p>${project.problem}</p>
      </div>

      <div class="modal-section">
        <h4>⭐ Key Features</h4>
        <ul class="modal-features">${featuresHTML}</ul>
      </div>

      <div class="modal-section">
        <h4>🛠️ Technologies Used</h4>
        <div class="tech-tags">${techTagsAll}</div>
      </div>

      <div class="modal-section">
        <h4>👤 My Contributions</h4>
        <p>${project.contributions}</p>
      </div>

      ${patentSection}

      <div class="modal-actions">
        ${githubBtn}
        <button class="btn-modal-action btn-close-modal" id="close-modal-bottom">Close</button>
      </div>
    </div>
  `;

  // Show modal
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Attach close button inside modal
  document.getElementById('close-modal-bottom').addEventListener('click', closeProjectModal);
}

/**
 * Closes the project modal.
 */
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * Sets up project category filter buttons.
 * Demonstrates event listeners and array filtering.
 */
function setupProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active state from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked button
      this.classList.add('active');
      // Render filtered projects
      const filter = this.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/**
 * Uses IntersectionObserver to animate project cards as they enter the viewport.
 */
function observeProjectCards() {
  const cards = document.querySelectorAll('.fade-in-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation with a small delay per card
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}

// Modal close on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeProjectModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
      }
    });

    // Close button in modal header
    const closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  }

  // Initialize projects
  setupProjectFilters();
  renderProjects('all');
});
