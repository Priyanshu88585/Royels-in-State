# Royels in State — Luxury Villa Experience

A premium React-based landing site to showcase luxury villas with immersive 3D visuals, smooth animations, and a glassmorphism UI.

## Project structure

src/
 ├── assets/
 │    └── project/
           ├── landing.jpg
 │         ├── hero.jpg
 │         ├── masterplan.jpg
 │         ├── clubhouse.jpg
 │         ├── team.jpg
 │
 ├── components/
 │    ├── layout/
 │    │    ├── MainLayout.jsx
 │    │    ├── Sidebar.jsx
 │    │    ├── Topbar.jsx
 │    │
 │    ├── ui/
 │    │    ├── MagneticButton.jsx
 │    │    ├── SectionReveal.jsx
 │    │    ├── PageTransition.jsx
 │    │
 │    ├── property/
 │    │    ├── PropertyCard.jsx
 │
 │    ├── sections/
 │    │    ├── WhyAvacasa.jsx
 │    │    ├── LocationMap.jsx
 │    │    ├── VillaShowcase.jsx
 │    │    ├── Masterplan.jsx
 │    │    ├── InvestmentROI.jsx
 │    │    ├── TeamSection.jsx
 │    │    ├── Testimonials.jsx
 │    │    ├── ScheduleVisit.jsx
 │    │    ├── BrochureCTA.jsx
 │    │    ├── FAQ.jsx
 │
 ├── data/
 │    ├── properties.json
 │    ├── testimonials.json
 │    ├── team.json
 │    ├── faq.json
 │
 ├── services/
 │    └── dataService.js
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── Listings.jsx
 │    ├── PropertyDetails.jsx
 │    ├── About.jsx
 │    ├── Contact.jsx
 │
 ├── App.jsx
 ├── main.jsx
 ├── index.css



## Overview
Royels in State is a high-end real estate landing platform focused on presenting nature-inspired luxury villas with a smooth, elegant, and interactive interface. The site combines cinematic hero experiences, 3D model viewing, polished UI animations, and conversion-focused sections (schedule visits, brochure CTA, testimonials).

## Key features
- Cinematic hero (3D model + video background)
- Glassmorphism UI and premium black theme
- Smooth page transitions and scroll reveal animations (Framer Motion)
- Custom mouse glow cursor and magnetic CTA buttons
- Villa showcase, masterplan auto-scroll, floor plans, and amenities
- Testimonials slider and team section
- Schedule Visit form (EmailJS)

## Tech stack
- React (Vite)
- Framer Motion
- Three.js / React Three Fiber
- Swiper.js
- Lenis (smooth scroll)
- CSS3 (glassmorphism)

## Installation
1. Clone the repo
     ```
     git clone https://github.com/yourusername/royels-in-state.git
     cd royels-in-state
     ```
2. Install dependencies
     ```
     npm install
     ```
3. Run the dev server
     ```
     npm run dev
     ```
     Open http://localhost:5173

## EmailJS (Schedule Visit form)
1. Create an EmailJS account: https://www.emailjs.com
2. Add an Email Service and create a template
3. Get Service ID, Template ID, and Public Key
4. Add those values to ScheduleVisit.jsx (or to environment variables) and ensure the form uses EmailJS to send submissions

## Important sections
- Hero (3D + video)
- Project highlights & masterplan
- Villa showcase & floor plans
- Investment ROI & pricing highlights
- Location map integration
- Team & testimonials
- Schedule Visit / contact form
- Brochure CTA

## Future enhancements
- Admin dashboard for property management
- Analytics integration
- Interactive 3D masterplan
- Mobile app version
- Booking & payment gateway

## Developer
Priyanshu Kesharwani — Full Stack Developer (React, UI/UX, 3D web)

- Portfolio: (add link)
- LinkedIn: (add link)
- GitHub: (add link)

## License
For educational and portfolio use.

## Support
If you find this project useful:
- Star the repository
- Share feedback or open issues
- Contribute improvements or features

