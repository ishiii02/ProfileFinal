# CluzaProfileFinal

A simple and professional portfolio website built with MVC architecture.

## Tech Stack

- Backend: Node.js + Express
- Frontend: EJS (Embedded JavaScript templates)
- Styling: Tailwind CSS
- Architecture: MVC (Model-View-Controller)

## Features

- Home page
- About page
- Skills page
- Projects page
- Contact page
- Responsive and mobile-friendly design
- Cross-platform compatibility

## Project Structure

```
cluzaprofilefinal/
+-- /data                    # Static data (JSON files)
+-- /public                  # Static assets
¦   +-- /css                 # Compiled CSS (Tailwind output)
¦   +-- /js                  # Custom JavaScript
¦   +-- /images              # Optimized images
¦   +-- /favicons
+-- /views                   # EJS templates
¦   +-- /partials            # Reusable template parts
¦   +-- layout.ejs           # Base template
¦   +-- home.ejs
¦   +-- about.ejs
¦   +-- skills.ejs
¦   +-- projects.ejs
¦   +-- contact.ejs
+-- /controllers             # Request handlers
+-- /services                # Business logic / data processing
+-- /middleware              # Custom Express middleware
+-- /routes                  # Route definitions
+-- /utils                   # Helper functions
+-- server.js                # Entry point
+-- package.json
+-- README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build:css
   npm start
   ```

