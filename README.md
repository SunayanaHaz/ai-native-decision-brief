# AI-Native Software Engineering (AINSE) Website

A modern, tech-forward website showcasing AI-Native Software Engineering concepts, built for GitHub Pages.

## 🌐 Live Demo

Once deployed, your site will be available at: `https://[your-username].github.io/[repository-name]/`

## 📋 Features

- **Distinctive Design**: Bold, tech-forward aesthetic with custom animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll effects
- **Animated Elements**: Fade-in animations and parallax effects
- **Content Sections**:
  - Overview of AINSE
  - AI Applications Across Development
  - SDLC Transformation
  - Business Problems & Solutions
  - Strategic Recommendations
  - Developer Role Evolution
  - Key Benefits
  - Downloadable Resources

## 🚀 Quick Start - GitHub Pages Deployment

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create a New Repository**
   - Go to [GitHub](https://github.com)
   - Click the "+" icon → "New repository"
   - Name it (e.g., `ainse-website`)
   - Make it public
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository "Settings"
   - Scroll to "Pages" (left sidebar)
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait 1-2 minutes for deployment
   - Your site URL will appear at the top

4. **Optional: Add Original Files**
   - Create a folder called `resources`
   - Upload your DOCX and PPTX files there
   - Update download links in `index.html`

### Option 2: Using Git Command Line

```bash
# 1. Create a new directory and navigate to it
mkdir ainse-website
cd ainse-website

# 2. Initialize Git repository
git init

# 3. Copy the website files (index.html, styles.css, script.js) to this directory

# 4. Add files to Git
git add .
git commit -m "Initial commit: AINSE website"

# 5. Create a new repository on GitHub (via web interface)
# Then link it:
git remote add origin https://github.com/[your-username]/[repository-name].git

# 6. Push to GitHub
git branch -M main
git push -u origin main

# 7. Enable GitHub Pages via Settings → Pages → Source: main branch
```

## 📁 File Structure

```
ainse-website/
│
├── index.html          # Main HTML file with all content
├── styles.css          # Complete styling and animations
├── script.js           # JavaScript for interactions
├── README.md           # This file
│
└── resources/          # (Optional) Original files
    ├── Briefing_Report.docx
    └── Presentation.pptx
```

## 🎨 Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-accent: #00d9ff;        /* Primary accent color */
    --color-accent-secondary: #7000ff;  /* Secondary accent */
    --color-bg: #0a0e14;            /* Background color */
    /* ... other colors ... */
}
```

### Update Content

All content is in `index.html`. Search for section IDs:
- `#overview` - Introduction section
- `#applications` - Applications grid
- `#sdlc` - SDLC timeline
- `#strategy` - Recommendations
- `#resources` - Download links

### Add Download Links

Update the resource links in the Resources section (search for `id="download-doc"`):

```html
<a href="resources/Briefing_Report.docx" download class="resource-link">Download DOCX →</a>
<a href="resources/Presentation.pptx" download class="resource-link">Download PPTX →</a>
```

## 🔧 Advanced Configuration

### Custom Domain

1. Buy a domain from any registrar
2. In your repository, go to Settings → Pages
3. Add your custom domain
4. Update DNS records (A records or CNAME)

### Analytics

Add Google Analytics by inserting before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🌟 Design Philosophy

This website features:
- **Typography**: Syne (display) + JetBrains Mono (body) for a tech-forward feel
- **Color Scheme**: Dark theme with cyan/purple accents
- **Layout**: Asymmetric sections with generous spacing
- **Animation**: Subtle fade-ins and parallax effects
- **Code Aesthetic**: Terminal-inspired elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

**Site not showing up?**
- Wait 2-5 minutes after enabling GitHub Pages
- Check Settings → Pages for deployment status
- Ensure repository is public

**Download links not working?**
- Make sure files are uploaded to the repository
- Check file paths are correct
- Use relative paths (e.g., `./resources/file.pdf`)

**Styling looks broken?**
- Clear browser cache
- Check all three files (HTML, CSS, JS) are uploaded
- Verify file names match exactly

## 📄 License

This website template is free to use and modify for your presentations.

## 👥 Credits

**Content**: Sahil Dua, Sunayana Hazarika  
**Design & Development**: Custom built for AINSE presentation

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

---

**Need Help?** Open an issue in this repository or check the [GitHub Pages documentation](https://docs.github.com/en/pages).
