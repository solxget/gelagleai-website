document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Using FormSubmit.co service to handle the email
            // The actual email is encoded in the endpoint
            const endpoint = 'https://formsubmit.co/' + atob('c29seGdldEBnbWFpbC5jb20=');
            
            // Create a hidden form that will submit to FormSubmit
            const hiddenForm = document.createElement('form');
            hiddenForm.style.display = 'none';
            hiddenForm.method = 'POST';
            hiddenForm.action = endpoint;
            
            // Add the form fields
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'name';
            nameInput.value = name;
            hiddenForm.appendChild(nameInput);
            
            const emailInput = document.createElement('input');
            emailInput.type = 'email';
            emailInput.name = 'email';
            emailInput.value = email;
            hiddenForm.appendChild(emailInput);
            
            const subjectInput = document.createElement('input');
            subjectInput.type = 'text';
            subjectInput.name = '_subject';
            subjectInput.value = 'ገላግሌAI Contact: ' + subject;
            hiddenForm.appendChild(subjectInput);
            
            const messageInput = document.createElement('textarea');
            messageInput.name = 'message';
            messageInput.value = message;
            hiddenForm.appendChild(messageInput);
            
            // Add a hidden field for redirect after submission
            const redirectInput = document.createElement('input');
            redirectInput.type = 'hidden';
            redirectInput.name = '_next';
            redirectInput.value = window.location.href;
            hiddenForm.appendChild(redirectInput);
            
            // Prevent captcha
            const captchaInput = document.createElement('input');
            captchaInput.type = 'hidden';
            captchaInput.name = '_captcha';
            captchaInput.value = 'false';
            hiddenForm.appendChild(captchaInput);
            
            // Add the form to the document and submit it
            document.body.appendChild(hiddenForm);
            
            // Show success message
            formMessage.textContent = 'መልእክትዎ በተሳካ ሁኔታ ተልኳል። በቅርቡ እናገኝዎታለን።';
            formMessage.className = 'form-message success';
            
            // Reset the form
            contactForm.reset();
            
            // Submit the hidden form
            hiddenForm.submit();
        });
    }
});
