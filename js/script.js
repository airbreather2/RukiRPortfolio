// ==========================================================
// RUKIZM ART PORTFOLIO WEBSITE - MAIN JAVASCRIPT
// ==========================================================

// Wait for the DOM (Document Object Model) to be fully loaded before running any code
document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================
    // ELEMENT SELECTION - Getting references to HTML elements
    // ==========================================================
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get all page containers
    const pages = document.querySelectorAll('.page');
    
    // Get elements for the image modal functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    
    // Get contact form element
    const contactForm = document.getElementById('contactForm');
    
    // ==========================================================
    // INITIALIZATION - Setting up initial state
    // ==========================================================
    
    // Set current year in the footer automatically
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // ==========================================================
    // NAVIGATION FUNCTIONALITY - Handling page switching
    // ==========================================================
    
    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default link behavior (prevents page reload)
            e.preventDefault();
            
            // Get the target page ID from the data-page attribute
            const targetPage = link.getAttribute('data-page');
            
            // Hide all pages by removing the 'active' class
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the target page by adding the 'active' class
            document.getElementById(targetPage).classList.add('active');
        });
    });
    
    // ==========================================================
    // GALLERY MODAL FUNCTIONALITY - IMPROVED IMAGE HANDLING
    // ==========================================================
    
    // Handle image loading in the modal
    modalImg.onload = function() {
        // This ensures the modal dimensions adjust properly after the image loads
        modal.style.display = 'flex';
    };
    
    // Add click event listeners to all gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Show loading state (optional)
            modal.style.display = 'flex';
            
            // Get the source of the clicked image
            const imgSrc = item.querySelector('img').src;
            
            // Set the modal image source
            modalImg.src = imgSrc;
            
            // Prevent scrolling of the background when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when the close button (×) is clicked
    closeModal.addEventListener('click', () => {
        closeModalFunction();
    });
    
    // Close modal when clicking outside the image (on the dark background)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });
    
    // Add keyboard support for closing modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModalFunction();
        }
    });
    
    // Function to close the modal and restore scrolling
    function closeModalFunction() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // ==========================================================
    // CONTACT FORM FUNCTIONALITY - Form submission handling
    // ==========================================================
    
    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        // Prevent default form submission behavior (page reload)
        e.preventDefault();
        
        // Collect form data (in a real application, this would be sent to a server)
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // For demo purposes, just show an alert
        // NOTE: In a real application, you would send this data to a server
        alert('Thank you for your message! In a real application, this would be sent to the server.');
        
        // Reset the form fields after submission
        contactForm.reset();
    });
    
    // ==========================================================
    // IMAGE LOADING ENHANCEMENT - Smooth image appearance
    // ==========================================================
    
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    // Add loaded class when each image finishes loading
    galleryImages.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
    
    // ==========================================================
    // End of main script
    // ==========================================================
});