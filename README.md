# PROJECT X01

## Run the website

Install Node.js first, then start the site with either the Windows launcher or npm:

```powershell
start-x01.bat
# or
npm start
```

Then open `http://localhost:3000`. Contact form submissions are saved in `data/contact-messages.json`.

## Website

- Open the site to browse the complete entertainment experience from one page.
- The home page combines the hero, category libraries, trending content, about section, FAQ, and contact section.
- No login form is included in the public website.
- Contact messages are saved in `data/contact-messages.json`.

## Administrator access

The account `nadirkibs@gmail.com` is the initial administrator. After logging in, open `http://localhost:3000/admin.html` to access the admin dashboard.

Administrators can:

- View registered users without password hashes being exposed.
- View contact messages.
- Change another user's role between `user` and `admin`.
- Keep their own administrator role; self-demotion is blocked.

Regular users can:

- Browse the protected entertainment pages.
- Submit contact messages.
- Never access the admin dashboard or admin API.

## Overview
PROJECT X01 is a single-page entertainment website that brings movies, music, anime, football, news, and supporting information together in one polished experience.

## Project Structure
```
NADIR
└── PROJECT X01
    ├── index.html       # Complete public entertainment experience
    ├── css
    │   └── styles.css   # Shared visual styles
    ├── js
    │   └── script.js     # Shared navigation enhancement
    └── README.md        # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, etc.)
- A code editor (optional, for modifications)

### Installation
1. Clone the repository or download the project files.
2. Navigate to the `PROJECT X01` folder.

### Running the Project
1. Start the server with `npm start`.
2. Open `http://localhost:3000` to browse the complete website.
3. You can modify the styles in `css/styles.css` and the functionality in `index.html` as needed.

## Features
- Single-page navigation across all entertainment categories.
- Searchable trending content and category libraries.
- About, FAQ, and contact sections included in the same page.
- Responsive layout with mobile navigation.

## Notes
- The administrator dashboard and authentication API remain available for server administration, but no login form is part of the public website.