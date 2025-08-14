# 🎨 DEEKSHITHA JANGA - Portfolio Website

A beautiful, creative, and professional portfolio website built with React.js featuring smooth animations, interactive elements, and a modern design.

## ✨ Features

### 🎯 **Interactive Project Cards**
- **180° Flip Animation** - Click to see full project details
- **2x2 Grid Layout** - Perfect balance and visual appeal
- **Filterable Categories** - Web Development, IoT, Automation
- **Technology Tags** - Visual representation of skills used

### 🚀 **Smooth Animations**
- **Framer Motion** - Professional animations throughout
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Floating Elements** - Dynamic hero section with floating emojis
- **Hover Effects** - Interactive buttons and cards

### 📱 **Responsive Design**
- **Mobile-First** approach
- **Cross-Device** compatibility
- **Touch-Friendly** interactions
- **Optimized** for all screen sizes

### 🎨 **Modern UI/UX**
- **Gradient Backgrounds** - Beautiful color schemes
- **Glass Morphism** - Modern design elements
- **Smooth Transitions** - Professional feel
- **Custom CSS Variables** - Consistent theming

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion, AOS
- **Icons**: React Icons
- **Email**: EmailJS (Contact Form)
- **Routing**: React Router DOM

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── profile-photo.jpg    # Your profile photo here
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js        # Navigation bar
│   │   ├── Hero.js          # Hero section with photo
│   │   ├── About.js         # About & Education
│   │   ├── Skills.js        # Skills & Expertise
│   │   ├── Projects.js      # Project cards with flip
│   │   ├── Contact.js       # Contact form & info
│   │   └── Footer.js        # Footer with links
│   ├── App.js               # Main app component
│   └── App.css              # Global styles
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/deekshithajanga/myportfolio.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile photo**
   - Replace `public/profile-photo.jpg` with your actual photo
   - Recommended size: 500x500 pixels or larger
   - Format: JPG, PNG, or WebP

4. **Start development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails to your Gmail. To set it up:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
2. **Create a Gmail service**
3. **Create an email template**
4. **Update the Contact.js file with your keys:**
   ```javascript
   emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
   // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
   ```

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* ... more variables */
}
```

### Content
- **Hero Section**: Update name, title, and description
- **About Section**: Modify your story and education details
- **Skills**: Adjust skill levels and categories
- **Projects**: Add/remove projects and update descriptions
- **Contact**: Update contact information

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment

### Vercel (Recommended)
1. **Push to GitHub**
2. **Connect to Vercel**
3. **Automatic deployments**

### Netlify
1. **Build the project**: `npm run build`
2. **Deploy to Netlify**
3. **Custom domain support**

### GitHub Pages
1. **Build the project**: `npm run build`
2. **Deploy to GitHub Pages**
3. **Update package.json scripts**

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📸 Screenshots

- **Hero Section**: Profile photo with floating animations
- **Skills**: Animated progress bars with shimmer effects
- **Projects**: Interactive flip cards in 2x2 grid
- **Contact**: Functional email form with validation

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**DEEKSHITHA JANGA**
- Email: deekshithareddyj@gmail.com
- LinkedIn: [linkedin.com/in/deekshithajanga](https://linkedin.com/in/deekshithajanga)
- GitHub: [github.com/deekshithajanga](https://github.com/deekshithajanga)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **React Icons** for beautiful icons
- **EmailJS** for contact form functionality
- **Create React App** for the foundation

---

⭐ **Star this repository if you found it helpful!**
