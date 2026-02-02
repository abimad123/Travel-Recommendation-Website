# Travel Recommendation Website

A complete, responsive travel recommendation website showcasing beautiful destinations around the world. Built with HTML5, CSS3, and JavaScript, and ready for GitHub Pages deployment.

## 🌟 Features

- **Three Complete Pages**:
  - Home page with travel recommendations
  - About Us page explaining the website's mission
  - Contact Us page with a functional contact form

- **Travel Recommendations**:
  - Beach destinations (Maldives)
  - Temple destinations (Angkor Wat, Cambodia)
  - Country destinations (Japan)

- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices

- **Interactive Elements**:
  - Smooth navigation between pages
  - Form validation on contact page
  - Image hover effects
  - Console logging for debugging

## 📁 Project Structure

```
travel-website/
├── index.html          # Home page
├── about.html          # About Us page
├── contact.html        # Contact Us page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── images/             # Image assets folder
│   ├── beach1.jpg
│   ├── beach2.jpg
│   ├── temple1.jpg
│   ├── temple2.jpg
│   ├── country1.jpg
│   └── country2.jpg
└── README.md          # This file
```

## 🚀 GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `travel-recommendation-website`)
5. Make it public
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using Git (Command Line)**

```bash
# Navigate to your project folder
cd path/to/travel-website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Travel Recommendation Website"

# Add remote repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Web Interface**

1. On your repository page, click "uploading an existing file"
2. Drag and drop all your files (or click to select them)
3. Make sure to maintain the folder structure (create `images` folder)
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "main" branch
5. Select "/ (root)" as the folder
6. Click "Save"
7. Wait a few minutes for deployment

Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## 💻 Local Development

To run this website locally:

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Navigate between pages using the navigation menu

No build process or server required!

## 🎨 Customization

### Changing Colors

Edit `style.css` and modify the color values:
- Primary blue: `#3498db`
- Dark background: `#2c3e50`
- Gradient backgrounds: Modify gradient values in `.hero` and `.page-header`

### Adding More Destinations

1. Copy a recommendation section in `index.html`
2. Update the text content
3. Add new images to the `images/` folder
4. Update image src attributes

### Updating Contact Form

The contact form currently logs submissions to the console. To make it functional:
1. Use a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)
2. Or implement a backend with Node.js/PHP to handle form submissions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, gradients, transitions
- **JavaScript**: Form validation, event handling, DOM manipulation
- **Responsive Design**: Mobile-first approach

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

Created as a final project for web development course.

## 🙏 Acknowledgments

- Images are placeholders created for demonstration
- Design inspired by modern travel websites
- Built following web development best practices

---

**Enjoy exploring the world! ✈️🌍**