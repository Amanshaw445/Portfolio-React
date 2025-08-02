# Personal Portfolio Website using React + Tailwind CSS

## Overview

This is a modern, responsive personal portfolio website built with React and Tailwind CSS. The portfolio showcases my skills, projects, and experience as a Computer Science student and Frontend Developer.

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Smooth Scrolling Navigation**: One-page navigation with smooth scrolling between sections
- **Interactive Components**: Animated components using Framer Motion and Swiper carousel
- **Contact Form**: Functional contact form powered by EmailJS
- **Modern UI**: Gradient animations, glass morphism effects, and contemporary design elements
- **Section Toggle**: Easy navigation between sections with up/down buttons

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Framer Motion (for animations)
- Swiper (for carousel)
- React Icons
- EmailJS (for contact form)

### Development Tools
- Vite (build tool)
- ESLint (code linting)
- PostCSS
- Autoprefixer

### Dependencies
```json
{
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "chart.js": "^4.4.3",
    "framer-motion": "^12.23.12",
    "react": "^18.3.1",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.3.1",
    "react-icons": "^5.5.0",
    "react-scroll": "^1.9.3",
    "swiper": "^11.2.10"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.4",
    "vite": "^5.3.1"
  }
}
```

## Project Structure

```
Portfolio-React/
├── public/
│   ├── icon.png
│   ├── resume.pdf
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── aboutme-image.png
│   │   ├── hero-image.png
│   │   └── ...
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Sections

### Hero Section
- Personal introduction with name and title
- Brief description of expertise
- Social media links (GitHub, LinkedIn, Email)
- Profile image

### About Section
- Personal background information
- Educational details (B.Tech in Computer Science and Engineering)
- Professional focus (Frontend Development)
- Skill progress bars for HTML/CSS, React, and Node.js

### Skills Section
- **Programming Languages**: Java, JavaScript, Python, C++, C
- **Libraries & Frameworks**: React, Tailwind, Node.js, Bootstrap
- **Tools & Platforms**: VS Code, IntelliJ IDEA, Git, GitHub, Docker, Firebase
- **Databases**: MySQL

### Projects Section
- Project showcase with carousel
- Currently displays placeholders for upcoming projects
- GitHub links for each project

### Contact Section
- Contact information (email, location)
- Social media links
- Functional contact form with EmailJS integration
- Form validation and submission feedback

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd Portfolio-React
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Deployment

The portfolio can be deployed to various platforms:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check for code issues

## Contact Information

- **Name**: Aman Shaw
- **Email**: amanshaw871@gmail.com
- **Location**: West Bengal, India
- **LinkedIn**: [linkedin.com/in/amanshaw445](https://linkedin.com/in/amanshaw445)
- **GitHub**: [github.com/Amanshaw445](https://github.com/Amanshaw445)

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace images in the `src/assets/` folder
3. Modify the skills section with your own skills
4. Add your actual projects to the projects section
5. Update contact information and social links
6. Configure EmailJS with your own service ID and template ID

## License

© 2024 Aman Shaw. All rights reserved.

