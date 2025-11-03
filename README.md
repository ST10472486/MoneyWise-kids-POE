# MoneyWise Kids

**Empowering children to develop financial literacy in a fun, interactive way.**

MoneyWise Kids is an educational platform designed to teach children and teens about money management through interactive games, challenges, and real-world simulations. The platform provides age-appropriate content for three distinct age groups and includes tools for parents and educators to track progress.

## 🌟 Features

### Core Functionality
- **Age-Based Learning Portals**: Dedicated portals for ages 6-10, 11-14, and 15-17
- **User Authentication**: Login system with username, email, and password validation
- **Parent/Educator Dashboard**: Track student progress and view account information
- **Interactive Search**: Real-time content highlighting on all pages
- **Profile Management**: Dropdown menu for profile viewing, account switching, and sign-out
- **Contact & Enquiry Forms**: Functional forms with validation and success notifications
- **Social Media Integration**: Clickable social media icons linking to Facebook, Twitter, and Instagram

### User Experience
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Modern UI**: Clean, colorful interface with smooth transitions and hover effects
- **Accessible Navigation**: Easy-to-use menu system across all pages
- **Dynamic User Display**: Username appears in header after login


## 📁 Project Structure

MoneyWise-Kids/
├── index.html              # Homepage with hero section and portal links
├── about.html              # About Us page with team information
├── services.html           # Services overview page
├── portals.html            # Learning portals listing page
├── dashboard.html          # Parent/Educator dashboard
├── contact.html            # Contact page with form and social media
├── enquiry.html            # Enquiry form with FAQ section
├── login.html              # User login page
├── 404.html                # Error page for non-existent content
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── robots.txt
├── sitemap.xml       
└── Assets/            # Images and assets directory
    ├── Home/
    ├── About Us/
    ├── Services/
    ├── Contact/
    └── Dashboard/
    └── Login/
    └── Enquiry/
    └── Portals/


## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic text editor or IDE (VS Code, Sublime Text, etc.)

### Installation
1. Clone or download the repository
2. Open the project folder
3. Open `index.html` in your web browser
4. Navigate to `login.html` to create a test account

### Usage
1. **Login**: Navigate to the login page and enter:
   - Username (any text)
   - Email (valid email format)
   - Password (minimum 6 characters)
2. **Explore**: Use the navigation menu to explore different sections
3. **Search**: Type in the search bar to highlight content on the current page
4. **Dashboard**: View your profile information and access parent/educator tools
5. **Contact/Enquiry**: Submit forms to see validation in action

## 🎨 Design Theme

### Color Palette
- **Primary Blue**: `#2B6CB0` - Headers, titles, primary buttons
- **Success Green**: `#48BB78` - CTAs, links, success states
- **Warning Yellow**: `#ECC94B` - Highlights, team member cards
- **Neutral Gray**: `#4A5568` - Body text
- **Light Background**: `#F7FAFC` - Page background, sections

### Typography
- **Headings**: Poppins (bold)
- **Body Text**: Segoe UI (regular)

## 💻 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom styling 
- **JavaScript**: Client-side functionality
- **LocalStorage**: Client-side data persistence

### Key JavaScript Functions
- `initializeLogin()` - Handles user authentication and data storage
- `displayUserName()` - Shows logged-in username in header
- `initializeSearch()` - Real-time content highlighting
- `initializeProfileDropdown()` - Profile menu functionality
- `displayDashboardUserInfo()` - Shows user details on dashboard
- `initializeContactForm()` - Contact form validation and submission
- `initializeEnquiryForm()` - Enquiry form validation and submission
- `initializeSocialMedia()` - Social media icon click handlers
- `handlePortalLinks()` - Manages non-existent portal page links

### Browser Compatibility
- Chrome 
- Firefox 
- Safari 
- Edge 

## 📝 Form Validation

### Login Form
- All fields required (username, email, password)
- Email format validation
- Password minimum 6 characters
- Redirects to dashboard on success

### Contact Form
- All fields required (name, email, message)
- Success alert with user's name
- Form clears after submission

### Enquiry Form
- All fields required (first name, last name, email, phone, details)
- Success alert with full name
- Form clears after submission

---

## 🔒 Data Storage

The application uses **browser localStorage** to store user information:
- Username
- Email address
- Login timestamp

**Note**: This is a client-side implementation for demonstration purposes. In a production environment, this would be replaced with secure server-side authentication.

## 🐛 Known Limitations

- **No Backend**: All functionality is client-side only
- **Portal Pages**: Age-specific portal pages (6-10, 11-14, 15-17) redirect to 404 page as placeholders
- **Local Development**: Some features work best when files are served via a local server rather than directly opening HTML files
- **Data Persistence**: User data is stored only in browser localStorage and will be lost if cleared

---

## 🔄 Future Enhancements

- [ ] Implement actual age-specific portal content
- [ ] Add backend authentication system
- [ ] Create user profile editing page
- [ ] Implement progress tracking system
- [ ] Add interactive financial literacy games
- [ ] Create comprehensive reporting system
- [ ] Add password reset functionality
- [ ] Implement multi-user account switching
- [ ] Add email notification system
- [ ] Create admin panel for educators

## 📋 Changelog

### Version 1.0.0 (November 3, 2025)

**Initial Development (August 27, 2025)**
HTML Structure Created

Created index.html - Homepage with hero section and navigation
Created about.html - About Us page with team member section
Created services.html - Services overview page with detailed descriptions
Created portals.html - Learning portals listing page with age groups
Created dashboard.html - Parent/Educator dashboard with progress tracking
Created contact.html - Contact page with form and location information
Created enquiry.html - Enquiry form page with FAQ section
Implemented consistent header and footer across all pages
Set up semantic HTML5 structure
Added placeholder content and images
Created navigation menu linking all pages together


**Styling Phase (September 29, 2025)**
CSS Stylesheet Development

Created comprehensive styles.css file
Implemented CSS reset for consistent cross-browser rendering
Designed header with navigation menu and search bar styling
Created hero section with background image and CTA buttons
Styled all section containers with consistent padding and shadows
Implemented team member cards with hover effects
Designed form elements (inputs, textareas, buttons) with consistent styling
Created responsive design with media queries for mobile devices
Applied color scheme (Primary Blue #2B6CB0, Success Green #48BB78, Warning Yellow #ECC94B)
Added transition effects for smooth interactions
Created footer styling with rounded corners
Designed image containers with proper sizing and object-fit
Implemented flexbox layouts for team members and navigation

Responsive Breakpoints

Desktop: Full layout with side-by-side elements
Tablet (900px): Adjusted header and reduced gaps
Mobile (600px): Single-column layout with stacked navigation

#### Added
- **Login System**
  - Created login page with styled form
  - Implemented username, email, and password fields
  - Added form validation (email format, password length)
  - Integrated localStorage for user data storage
  - Added automatic redirect to dashboard after successful login
  - Dashboard access restriction for non-logged-in users

- **User Profile Features**
  - Dynamic username display in header across all pages
  - Profile dropdown menu with View Profile, Switch Account, and Sign Out options
  - Dashboard user information display (username, email, account type, member since date)
  - Sign-out functionality that clears user data

- **Search Functionality**
  - Real-time content search with highlighting
  - Smooth scroll to first search result
  - Auto-clear highlights when search is empty
  - Yellow highlight styling for matched terms

- **Form Handling**
  - Contact form with validation and success alerts
  - Enquiry form with comprehensive field validation
  - Form auto-clear after successful submission
  - User-friendly error messages for incomplete submissions

- **Social Media Integration**
  - Clickable social media icons (Facebook, Twitter, Instagram)
  - Open links in new tabs
  - Hover effects with scale transformation
  - Cursor pointer styling

- **404 Error Page**
  - Custom styled 404 page for non-existent content
  - "Under Construction" messaging for portal pages
  - Navigation buttons to homepage and portals
  - Branded design matching site theme

- **Portal Link Management**
  - Alert system for unavailable portal pages
  - Prevents broken links during local development
  - User-friendly "coming soon" messaging

#### Styled
- **Login Page**
  - Centered login container with white background
  - Rounded corners and box shadows
  - Blue and green color scheme matching site theme
  - Input focus states with blue border highlight
  - Responsive design for mobile devices

- **Profile Dropdown**
  - White dropdown menu with shadow
  - Hover effects on menu items
  - Proper positioning relative to profile image
  - Smooth transitions

- **Search Highlights**
  - Yellow background for matched terms
  - Rounded corners on highlight marks
  - Bold text for emphasis

- **Dashboard User Info**
  - Card-style information display
  - Blue left border accent
  - Clean typography with proper spacing
  - White background for each info item

- **404 Page**
  - Large "404" title in primary blue
  - Centered layout with clear messaging
  - Call-to-action buttons for navigation
  - Responsive design for all screen sizes

**Screenshots**

Navigation Menu:
<img width="1920" height="960" alt="Screenshot 2025-11-03 193031" src="https://github.com/user-attachments/assets/1399f4cd-504c-4eaf-aa86-043443dbe8d8" />

Home Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193120" src="https://github.com/user-attachments/assets/307d5e74-661f-4917-ab1f-53dae4cb8a30" />

About Us Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193141" src="https://github.com/user-attachments/assets/c29fd5f4-0a41-486b-a8ef-d8d8298522da" />

Services Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193155" src="https://github.com/user-attachments/assets/b1d5174d-8093-4be8-8966-52edf0ea1472" />

Student Portals Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193204" src="https://github.com/user-attachments/assets/cc99232b-2691-4f37-8aaa-93140f0a7bfc" />

Error Handling to enter Dashboard page if not a registered user:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193215" src="https://github.com/user-attachments/assets/3ea5d827-6be4-4d72-94ae-aea2559ca20f" />

Login Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193215" src="https://github.com/user-attachments/assets/5d9f26cb-084f-4bc2-b16d-db687d36ba1c" />

Login Succesful:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193243" src="https://github.com/user-attachments/assets/62479b40-93d8-48f6-b841-44a6f1c23127" />

Login Unsuccesful: 
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193501" src="https://github.com/user-attachments/assets/69f1b2f5-3e89-4916-b822-257654c872b8" />

Dashboard Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193253" src="https://github.com/user-attachments/assets/00e5a2a4-07b0-4e2a-8a80-51a532553bfa" />

Enquiry Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193303" src="https://github.com/user-attachments/assets/2cb0ad09-ae74-4214-8a1b-c09096933028" />

Enquiry Page info sent:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193435" src="https://github.com/user-attachments/assets/10866a34-5b43-4d82-8098-dbbf13da8b26" />

Enquiry Page Error handling:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193447" src="https://github.com/user-attachments/assets/63e314b7-e5ce-49c1-ace2-01f35a2e7b85" />

Contact Page:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193313" src="https://github.com/user-attachments/assets/2503a27c-2d93-4782-af2b-080dac5c39dc" />

Contact Page Message sent:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193342" src="https://github.com/user-attachments/assets/fae888b8-3486-48d3-bbb4-69da742f0c22" />

Contact Page Error handling:
<img width="1920" height="1008" alt="Screenshot 2025-11-03 193351" src="https://github.com/user-attachments/assets/510d79ef-1413-4568-b7b2-2a4c77300c14" />

#### Technical Improvements
- Implemented BEM naming convention for CSS classes
- Organized JavaScript into modular functions
- Added comprehensive code comments
- Removed code redundancies
- Fixed syntax errors in enquiry form validation
- Improved form field name consistency

#### Bug Fixes
- Fixed missing semicolon in enquiry form JavaScript
- Corrected form field name mismatches (fname vs name)
- Added missing script.js reference to services.html
- Fixed profile name display issues across pages
- Resolved portal link interception for local development

## 📄 License

© 2025 MoneyWise Kids. All rights reserved.

## 🙏 Acknowledgments

This project was developed as an educational platform to teach financial literacy to children and teens. Special thanks to educators, parents, and financial experts who contributed to the curriculum design.


**📚 References**

LocalStorage API

W3Schools (2025) JavaScript Web Storage API. Available at: https://www.w3schools.com/js/js_api_web_storage.asp (Accessed: 1 November 2025).
Mozilla Developer Network (2025) Window.localStorage. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage (Accessed: 1 November 2025).

Form Validation

W3Schools (2025) JavaScript Form Validation. Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 3 November 2025).
Mozilla Developer Network (2025) HTMLFormElement: submit event. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event (Accessed: 1 November 2025).

DOM Manipulation

W3Schools (2025) JavaScript HTML DOM. Available at: https://www.w3schools.com/js/js_htmldom.asp (Accessed: 1 November 2025).
Mozilla Developer Network (2025) Document Object Model (DOM). Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 3 November 2025).

Event Listeners

W3Schools (2025) JavaScript addEventListener(). Available at: https://www.w3schools.com/js/js_htmldom_eventlistener.asp (Accessed: 1 November 2025).
Mozilla Developer Network (2025) EventTarget.addEventListener(). Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 1 November 2025).

TreeWalker API (Search Functionality)

Mozilla Developer Network (2025) TreeWalker. Available at: https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker (Accessed: 2 November 2025).
W3Schools (no date) JavaScript HTML DOM Navigation. Available at: https://www.w3schools.com/js/js_htmldom_navigation.asp (Accessed: 2 November 2025).

Regular Expressions (Search Highlighting)

W3Schools (2025) JavaScript Regular Expressions. Available at: https://www.w3schools.com/js/js_regexp.asp (Accessed: 2 November 2025).
Mozilla Developer Network (2025) Regular expressions. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions (Accessed: 2 November 2025).

FormData API

Mozilla Developer Network (2025) FormData. Available at: https://developer.mozilla.org/en-US/docs/Web/API/FormData (Accessed: 2 November 2025).
W3Schools (no date) JavaScript FormData. Available at: https://www.w3schools.com/jsref/api_formdata.asp (Accessed: 2 November 2025).

CSS & Design
BEM Methodology

Yandex (2025) BEM — Block Element Modifier. Available at: https://en.bem.info/methodology/ (Accessed: 26 September 2024).

Flexbox Layout

W3Schools (2025) CSS Flexbox. Available at: https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 27 September 2024).
Mozilla Developer Network (2024) CSS Flexible Box Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout (Accessed: 27 September 2024).

Responsive Design

W3Schools (2025) CSS Responsive Web Design. Available at: https://www.w3schools.com/css/css_rwd_intro.asp (Accessed: 26 September 2025).

HTML5 Structure
Semantic HTML

W3Schools (2025) HTML5 Semantic Elements. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp (Accessed: 25 August 2024).
Mozilla Developer Network (2024) HTML elements reference. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element (Accessed: 25 August 2025).

Sitemap and Robots

SEOptimer. (2025) Robots.txt Generator. Available at: https://www.seoptimer.com/robots-txt-generator
 (Accessed: 2 November 2025).

SEOptimer Sitemap Generator
SEOptimer. (2025) Sitemap Generator. Available at: https://www.seoptimer.com/sitemap-generator
 (Accessed: 2 November 2025).

**Note**: This is a front-end demonstration project. For production use, implement proper backend authentication, database storage, and security measures.
