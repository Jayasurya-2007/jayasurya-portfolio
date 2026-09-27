# Jayasurya S — Full Stack Portfolio

Professional + clean React portfolio with a white/blue theme, subtle animations, responsive layout, and a Node.js contact-form backend.

## Included

- Home
- About
- Skills
- Projects
- Education
- Contact
- GitHub / LinkedIn links
- Circular profile photo
- Resume placeholder
- Gmail contact form
- Mobile responsive navigation

## 1. Frontend setup

Open a terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

## 2. Backend setup

Open another terminal:

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and fill in your Gmail App Password.

Then:

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

## 3. Gmail setup

For Gmail sending, use a Google App Password rather than your normal Gmail password.

Set:

```text
EMAIL_USER=JAYASURYA934469@GMAIL.COM
EMAIL_PASS=your_app_password
EMAIL_TO=JAYASURYA934469@GMAIL.COM
```

Never upload `.env` to GitHub.

## 4. Resume

Place your resume PDF at:

```text
frontend/public/resume.pdf
```

The Download Resume button is already connected to it.

## 5. Profile photo

Your uploaded profile photo is already included as:

```text
frontend/public/profile.jpg
```

## 6. Deployment

Frontend can be deployed on Vercel or Netlify.

Backend can be deployed on a Node.js-compatible hosting platform.

After deploying the backend, set this frontend environment variable:

```text
VITE_API_URL=https://your-backend-domain.com
```

Then rebuild the frontend.

## Personal details used

Name: Jayasurya S  
Title: Full Stack Developer & AI Engineer  
Location: Chennai, Tamil Nadu, India  
Education: B.E. Computer Science and Engineering, Panimalar Engineering College  
Expected graduation: 2028  
GitHub: Jayasorya-2007  
LinkedIn: jayasurya-s-b50302343
