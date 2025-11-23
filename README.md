# boring-portfolio

A minimal, clean portfolio website with a built-in static blog generator. Perfect for developers who want a simple, no-frills portfolio that focuses on content over flashy design.

## ✨ Features

- **Clean & Minimal Design** - A "boring" but professional look inspired by Linux/Hyprland aesthetics
- **Static Blog Generator** - Write blog posts in Markdown and generate HTML automatically
- **Responsive Layout** - Works seamlessly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnujDagade/boring-portfolio.git
cd boring-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Build the blog:
```bash
npm run build
```

4. Open `index.html` in your browser to view portfolio!

## 📝 Usage

### Customizing Your Portfolio

Edit `index.html` to update your personal information:

- **Profile Information** - Update name, role, location, and description
- **Social Links** - Change LinkedIn and GitHub URLs
- **Skills** - Modify the skills in each category
- **Projects** - Add or update your project descriptions
- **Contact** - Update your email address

### Writing Blog Posts

1. Create a new Markdown file in the `blogs/` directory:

```markdown
---
title: Your Blog Post Title
date: 2025-11-22
description: A brief description of your post
---

# Your Blog Post Title

Your content goes here...
```

2. Run the build command:
```bash
npm run build
```

3. Your blog post will be generated in the `blog/` directory and will appear in the blog index!

### Styling

Customize the look and feel by editing `style.css`. The design uses:
- **Font**: JetBrains Mono (from Google Fonts)
- **Color Scheme**: Dark theme with subtle borders and shadows
- **Layout**: Centered container with max-width for readability


## 🛠️ Customization Guide

### Adding New Sections

To add a new section to your portfolio:

1. Add a navigation link in the `<nav>` section
2. Create a new `<section>` with a unique ID
3. Style it in `style.css` following the existing patterns

### Modifying Blog Templates

Edit the templates in the `templates/` directory:
- `blog-post.html` - Individual blog post layout
- `blog-index.html` - Blog listing page layout

### Changing Colors

The main color variables are in `style.css`. Key colors:
- Background: `#0d0d0d`
- Text: `#e0e0e0`
- Borders: `#262626`
- Accent: Various blues for links and highlights

## 📜 License

ISC License - Feel free to use this template for your own portfolio!

## 👤 Author

**Anuj Dagade**
- LinkedIn: [anuj-dagade](https://linkedin.com/in/anuj-dagade)
- GitHub: [@anujdagade](https://github.com/anujdagade)
- Email: dagadeanuj@gmail.com

## 🤝 Contributing

Feel free to fork this project and make it your own! If you have suggestions for improvements, please open an issue or submit a pull request.

---

Made with ❤️ for developers who appreciate simplicity
