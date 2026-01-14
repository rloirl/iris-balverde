# My Website - Portfolio

A beautiful, modern portfolio website built with React, Tailwind CSS, and Bootstrap. This project showcases a responsive design with smooth animations, interactive components, and a clean aesthetic.

## 🎨 Design Specifications

- **Primary Background Color:** #FAF1E8
- **Navigation Background Color:** #FFDADB
- **Fonts:**
  - Libre Baskerville (Headings)
  - DM Sans (Body Text)

## 🚀 Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap** - Component library and grid system
- **Google Fonts** - Typography

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd "c:\Users\iris balverde\Downloads\My website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The application will be running at `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
My website/
├── Assets/                    # Images and design assets
│   ├── bg1.png               # Landing page background
│   ├── bg2.png               # About section background
│   ├── bg3.png               # Works section background
│   ├── bg4.png               # Experience section background
│   ├── obj1-butterfly.png    # Decorative sticker
│   ├── obj2-rabbit.png       # Decorative sticker
│   ├── obj4-flower.png       # Decorative sticker
│   ├── obj5-heart.png        # Decorative sticker
│   ├── obj6-dove.png         # Decorative sticker
│   ├── about1.jpg            # About carousel image 1
│   ├── about2.jpg            # About carousel image 2
│   ├── about3.jpg            # About carousel image 3
│   ├── work1.png             # Work portfolio image 1
│   ├── work2.png             # Work portfolio image 2
│   ├── services-cart.png     # Shopping cart icon
│   └── item1-5.png           # Service items
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   ├── Hero.jsx          # Landing/Hero section
│   │   ├── About.jsx         # About Me section
│   │   ├── Works.jsx         # Portfolio/Works section
│   │   ├── Services.jsx      # Services section with cart
│   │   ├── Experience.jsx    # Experience and skills
│   │   └── Footer.jsx        # Footer component
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## 🎯 Features

### Navigation
- Fixed navbar with smooth scroll navigation
- Mobile-responsive hamburger menu
- Custom pink (#FFDADB) background color

### Landing Page (Hero)
- Full-screen hero section with background image
- Animated decorative stickers (flower, butterfly, rabbit)
- Call-to-action buttons with smooth scroll
- Responsive typography

### About Me
- Interactive photo carousel with 3 images
- Smooth transition animations
- Statistics display (Years of Experience, Projects Done)
- Background with decorative heart sticker

### Works
- Portfolio grid with project cards
- Modal popup for detailed project information
- Hover effects and animations
- Technology tags for each project

### Services
- Grid of service offerings with pricing
- Interactive shopping cart functionality
- Add/remove items from cart
- Real-time price calculation
- Fixed floating cart button

### Experience
- Professional experience timeline
- Animated skill progress bars
- Certifications display
- Decorative dove animation

### Footer
- Quick links for navigation
- Social media icons
- Responsive grid layout

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'primary-bg': '#FAF1E8',
  'nav-bg': '#FFDADB',
}
```

### Changing Fonts

Fonts are imported in `index.html`. Update the Google Fonts link and modify `tailwind.config.js`:

```javascript
fontFamily: {
  'libre': ['Libre Baskerville', 'serif'],
  'dm-sans': ['DM Sans', 'sans-serif'],
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Navbar.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Tailwind responsive classes used:
- `sm:` - Small devices
- `md:` - Medium devices
- `lg:` - Large devices
- `xl:` - Extra large devices

## 🔧 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🌐 Preview Production Build

```bash
npm run preview
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎭 Animations

The website includes several custom animations:
- Floating decorative elements
- Smooth hover transitions
- Carousel slide transitions
- Progress bar animations
- Modal fade-in effects

## 🤝 Credits

- **Design:** Based on Figma prototype
- **Development:** Built with React, Tailwind CSS, and Bootstrap
- **Fonts:** Google Fonts (Libre Baskerville, DM Sans)
- **Icons:** SVG icons and custom assets

## 📝 License

This project is for portfolio purposes.

## 💡 Tips

1. Make sure all assets are in the `Assets` folder in the project root
2. Use the exact file names as specified in the components
3. For best performance, optimize images before using them
4. The project uses smooth scroll behavior - test on different browsers

## 🐛 Troubleshooting

### Images not showing?
- Check that assets are in the `Assets` folder (not `src/Assets`)
- Verify file names match exactly (case-sensitive)
- Clear browser cache and reload

### Styles not applying?
- Run `npm install` again
- Check that Tailwind is properly configured
- Restart the development server

### Development server not starting?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (should be v14+)

---

**Built with ❤️ by Iris**
