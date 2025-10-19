# Personal Portfolio Website (No JavaScript)

A modern, responsive personal portfolio built with semantic HTML5 and modern CSS only. No JavaScript is used: all interactions (mobile navigation, smooth scrolling, back-to-top) are achieved with CSS.

## 🌟 Features

### Core Features
- Responsive, mobile-first layout
- Modern UI/UX with smooth CSS transitions
- System Dark/Light mode via `prefers-color-scheme`
- Native smooth scrolling (`scroll-behavior: smooth`)
- CSS-only hamburger menu (checkbox hack)
- Back-to-top anchor (no JS)

### Sections
1. **Header & Navigation**
   - Fixed navigation bar with smooth scrolling
   - Mobile hamburger menu (CSS-only)
   - Accessible semantics and focus styles

2. **Hero Section**
   - Personal introduction
   - Call-to-action buttons
   - Profile image

3. **About Section**
   - Personal background and experience
   - Statistics showcase
   - Professional image

4. **Skills Section**
   - Categorized skill sets (Frontend, Backend, Tools)
   - Progress bars using CSS custom properties
   - Skill percentage indicators

5. **Projects Section**
   - Project showcase with hover effects
   - Project images, descriptions, and technology tags
   - Links to live demos and source code

6. **Contact Section**
   - Contact information
   - Social media links
   - Form markup ready for backend integration (no client-side JS)

7. **Footer**
   - Copyright information
   - Back-to-top anchor

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic text editor (VS Code, Sublime Text, etc.)
- Optional: Local web server for development

### Installation

1. Customize Content
   - Edit `index.html` to add your personal information
   - Replace placeholder images in the `images/` folder
   - Update social media links and contact information

2. Open in Browser
   - Open `index.html` directly, or serve with any static server if preferred

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
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

## ⚡ Performance Notes

- Optimized CSS selectors and minimal redundancy
- Hardware-accelerated transforms when applicable
- Minimal dependencies (Font Awesome + Google Fonts)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔧 Technical Details

### Built With
- HTML5: Semantic markup and accessibility features
- CSS3: Grid, Flexbox, Custom Properties, prefers-color-scheme
- Font Awesome: Icon library
- Google Fonts: Inter font family

### Key Implementation Notes
- Theme: System `prefers-color-scheme` (no toggle button)
- Smooth Scrolling: CSS `scroll-behavior`
- Forms: No client-side JS validation (ready for backend)
- Mobile Navigation: CSS-only hamburger (checkbox hack)

## 📋 TODO / Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form backend
- [ ] Add more CSS animations
- [ ] Include testimonials section
- [ ] Add PWA features (would require JS)
- [ ] Add multi-language support
- [ ] Include analytics integration (would require JS)

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

**Made with ❤️ by Nguyễn Xuân Hải**

*Last updated: 2025-10-19*
