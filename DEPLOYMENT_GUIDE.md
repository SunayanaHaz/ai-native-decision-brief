# GitHub Pages Deployment Guide
## Complete Step-by-Step Instructions for AINSE Website

---

## 📚 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Method 1: GitHub Web Interface (Recommended for Beginners)](#method-1-github-web-interface)
3. [Method 2: GitHub Desktop (Visual Git Tool)](#method-2-github-desktop)
4. [Method 3: Git Command Line (Advanced)](#method-3-git-command-line)
5. [Post-Deployment Steps](#post-deployment-steps)
6. [Customization Guide](#customization-guide)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### What You Need:
- ✅ A GitHub account (free) - Sign up at [github.com](https://github.com)
- ✅ The three website files:
  - `index.html`
  - `styles.css`
  - `script.js`
- ✅ (Optional) Your original DOCX and PPTX files
- ✅ A modern web browser (Chrome, Firefox, Safari, or Edge)

### Estimated Time: 10-15 minutes

---

## Method 1: GitHub Web Interface
### ⭐ Best for: Beginners, Quick Setup

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" in the top right
3. Follow the registration process:
   - Enter your email
   - Create a password
   - Choose a username (this will be in your site URL)
   - Verify your account via email

### Step 2: Create a New Repository
1. Once logged in, click the **"+"** icon in the top right
2. Select **"New repository"**
3. Fill in the repository details:
   - **Repository name**: `ainse-website` (or any name you prefer)
   - **Description**: "AI-Native Software Engineering presentation website"
   - **Visibility**: Select **Public** (required for free GitHub Pages)
   - **DO NOT** check "Add a README file" (we'll upload our own files)
4. Click **"Create repository"**

### Step 3: Upload Website Files
1. On the repository page, you'll see a quick setup page
2. Click **"uploading an existing file"** link
3. **Drag and drop** all three files into the upload area:
   - `index.html`
   - `styles.css`
   - `script.js`
   
   OR click **"choose your files"** and select them manually

4. Scroll down to the commit section
5. Add a commit message: `"Add AINSE website files"`
6. Click **"Commit changes"**

### Step 4: Enable GitHub Pages
1. Click on **"Settings"** tab (top menu bar)
2. In the left sidebar, scroll down and click **"Pages"**
3. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Choose **"main"** branch
   - Keep folder as **"/ (root)"**
4. Click **"Save"**

### Step 5: Wait for Deployment
1. You'll see a message: "GitHub Pages source saved"
2. **Wait 1-2 minutes** for the site to build
3. Refresh the Settings → Pages page
4. You should see a green box with your site URL:
   ```
   Your site is live at https://[your-username].github.io/ainse-website/
   ```
5. Click the URL to view your site!

### Step 6: (Optional) Upload Original Files
1. Go back to your repository main page
2. Click **"Add file"** → **"Create new file"**
3. Name it: `resources/.gitkeep` (this creates a folder)
4. Click "Commit changes"
5. Navigate into the `resources` folder
6. Click **"Add file"** → **"Upload files"**
7. Upload your DOCX and PPTX files
8. Commit the changes

---

## Method 2: GitHub Desktop
### ⭐ Best for: Visual learners, easier file management

### Step 1: Install GitHub Desktop
1. Download from [desktop.github.com](https://desktop.github.com)
2. Install the application
3. Open GitHub Desktop
4. Sign in with your GitHub account

### Step 2: Create New Repository
1. Click **"File"** → **"New repository"**
2. Fill in details:
   - **Name**: `ainse-website`
   - **Description**: "AI-Native Software Engineering website"
   - **Local path**: Choose where to save on your computer
   - Check **"Initialize this repository with a README"**
3. Click **"Create repository"**

### Step 3: Add Website Files
1. Click **"Show in Finder"** (Mac) or **"Show in Explorer"** (Windows)
2. Copy your three files into this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Return to GitHub Desktop
4. You'll see the files listed under "Changes"
5. In the bottom left:
   - Summary: `"Add AINSE website files"`
   - Description: (optional) add more details
6. Click **"Commit to main"**

### Step 4: Publish to GitHub
1. Click **"Publish repository"** (top bar)
2. Uncheck **"Keep this code private"**
3. Click **"Publish repository"**

### Step 5: Enable GitHub Pages
1. Open your web browser
2. Go to your repository on GitHub.com
3. Follow Steps 4-5 from Method 1 above

---

## Method 3: Git Command Line
### ⭐ Best for: Developers, those comfortable with terminal

### Step 1: Install Git
**Mac:**
```bash
# Git comes pre-installed, verify with:
git --version

# If not installed, install via Homebrew:
brew install git
```

**Windows:**
1. Download from [git-scm.com](https://git-scm.com/download/win)
2. Install with default settings
3. Open Git Bash

**Linux:**
```bash
sudo apt-get install git  # Ubuntu/Debian
sudo yum install git      # CentOS/RHEL
```

### Step 2: Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Create Local Repository
```bash
# Create and navigate to project directory
mkdir ainse-website
cd ainse-website

# Initialize Git repository
git init

# Copy your website files here (index.html, styles.css, script.js)

# Add all files to Git
git add .

# Commit the files
git commit -m "Initial commit: Add AINSE website files"
```

### Step 4: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create repository named `ainse-website`
3. Make it public
4. **DO NOT** initialize with README
5. Click "Create repository"

### Step 5: Push to GitHub
```bash
# Add remote repository
git remote add origin https://github.com/[your-username]/ainse-website.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 6: Enable GitHub Pages
```bash
# Use GitHub CLI (optional)
gh repo view --web

# Or open browser and follow Steps 4-5 from Method 1
```

---

## Post-Deployment Steps

### 1. Verify Your Site
- Wait 2-5 minutes after enabling GitHub Pages
- Visit your site URL: `https://[your-username].github.io/ainse-website/`
- Check all sections load correctly
- Test navigation links
- Verify responsive design on mobile

### 2. Update Download Links (Optional)
If you uploaded the DOCX and PPTX files:

1. Edit `index.html`
2. Find the Resources section (search for `id="resources"`)
3. Update the download links:
```html
<!-- Change from: -->
<a href="#" class="resource-link" id="download-doc">Download DOCX →</a>

<!-- To: -->
<a href="resources/Briefing_Report.docx" download class="resource-link">Download DOCX →</a>
```

### 3. Add Custom Domain (Optional)
1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. In GitHub: Settings → Pages → Custom domain
3. Enter your domain (e.g., `ainse.yourdomain.com`)
4. In your domain registrar, add DNS records:
   ```
   Type: CNAME
   Name: ainse (or www)
   Value: [your-username].github.io
   ```

### 4. Enable HTTPS
1. In Settings → Pages
2. Check **"Enforce HTTPS"**
3. Wait for certificate to be issued (may take a few minutes)

---

## Customization Guide

### Change Site Title
**File:** `index.html` (Line 6)
```html
<title>AI-Native Software Engineering | AINSE</title>
```

### Update Colors
**File:** `styles.css` (Lines 1-12)
```css
:root {
    --color-accent: #00d9ff;        /* Change to your brand color */
    --color-accent-secondary: #7000ff;
    /* ... */
}
```

### Modify Content
**File:** `index.html`

Find sections by their IDs:
- `id="overview"` - Introduction
- `id="applications"` - Applications grid
- `id="sdlc"` - Timeline
- `id="strategy"` - Recommendations

### Change Fonts
**File:** `index.html` (Line 9)
```html
<!-- Change Google Fonts URL -->
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

**File:** `styles.css` (Lines 10-11)
```css
--font-display: 'YourDisplayFont', sans-serif;
--font-mono: 'YourBodyFont', monospace;
```

---

## Troubleshooting

### ❌ Problem: Site shows 404 error
**Solutions:**
- Wait 5-10 minutes (initial deployment takes time)
- Check Settings → Pages shows "Your site is live"
- Verify repository is public
- Ensure files are in root directory, not a subfolder
- Check file names are exactly: `index.html`, `styles.css`, `script.js`

### ❌ Problem: Styling looks broken
**Solutions:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check all 3 files are uploaded
- Verify file names have correct capitalization
- Open browser console (F12) to check for errors

### ❌ Problem: Download links don't work
**Solutions:**
- Ensure files are uploaded to `resources` folder
- Update file paths in `index.html`
- Use relative paths: `./resources/filename.ext`
- Verify file names match exactly

### ❌ Problem: Changes don't appear
**Solutions:**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear browser cache
- Try incognito/private browsing mode
- Check commit was successful in repository

### ❌ Problem: Site URL doesn't work
**Format should be:**
```
https://[username].github.io/[repository-name]/
```

**Example:**
```
https://johndoe.github.io/ainse-website/
```

---

## Additional Resources

### GitHub Pages Documentation
- [Official Docs](https://docs.github.com/en/pages)
- [Quickstart Guide](https://docs.github.com/en/pages/quickstart)

### Learning Resources
- [GitHub Learning Lab](https://lab.github.com/)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)
- [HTML/CSS Guide](https://developer.mozilla.org/en-US/docs/Learn)

### Support
- [GitHub Community Forum](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

## Next Steps

1. ✅ Deploy your site using one of the methods above
2. ✅ Share the URL with your audience
3. ✅ Customize colors and content to match your brand
4. ✅ Add analytics to track visitors
5. ✅ Consider adding more interactive features

---

## Quick Reference Commands

### Update Site (Command Line)
```bash
# Make changes to files
git add .
git commit -m "Update content"
git push
```

### Check Deployment Status
```bash
# View in browser
open https://[username].github.io/[repo-name]/

# Check repository
gh repo view --web
```

### Clone to Another Computer
```bash
git clone https://github.com/[username]/ainse-website.git
cd ainse-website
# Make changes, then:
git add .
git commit -m "Description of changes"
git push
```

---

**🎉 Congratulations!** You now have a professional website deployed on GitHub Pages!

**Questions?** Open an issue in your GitHub repository or consult the resources above.
