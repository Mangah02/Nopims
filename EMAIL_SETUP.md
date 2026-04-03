# Email Setup Instructions for NOPIMS Youth Group Website

## Current Status
The contact form is configured to send emails directly to `nopimsyouthgroup@gmail.com` without requiring users to open their email client.

## Setup Options

### Option 1: Web3Forms (Recommended - Free & Easy)
1. Go to https://web3forms.com
2. Create a free account
3. Get your access key
4. Replace `your_web3forms_access_key` in `/src/pages/ContactPage/ContactPage.tsx` line 46
5. Configure your email address in the Web3Forms dashboard

### Option 2: Formspree (Alternative - Free)
1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Get your form ID
5. Replace the Web3Forms code with Formspree code

### Option 3: EmailJS (Popular - Free tier available)
1. Go to https://www.emailjs.com
2. Create a free account
3. Set up email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your service ID, template ID, and user ID
6. Replace the Web3Forms code with EmailJS code

## Current Implementation
The form currently uses Web3Forms API with the following structure:
- API Endpoint: https://api.web3forms.com/submit
- Recipient: nopimsyouthgroup@gmail.com
- Fields: name, email, phone, service, message

## Testing
1. Fill out the contact form on the website
2. Click "Send Message"
3. Check your email inbox for the submission
4. Verify all form data is included correctly

## Troubleshooting
- If emails don't arrive, check your spam folder
- Verify the access key is correctly configured
- Ensure the email address is properly set up in the service dashboard
- Check browser console for any error messages

## Security Notes
- The access key should be kept secure
- Consider implementing CAPTCHA for production use
- Monitor for spam submissions
