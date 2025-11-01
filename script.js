// ========================================
// SOCIAL MEDIA LINKS FUNCTIONALITY
// ========================================

function initializeSocialMedia() {
  // Get all social media icons
  const socialIcons = document.querySelectorAll('.social__icon');
  
  // Add click handlers and hover effects
  socialIcons.forEach(icon => {
    const altText = icon.getAttribute('alt').toLowerCase();
    let url = '';
    
    // Determine the URL based on the alt text
    if (altText.includes('facebook')) {
      url = 'https://www.facebook.com/';
      icon.style.cursor = 'pointer';
    } else if (altText.includes('twitter')) {
      url = 'https://www.twitter.com/';
      icon.style.cursor = 'pointer';
    } else if (altText.includes('instagram')) {
      url = 'https://www.instagram.com/';
      icon.style.cursor = 'pointer';
    }
    
    // Add click event
    if (url) {
      icon.addEventListener('click', () => {
        window.open(url, '_blank');
      });
      
      // Add hover effect
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    }
  });
}

// ========================================
// PROFILE DROPDOWN FUNCTIONALITY
// ========================================

function initializeProfileDropdown() {
  const profileImg = document.querySelector('.header__profile-img');
  
  if (profileImg) {
    // Create dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'profile__dropdown';
    dropdown.innerHTML = `
      <div class="profile__dropdown-content">
        <a href="#" class="profile__link" id="viewProfile">View Profile</a>
        <a href="#" class="profile__link" id="switchAccount">Switch Account</a>
        <a href="login.html" class="profile__link" id="signOut">Sign Out</a>
      </div>
    `;
    
    // Insert dropdown after profile image
    profileImg.parentNode.insertBefore(dropdown, profileImg.nextSibling);
    
    // Toggle dropdown on profile image click
    profileImg.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('profile__dropdown--active');
      profileImg.style.cursor = 'pointer';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== profileImg) {
        dropdown.classList.remove('profile__dropdown--active');
      }
    });
    
    // Handle dropdown actions
    document.getElementById('viewProfile')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Profile page coming soon!');
      dropdown.classList.remove('profile__dropdown--active');
    });
    
    document.getElementById('switchAccount')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Account switching feature coming soon!');
      dropdown.classList.remove('profile__dropdown--active');
    });
    
    document.getElementById('signOut')?.addEventListener('click', (e) => {
      // Clear any stored user data
      localStorage.removeItem('moneywise_user');
      // Redirect handled by href
    });
  }
}

// ========================================
// HIGHLIGHT SEARCH BAR FUNCTIONALITY
// ========================================

function initializeSearch() {
  const searchInput = document.querySelector('.header__search');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      
      if (searchTerm.length > 0) {
        highlightSearchResults(searchTerm);
      } else {
        clearHighlights();
      }
    });
    
    // Clear highlights when search loses focus and is empty
    searchInput.addEventListener('blur', () => {
      if (searchInput.value.trim() === '') {
        clearHighlights();
      }
    });
  }
}

function highlightSearchResults(searchTerm) {
  // Clear previous highlights
  clearHighlights();
  
  // Get all text content in main sections
  const mainContent = document.querySelector('main');
  if (!mainContent) return;
  
  // Get all text nodes
  const walker = document.createTreeWalker(
    mainContent,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  let node;
  while (node = walker.nextNode()) {
    // Skip script and style elements
    if (node.parentElement.tagName !== 'SCRIPT' && 
        node.parentElement.tagName !== 'STYLE') {
      textNodes.push(node);
    }
  }
  
  // Highlight matching text
  textNodes.forEach(textNode => {
    const text = textNode.textContent;
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes(searchTerm)) {
      const span = document.createElement('span');
      span.innerHTML = text.replace(
        new RegExp(`(${searchTerm})`, 'gi'),
        '<mark class="search-highlight">$1</mark>'
      );
      textNode.parentNode.replaceChild(span, textNode);
      span.classList.add('search-wrapper');
    }
  });
  
  // Scroll to first result
  const firstHighlight = document.querySelector('.search-highlight');
  if (firstHighlight) {
    firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function clearHighlights() {
  // Remove all highlight wrappers
  const wrappers = document.querySelectorAll('.search-wrapper');
  wrappers.forEach(wrapper => {
    const parent = wrapper.parentNode;
    parent.replaceChild(document.createTextNode(wrapper.textContent), wrapper);
    parent.normalize(); // Merge adjacent text nodes
  });
}

// ========================================
// LOGIN FUNCTIONALITY
// ========================================

function initializeLogin() {
  const loginForm = document.querySelector('.login__form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Simple client-side validation (for demonstration)
      if (username && password) {
        // Store basic user info (in a real app, this would be done after server authentication)
        const userData = {
          username: username,
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('moneywise_user', JSON.stringify(userData));
        
        // Show success message
        alert(`Welcome back, ${username}!`);
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        alert('Please enter both username and password.');
      }
    });
  }
}

// Check if user is logged in on dashboard
function checkLoginStatus() {
  const currentPage = window.location.pathname.split('/').pop();
  
  // Only check on dashboard page
  if (currentPage === 'dashboard.html') {
    const userData = localStorage.getItem('moneywise_user');
    
    if (!userData) {
      alert('Please login to access the dashboard.');
      window.location.href = 'login.html';
    }
  }
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeSocialMedia();
  initializeProfileDropdown();
  initializeSearch();
  initializeLogin();
  checkLoginStatus();
});

// ========================================
// SOCIAL MEDIA LINKS FUNCTIONALITY
// ========================================

function initializeSocialMedia() {
  // Get all social media icons
  const socialIcons = document.querySelectorAll('.social__icon');
  
  // Add click handlers and hover effects
  socialIcons.forEach(icon => {
    const altText = icon.getAttribute('alt').toLowerCase();
    let url = '';
    
    // Determine the URL based on the alt text
    if (altText.includes('facebook')) {
      url = 'https://www.facebook.com/';
      icon.style.cursor = 'pointer';
    } else if (altText.includes('twitter')) {
      url = 'https://www.twitter.com/';
      icon.style.cursor = 'pointer';
    } else if (altText.includes('instagram')) {
      url = 'https://www.instagram.com/';
      icon.style.cursor = 'pointer';
    }
    
    // Add click event
    if (url) {
      icon.addEventListener('click', () => {
        window.open(url, '_blank');
      });
      
      // Add hover effect
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
      });
    }
  });
}

// ========================================
// PROFILE DROPDOWN FUNCTIONALITY
// ========================================

function initializeProfileDropdown() {
  const profileImg = document.querySelector('.header__profile-img');
  
  if (profileImg) {
    // Create dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'profile__dropdown';
    dropdown.innerHTML = `
      <div class="profile__dropdown-content">
        <a href="#" class="profile__link" id="viewProfile">View Profile</a>
        <a href="#" class="profile__link" id="switchAccount">Switch Account</a>
        <a href="login.html" class="profile__link" id="signOut">Sign Out</a>
      </div>
    `;
    
    // Insert dropdown after profile image
    profileImg.parentNode.insertBefore(dropdown, profileImg.nextSibling);
    
    // Toggle dropdown on profile image click
    profileImg.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('profile__dropdown--active');
      profileImg.style.cursor = 'pointer';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && e.target !== profileImg) {
        dropdown.classList.remove('profile__dropdown--active');
      }
    });
    
    // Handle dropdown actions
    document.getElementById('viewProfile')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Profile page coming soon!');
      dropdown.classList.remove('profile__dropdown--active');
    });
    
    document.getElementById('switchAccount')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Account switching feature coming soon!');
      dropdown.classList.remove('profile__dropdown--active');
    });
    
    document.getElementById('signOut')?.addEventListener('click', (e) => {
      // Clear any stored user data
      localStorage.removeItem('moneywise_user');
      // Redirect handled by href
    });
  }
}

// ========================================
// SEARCH BAR FUNCTIONALITY
// ========================================

function initializeSearch() {
  const searchInput = document.querySelector('.header__search');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      
      if (searchTerm.length > 0) {
        highlightSearchResults(searchTerm);
      } else {
        clearHighlights();
      }
    });
    
    // Clear highlights when search loses focus and is empty
    searchInput.addEventListener('blur', () => {
      if (searchInput.value.trim() === '') {
        clearHighlights();
      }
    });
  }
}

function highlightSearchResults(searchTerm) {
  // Clear previous highlights
  clearHighlights();
  
  // Get all text content in main sections
  const mainContent = document.querySelector('main');
  if (!mainContent) return;
  
  // Get all text nodes
  const walker = document.createTreeWalker(
    mainContent,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  let node;
  while (node = walker.nextNode()) {
    // Skip script and style elements
    if (node.parentElement.tagName !== 'SCRIPT' && 
        node.parentElement.tagName !== 'STYLE') {
      textNodes.push(node);
    }
  }
  
  // Highlight matching text
  textNodes.forEach(textNode => {
    const text = textNode.textContent;
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes(searchTerm)) {
      const span = document.createElement('span');
      span.innerHTML = text.replace(
        new RegExp(`(${searchTerm})`, 'gi'),
        '<mark class="search-highlight">$1</mark>'
      );
      textNode.parentNode.replaceChild(span, textNode);
      span.classList.add('search-wrapper');
    }
  });
  
  // Scroll to first result
  const firstHighlight = document.querySelector('.search-highlight');
  if (firstHighlight) {
    firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function clearHighlights() {
  // Remove all highlight wrappers
  const wrappers = document.querySelectorAll('.search-wrapper');
  wrappers.forEach(wrapper => {
    const parent = wrapper.parentNode;
    parent.replaceChild(document.createTextNode(wrapper.textContent), wrapper);
    parent.normalize(); // Merge adjacent text nodes
  });
}

// ========================================
// LOGIN FUNCTIONALITY
// ========================================

function initializeLogin() {
  const loginForm = document.querySelector('.login__form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Simple client-side validation (for demonstration)
      if (username && password) {
        // Store basic user info (in a real app, this would be done after server authentication)
        const userData = {
          username: username,
          loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('moneywise_user', JSON.stringify(userData));
        
        // Show success message
        alert(`Welcome back, ${username}!`);
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        alert('Please enter both username and password.');
      }
    });
  }
}

// Check if user is logged in on dashboard
function checkLoginStatus() {
  const currentPage = window.location.pathname.split('/').pop();
  
  // Only check on dashboard page
  if (currentPage === 'dashboard.html') {
    const userData = localStorage.getItem('moneywise_user');
    
    if (!userData) {
      alert('Please login to access the dashboard.');
      window.location.href = 'login.html';
    }
  }
}

// ========================================
// DISPLAY USER PROFILE NAME
// ========================================

function displayUserName() {
  const profileNameElement = document.querySelector('.header__profile-name');
  
  if (profileNameElement) {
    const userData = localStorage.getItem('moneywise_user');
    
    if (userData) {
      const user = JSON.parse(userData);
      profileNameElement.textContent = user.username;
    } else {
      profileNameElement.textContent = 'Guest';
    }
  }
}

// ========================================
// INITIALIZE ALL FUNCTIONS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeSocialMedia();
  initializeProfileDropdown();
  initializeSearch();
  initializeLogin();
  checkLoginStatus();
  displayUserName();
});