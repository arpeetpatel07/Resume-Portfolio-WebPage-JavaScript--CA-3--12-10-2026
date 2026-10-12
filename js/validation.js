/**
 * validation.js — Contact Form Validation
 * Demonstrates: Form Validation, Event Listeners, DOM Manipulation, User Feedback
 *
 * CA3 Mini Project | Arpeet Patel | PRN: 24070521218
 */

/**
 * Validates an email address format using Regular Expression.
 * @param {string} email - Email string to validate
 * @returns {boolean} true if valid email format
 */
function isValidEmail(email) {
  // Standard email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Shows an error message below a field.
 * @param {HTMLElement} field - The input/textarea element
 * @param {string} message - The error message to display
 */
function showFieldError(field, message) {
  // Remove existing error if any
  clearFieldError(field);

  field.classList.add('field-error');

  const errorDiv = document.createElement('span');
  errorDiv.classList.add('error-message');
  errorDiv.setAttribute('role', 'alert');
  errorDiv.textContent = message;

  field.parentNode.appendChild(errorDiv);
}

/**
 * Clears error styling and message from a field.
 * @param {HTMLElement} field - The input/textarea element
 */
function clearFieldError(field) {
  field.classList.remove('field-error');
  field.classList.remove('field-success');

  const existingError = field.parentNode.querySelector('.error-message');
  if (existingError) existingError.remove();
}

/**
 * Marks a field as valid/success.
 * @param {HTMLElement} field - The input/textarea element
 */
function markFieldSuccess(field) {
  clearFieldError(field);
  field.classList.add('field-success');
}

/**
 * Validates the entire contact form.
 * @returns {boolean} true if all fields are valid
 */
function validateContactForm() {
  const nameField    = document.getElementById('contact-name');
  const emailField   = document.getElementById('contact-email');
  const subjectField = document.getElementById('contact-subject');
  const messageField = document.getElementById('contact-message');

  let isValid = true;

  // Validate Name: required, min 2 chars
  const nameVal = nameField.value.trim();
  if (!nameVal) {
    showFieldError(nameField, '⚠ Full name is required.');
    isValid = false;
  } else if (nameVal.length < 2) {
    showFieldError(nameField, '⚠ Name must be at least 2 characters.');
    isValid = false;
  } else {
    markFieldSuccess(nameField);
  }

  // Validate Email: required and valid format
  const emailVal = emailField.value.trim();
  if (!emailVal) {
    showFieldError(emailField, '⚠ Email address is required.');
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    showFieldError(emailField, '⚠ Please enter a valid email address (e.g. name@example.com).');
    isValid = false;
  } else {
    markFieldSuccess(emailField);
  }

  // Validate Subject: required, min 5 chars
  const subjectVal = subjectField.value.trim();
  if (!subjectVal) {
    showFieldError(subjectField, '⚠ Subject is required.');
    isValid = false;
  } else if (subjectVal.length < 5) {
    showFieldError(subjectField, '⚠ Subject must be at least 5 characters.');
    isValid = false;
  } else {
    markFieldSuccess(subjectField);
  }

  // Validate Message: required, min 20 chars
  const messageVal = messageField.value.trim();
  if (!messageVal) {
    showFieldError(messageField, '⚠ Message is required.');
    isValid = false;
  } else if (messageVal.length < 20) {
    showFieldError(messageField, `⚠ Message too short. Please write at least 20 characters (currently ${messageVal.length}).`);
    isValid = false;
  } else if (messageVal.length > 1000) {
    showFieldError(messageField, `⚠ Message is too long. Please keep it under 1000 characters (currently ${messageVal.length}).`);
    isValid = false;
  } else {
    markFieldSuccess(messageField);
  }

  return isValid;
}

/**
 * Handles contact form submission.
 * Uses mailto: as the submission method (no server required for static site).
 */
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent default HTML form submission

  if (!validateContactForm()) {
    // Show general error feedback
    showFormFeedback('error', '❌ Please fix the errors above before submitting.');
    return;
  }

  // Collect values
  const name    = document.getElementById('contact-name').value.trim();
  const email   = document.getElementById('contact-email').value.trim();
  const subject = document.getElementById('contact-subject').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  // Build mailto link
  const mailtoLink = `mailto:arpeetpatel192006@gmail.com`
    + `?subject=${encodeURIComponent(`[Portfolio Contact] ${subject} — from ${name}`)}`
    + `&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

  // Show success feedback before opening mail client
  showFormFeedback('success', '✅ Message prepared! Your email client will open shortly.');

  // Small delay before opening mail client for better UX
  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 1000);
}

/**
 * Shows a global form feedback message (success or error).
 * @param {string} type - 'success' or 'error'
 * @param {string} message - The feedback text
 */
function showFormFeedback(type, message) {
  const existingFeedback = document.getElementById('form-feedback');
  if (existingFeedback) existingFeedback.remove();

  const feedback = document.createElement('div');
  feedback.id = 'form-feedback';
  feedback.className = `form-feedback form-feedback-${type}`;
  feedback.setAttribute('role', 'status');
  feedback.textContent = message;

  const form = document.getElementById('contact-form');
  form.insertAdjacentElement('beforebegin', feedback);

  // Auto-remove after 6 seconds
  setTimeout(() => {
    if (feedback && feedback.parentNode) {
      feedback.remove();
    }
  }, 6000);
}

/**
 * Sets up real-time inline validation as the user types.
 * Provides immediate feedback without waiting for submit.
 */
function setupRealTimeValidation() {
  const fields = [
    { id: 'contact-name',    validator: (v) => v.length >= 2  ? null : '⚠ Name must be at least 2 characters.' },
    { id: 'contact-email',   validator: (v) => isValidEmail(v) ? null : '⚠ Invalid email format.' },
    { id: 'contact-subject', validator: (v) => v.length >= 5  ? null : '⚠ Subject must be at least 5 characters.' },
    { id: 'contact-message', validator: (v) => v.length >= 20 ? null : `⚠ Message too short (${v.length}/20 characters min).` }
  ];

  fields.forEach(({ id, validator }) => {
    const field = document.getElementById(id);
    if (!field) return;

    // Validate on blur (when user leaves the field)
    field.addEventListener('blur', function () {
      const error = validator(this.value.trim());
      if (error) {
        showFieldError(this, error);
      } else {
        markFieldSuccess(this);
      }
    });

    // Clear error on input (as user starts typing again)
    field.addEventListener('input', function () {
      if (this.classList.contains('field-error')) {
        clearFieldError(this);
      }
    });
  });

  // Character counter for message field
  const messageField = document.getElementById('contact-message');
  const charCounter  = document.getElementById('message-char-count');
  if (messageField && charCounter) {
    messageField.addEventListener('input', function () {
      const count = this.value.length;
      charCounter.textContent = `${count}/1000`;
      charCounter.style.color = count > 900 ? '#EF4444' : count > 700 ? '#F59E0B' : '';
    });
  }
}

/**
 * Initializes form validation on DOM ready.
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmission);
    setupRealTimeValidation();
  }
});
