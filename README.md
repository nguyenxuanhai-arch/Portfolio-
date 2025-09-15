# [Personal Portfolio Website](https://scalix.dev/)

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features a clean design, smooth animations, and comprehensive sections to showcase your skills and projects.

## 🌟 Features

### Core Features
- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- **Smooth Scrolling**: Elegant navigation between sections
- **Interactive Elements**: Hover effects, animations, and dynamic content

### Sections
1. **Header & Navigation**
   - Fixed navigation bar with smooth scrolling
   - Mobile hamburger menu
   - Active section highlighting
   - Theme toggle button

2. **Hero Section**
   - Personal introduction with animated typing effect
   - Call-to-action buttons
   - Professional profile image

3. **About Section**
   - Personal background and experience
   - Statistics showcase
   - Professional image

4. **Skills Section**
   - Categorized skill sets (Frontend, Backend, Tools)
   - Animated progress bars
   - Skill percentage indicators

5. **Projects Section**
   - Project showcase with hover effects
   - Project images, descriptions, and technology tags
   - Links to live demos and source code

6. **Contact Section**
   - Contact information
   - Social media links
   - Working contact form with validation
   - Interactive form feedback

7. **Footer**
   - Copyright information
   - Back-to-top button

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic text editor (VS Code, Sublime Text, etc.)
- Optional: Local web server for development

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Customize Content**
   - Edit `index.html` to add your personal information
   - Replace placeholder images in the `images/` folder
   - Update social media links and contact information

3. **Optional: Use a Local Server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:8000` or open `index.html` directly

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Documentation
└── images/             # Image assets
    ├── profile-placeholder.jpg
    ├── about-placeholder.jpg
    ├── project1-placeholder.jpg
    ├── project2-placeholder.jpg
    ├── project3-placeholder.jpg
    └── project4-placeholder.jpg
```

## 🎨 Customization Guide

### Personal Information
1. **Update HTML Content**
   - Replace "Your Name" with your actual name
   - Update hero description and about section
   - Add your skills and experience
   - Update project information

2. **Replace Images**
   - Add your profile photo as `images/profile.jpg`
   - Add project screenshots
   - Update image file names in HTML if needed

3. **Update Links**
   - Add your social media profiles
   - Update project demo and repository links
   - Add your email and contact information

### Colors and Styling
The website uses CSS variables for easy customization:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #64748b;    /* Secondary elements */
    --accent-color: #f59e0b;       /* Accent highlights */
    --text-color: #1f2937;         /* Main text color */
    --bg-color: #ffffff;           /* Background color */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu if needed
4. Add scroll animations in `script.js`

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Flexible grid layouts using CSS Grid and Flexbox
- Responsive typography with relative units
- Mobile navigation menu
- Optimized images and performance
- Touch-friendly interactive elements

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Features

- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Smooth Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Images load as needed
- **Minimal Dependencies**: Only Font Awesome for icons
- **Compressed Assets**: Optimized file sizes

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Technical Details

### Built With
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern features including Grid, Flexbox, and Custom Properties
- **Vanilla JavaScript**: No frameworks, pure ES6+ features
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

### Key Features Implementation
- **Theme Switching**: CSS custom properties with localStorage
- **Smooth Scrolling**: Native CSS `scroll-behavior` with JS fallback
- **Form Validation**: Client-side validation with user feedback
- **Intersection Observer**: Efficient scroll-based animations
- **Mobile Navigation**: CSS-based hamburger menu

## 📋 TODO / Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form backend
- [ ] Add more animation options
- [ ] Include testimonials section
- [ ] Add PWA features
- [ ] Implement service worker for offline support
- [ ] Add multi-language support
- [ ] Include analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across browsers
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern web design trends
- Community feedback and suggestions

## 📞 Support

If you have questions or need help customizing your portfolio:

1. Check the documentation above
2. Open an issue on GitHub
3. Contact: your.email@example.com

---

**Made with ❤️ by [Your Name]**

*Last updated: [Current Date]*
