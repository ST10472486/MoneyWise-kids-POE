// Redirect to Login Screen
    function goToLogin(){
      window.location.href = "Login.html";
    }


// SOCIAL MEDIA LINKS FUNCTIONALITY


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


// PROFILE DROPDOWN FUNCTIONALITY


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


// SEARCH BAR FUNCTIONALITY


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


// LOGIN FUNCTIONALITY


function initializeLogin() {
  const loginForm = document.querySelector('.login__form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Validate all fields are filled
      if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Validate password length (minimum 6 characters for demo)
      if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }
      
      // Store user info (in a real app, this would be done after server authentication)
      const userData = {
        username: username,
        email: email,
        loginTime: new Date().toISOString()
      };
      
      localStorage.setItem('moneywise_user', JSON.stringify(userData));
      
      // Show success message
      alert(`Welcome back, ${username}!`);
      
      // Redirect to dashboard
      window.location.href = 'dashboard.html';
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


// DISPLAY USER PROFILE NAME


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


// CONTACT FORM FUNCTIONALITY


function initializeContactForm() {
  const contactForm = document.querySelector('.contact__form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        // Clear the form
        contactForm.reset();
      } else {
        alert('Please fill out all fields before submitting.');
      }
    });
  }
}


// ENQUIRY FORM FUNCTIONALITY


function initializeEnquiryForm() {
  const enquiryForm = document.querySelector('.enquiry__form');
  
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values (adjust field IDs based on your actual enquiry form)
      const formData = new FormData(enquiryForm);
      const firstName = formData.get('fname') || formData.get('enquiry-fname');
      const lastName = formData.get('lname') || formData.get('enquiry-lname');
      const email = formData.get('email') || formData.get('enquiry-email');
      const phone = formData.get('phone') || formData.get('enquiry-phone');
      const details = formData.get('email') || formData.get('enquiry-email');

      
      if (firstName && lastName && email && phone &&  details) {
        alert(`Thank you for your enquiry, ${firstName} ${lastName} ! We've received your request and will respond to ${email} shortly.`);
        
        // Clear the form
        enquiryForm.reset();
      } else {
        alert('Please fill out all required fields before submitting.');
      }
    });
  }
}


// DASHBOARD USER INFO DISPLAY


function displayDashboardUserInfo() {
  // Check if we're on the dashboard page
  const dashboardProfile = document.querySelector('.dashboard__section .section__subtitle');
  
  if (dashboardProfile && dashboardProfile.textContent === 'Profile') {
    const userData = localStorage.getItem('moneywise_user');
    
    if (userData) {
      const user = JSON.parse(userData);
      const profileSection = dashboardProfile.parentElement;
      
      // Find or create the user info display
      let userInfoDiv = profileSection.querySelector('.dashboard__user-info');
      
      if (!userInfoDiv) {
        userInfoDiv = document.createElement('div');
        userInfoDiv.className = 'dashboard__user-info';
        
        // Replace the generic paragraph with actual user info
        const genericParagraph = profileSection.querySelector('p');
        if (genericParagraph) {
          genericParagraph.remove();
        }
        
        userInfoDiv.innerHTML = `
          <div class="user-info__item">
            <strong>Username:</strong> <span>${user.username}</span>
          </div>
          <div class="user-info__item">
            <strong>Email:</strong> <span>${user.email}</span>
          </div>
          <div class="user-info__item">
            <strong>Account Type:</strong> <span>Parent/Educator</span>
          </div>
          <div class="user-info__item">
            <strong>Member Since:</strong> <span>${new Date(user.loginTime).toLocaleDateString()}</span>
          </div>
        `;
        
        profileSection.appendChild(userInfoDiv);
      }
    }
  }
}


// HANDLE NON-EXISTENT PORTAL PAGES (404)


function handlePortalLinks() {
  // List of portal pages that don't exist yet
  const nonExistentPortals = [
    'portals/age6-10.html',
    'portals/age11-14.html',
    'portals/age15-17.html'
  ];
  
  // Get all links on the page
  const allLinks = document.querySelectorAll('a[href]');
  
  allLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Check if this link points to a non-existent portal
    if (nonExistentPortals.some(portal => href.includes(portal))) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This learning portal is currently under construction. We\'re working hard to bring you exciting financial literacy content!');
        // Optionally redirect to 404 page or stay on current page
        // window.location.href = '404.html';
      });
    }
  });
}


// INITIALIZE ALL FUNCTIONS


document.addEventListener('DOMContentLoaded', () => {
  initializeSocialMedia();
  initializeProfileDropdown();
  initializeSearch();
  initializeLogin();
  checkLoginStatus();
  displayUserName();
  initializeContactForm();
  initializeEnquiryForm();
  displayDashboardUserInfo();
  handlePortalLinks();
});