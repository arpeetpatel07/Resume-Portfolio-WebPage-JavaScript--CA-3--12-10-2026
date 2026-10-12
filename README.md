# Arpeet Patel — Professional Portfolio Website
### CA3 Mini Project | JavaScript | PRN: 24070521218
### Symbiosis Institute of Technology, Nagpur

---

## 🌐 Live Demo
> Deploy to GitHub Pages (see deployment instructions below) to get your live URL:
> `https://arpeetpatel07.github.io/portfolio/`

---

## 📁 Project Structure

```
portfolio-website/
│
├── index.html                  ← Main HTML file (single-page portfolio)
│
├── css/
│   ├── style.css               ← Main styles, design tokens, all component styles
│   └── responsive.css          ← Responsive breakpoints (mobile, tablet, desktop)
│
├── js/
│   ├── data.js                 ← All portfolio data (resume content as JS objects/arrays)
│   ├── projects.js             ← Dynamic project card renderer + modal
│   ├── validation.js           ← Contact form validation
│   └── main.js                 ← Core features (theme, nav, typing, scroll, etc.)
│
├── assets/
│   ├── images/
│   │   └── profile.jpg         ← Profile photo
│   ├── projects/
│   │   ├── demandvision.jpg
│   │   ├── aqi-forecasting.jpg
│   │   └── blockchain-tracker.jpg
│   ├── certificates/           ← Add certificate images here
│   └── resume/
│       └── Arpeet_Patel_Resume.pdf   ← ⚠ Add your actual resume PDF here
│
├── README.md                   ← This file
└── VIVA_PREPARATION.md         ← 25 Q&A for CA3 viva preparation
```

---

## ✨ Features

### 🎨 Design
- Premium warm ivory + deep navy color scheme with royal blue & violet accents
- Full **dark / light mode** toggle with `localStorage` persistence
- **Space Grotesk** (headings) + **Inter** (body) + **JetBrains Mono** (code)
- Glassmorphism navbar, floating profile chips, smooth gradient highlights
- Soft card shadows, rounded corners, elegant micro-animations

### ⚡ JavaScript Features (Viva-Ready)
| # | Feature | File | API / Concept |
|---|---------|------|---------------|
| 1 | Dark/Light Theme Toggle | `main.js` | `localStorage`, DOM manipulation |
| 2 | Typing Animation | `main.js` | `setTimeout`, string methods |
| 3 | Mobile Hamburger Menu | `main.js` | Event listeners, classList |
| 4 | Active Nav Highlighting | `main.js` | Intersection Observer API |
| 5 | Smooth Scrolling | `main.js` | Event listeners, `scrollTo` |
| 6 | Scroll-Triggered Animations | `main.js` | Intersection Observer API |
| 7 | Back-to-Top Button | `main.js` | Scroll events, classList |
| 8 | Counter Animation | `main.js` | `requestAnimationFrame` |
| 9 | Dynamic Project Cards | `projects.js` | `Array.map()`, DOM creation |
| 10 | Project Category Filter | `projects.js` | `Array.filter()`, events |
| 11 | Project Detail Modal | `projects.js` | Modal, keyboard events |
| 12 | Form Validation | `validation.js` | Regex, DOM, error messages |
| 13 | Real-time Field Feedback | `validation.js` | `blur`/`input` events |
| 14 | Character Counter | `validation.js` | `input` event, textContent |
| 15 | Skills Dynamic Render | `main.js` | `Object.entries()`, `map()` |
| 16 | Certificate Filtering | `main.js` | `Array.filter()`, events |
| 17 | Achievements Render | `main.js` | `Array.map()`, DOM |
| 18 | Education Timeline Render | `main.js` | Data rendering, DOM |
| 19 | Dynamic Copyright Year | `main.js` | `Date` object |
| 20 | Reduced Motion Support | `main.js` | `matchMedia` API |

---

## 🚀 How to Run Locally

### Option 1: VS Code Live Server (Recommended)
1. Open the project folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens at `http://127.0.0.1:5500`

### Option 2: Python Simple Server
```bash
# Python 3
python -m http.server 8000
# Then open: http://localhost:8000
```

### Option 3: Node.js serve
```bash
npx serve .
```

> ⚠ **Do NOT open `index.html` directly as `file:///`** — some browsers may block local font loading.

---

## 📄 Before Using: Add Your Resume PDF

1. Place your actual resume PDF file at:
   ```
   assets/resume/Arpeet_Patel_Resume.pdf
   ```
2. The "View Resume" and "Download Resume" buttons will then work correctly.

---

## 🌍 GitHub Pages Deployment

### Step 1: Create GitHub Repository
```bash
# Go to https://github.com/arpeetpatel07 and create a new repo named: portfolio
```

### Step 2: Initialize Git and Push
```bash
# Navigate to your project folder
cd "path/to/Resume Portfolio WebPage JavaScript (CA-3) 12-10-2026"

# Initialize Git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Complete portfolio website"

# Add remote (replace USERNAME with arpeetpatel07)
git remote add origin https://github.com/arpeetpatel07/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at: `https://arpeetpatel07.github.io/portfolio/`

> ⏱ It may take 1–3 minutes to deploy after saving.

---

## 📦 Technologies Used
- **HTML5** — Semantic structure, accessibility attributes
- **CSS3** — Custom properties, Grid, Flexbox, animations, dark mode
- **Vanilla JavaScript (ES6+)** — All interactivity, no frameworks
- **Google Fonts** — Space Grotesk, Inter, JetBrains Mono

---

## 📋 Sections Included
- [x] Hero / Home
- [x] About Me
- [x] Education Timeline
- [x] Technical Skills
- [x] Projects (with filtering & modal)
- [x] Achievements
- [x] Certifications (with filtering)
- [x] Experience & Career Goals
- [x] Activities & Contributions
- [x] Resume Download & View
- [x] Contact Form (with validation)
- [x] Footer with social links

---

## 🎓 CA3 Evaluation

| Criterion | Marks | Status |
|-----------|-------|--------|
| Webpage / Portfolio | 2.5 | ✅ Complete |
| Viva Preparation | 2.0 | ✅ See VIVA_PREPARATION.md |
| GitHub Link | 0.5 | ✅ Deploy to GitHub Pages |

---

## 📞 Contact
**Arpeet Patel**
- Email: arpeetpatel192006@gmail.com
- GitHub: https://github.com/arpeetpatel07
- LinkedIn: https://www.linkedin.com/in/arpeet-patel-249822320
- Institution: Symbiosis Institute of Technology, Nagpur
- PRN: 24070521218

---

*Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript | CA3 Mini Project 2026*
