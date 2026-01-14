# 🎨 Customization Guide

Complete guide to personalizing your portfolio website.

---

## 🖋️ Changing Text Content

### 1. Hero Section (Landing Page)

**File**: [src/components/Hero.jsx](src/components/Hero.jsx)

```jsx
// Change your name
<h1>Hello, I'm <span>Iris</span></h1>
//              Change to your name ↑

// Change your description
<p>A passionate creative designer and developer...</p>
// ↑ Update this text

// Change button text
<button>View My Work</button>
<button>About Me</button>
```

### 2. About Me Section

**File**: [src/components/About.jsx](src/components/About.jsx)

```jsx
// Update introduction
<h3>Hi There! 👋</h3>

<p>I'm a creative designer and developer...</p>
// ↑ Write your own bio

// Change statistics
<h4>5+</h4>  // Years of experience
<h4>50+</h4> // Number of projects
```

### 3. Works/Portfolio

**File**: [src/components/Works.jsx](src/components/Works.jsx)

```jsx
const works = [
  {
    id: 1,
    title: 'Project Alpha',           // ← Change project name
    description: 'A stunning web...',  // ← Change description
    category: 'Web Design',            // ← Change category
    technologies: ['React', 'Tailwind'], // ← Update tech stack
    details: 'Full project details...' // ← Detailed description
  },
  // Add more projects...
];
```

### 4. Services

**File**: [src/components/Services.jsx](src/components/Services.jsx)

```jsx
const services = [
  {
    id: 1,
    name: 'Web Design',           // ← Service name
    description: 'Custom website...', // ← Service description
    price: '$500',                 // ← Your pricing
    icon: '🎨'                    // ← Change emoji
  },
  // Add more services...
];
```

### 5. Experience

**File**: [src/components/Experience.jsx](src/components/Experience.jsx)

```jsx
const experiences = [
  {
    period: '2021 - Present',     // ← Date range
    role: 'Senior UI/UX Designer', // ← Your job title
    company: 'Creative Studio',    // ← Company name
    description: '...',            // ← Job description
    achievements: [                // ← Your achievements
      'Led redesign...',
      'Established design system...'
    ]
  }
];

const skills = [
  { name: 'UI/UX Design', level: 95 }, // ← Skill & proficiency
];
```

---

## 🎨 Changing Colors

### Method 1: Using Tailwind Config (Recommended)

**File**: [tailwind.config.js](tailwind.config.js)

```javascript
export default {
  theme: {
    extend: {
      colors: {
        'primary-bg': '#FAF1E8',  // ← Main background color
        'nav-bg': '#FFDADB',       // ← Navigation bar color
        
        // Add custom colors:
        'accent': '#FF6B9D',
        'dark': '#2D3748',
      },
    },
  },
}
```

Then use in components:
```jsx
<div className="bg-accent">
<div className="text-dark">
```

### Method 2: Direct Class Changes

Replace color classes in components:

**Pink tones:**
- `bg-pink-50` → Light pink background
- `bg-pink-100` → Lighter pink
- `bg-pink-300` → Medium pink (buttons)
- `bg-pink-400` → Darker pink (accents)
- `text-pink-400` → Pink text

**Change to different colors:**
```jsx
// Before:
<button className="bg-pink-300">

// After (blue):
<button className="bg-blue-500">

// After (purple):
<button className="bg-purple-400">

// After (green):
<button className="bg-green-500">
```

### Color Reference

Common Tailwind colors:
- `slate`, `gray`, `zinc`, `neutral`, `stone`
- `red`, `orange`, `amber`, `yellow`, `lime`, `green`
- `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`
- `violet`, `purple`, `fuchsia`, `pink`, `rose`

Shades: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

---

## 🖼️ Changing Images

### Replace Background Images

1. Add your image to `Assets/` folder
2. Update component:

```jsx
// In any component with background:
style={{
  backgroundImage: 'url(/Assets/YOUR_IMAGE.png)', // ← Change filename
}}
```

### Update Carousel Images

**File**: [src/components/About.jsx](src/components/About.jsx)

```jsx
const images = [
  '/Assets/about1.jpg',  // ← Replace with your photos
  '/Assets/about2.jpg',
  '/Assets/about3.jpg',
  // Add more images to the array
];
```

### Update Portfolio Images

**File**: [src/components/Works.jsx](src/components/Works.jsx)

```jsx
{
  image: '/Assets/work1.png',  // ← Your project screenshot
}
```

### Update Service Icons

**File**: [src/components/Services.jsx](src/components/Services.jsx)

```jsx
{
  image: '/Assets/item1.png',  // ← Service item image
  icon: '🎨'                   // ← Change emoji icon
}
```

---

## 🔤 Changing Fonts

### Update Font Imports

**File**: [index.html](index.html)

```html
<!-- Replace Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap">
```

### Update Tailwind Config

**File**: [tailwind.config.js](tailwind.config.js)

```javascript
fontFamily: {
  'libre': ['Libre Baskerville', 'serif'],  // ← Headings
  'dm-sans': ['DM Sans', 'sans-serif'],     // ← Body text
  
  // Add new fonts:
  'custom': ['Your Font', 'fallback'],
}
```

### Use in Components

```jsx
<h1 className="font-libre">   {/* Uses Libre Baskerville */}
<p className="font-dm-sans">  {/* Uses DM Sans */}
<div className="font-custom"> {/* Uses your custom font */}
```

### Popular Font Combinations

**Modern & Clean:**
- Headings: Inter, Poppins, Montserrat
- Body: Open Sans, Roboto, Lato

**Elegant & Serif:**
- Headings: Playfair Display, Crimson Text
- Body: Source Serif Pro, Lora

**Creative & Unique:**
- Headings: Raleway, Josefin Sans
- Body: Nunito, Work Sans

---

## 📐 Adjusting Spacing & Layout

### Component Padding/Margin

```jsx
// Padding (p-) and Margin (m-)
<div className="p-4">   {/* padding: 1rem (16px) */}
<div className="p-8">   {/* padding: 2rem (32px) */}
<div className="px-4">  {/* horizontal padding */}
<div className="py-8">  {/* vertical padding */}
<div className="pt-20"> {/* padding-top */}

// Responsive spacing:
<div className="p-4 md:p-8 lg:p-12">
```

### Grid Layouts

```jsx
// Change columns:
<div className="grid md:grid-cols-2"> {/* 2 columns on medium+ */}
<div className="grid md:grid-cols-3"> {/* 3 columns */}
<div className="grid lg:grid-cols-4"> {/* 4 columns on large */}

// Gap between items:
<div className="gap-4">   {/* 1rem gap */}
<div className="gap-8">   {/* 2rem gap */}
```

### Section Heights

```jsx
<section className="min-h-screen">  {/* Full viewport height */}
<section className="h-96">          {/* Fixed 24rem height */}
<section className="py-20">         {/* Padding for height */}
```

---

## 🎭 Customizing Animations

### Existing Animations

**Float Animation** (decorative stickers):
```jsx
<img className="animate-float" />
```

**Pulse** (heart icon):
```jsx
<img className="animate-pulse" />
```

**Bounce** (scroll indicator):
```jsx
<div className="animate-bounce" />
```

### Add Custom Animations

**File**: [tailwind.config.js](tailwind.config.js)

```javascript
theme: {
  extend: {
    animation: {
      'spin-slow': 'spin 3s linear infinite',
      'wiggle': 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    }
  }
}
```

Use it:
```jsx
<div className="animate-wiggle">
```

---

## 🔘 Customizing Buttons

### Button Styles

```jsx
// Primary button (current):
<button className="bg-pink-300 hover:bg-pink-400 text-white px-8 py-3 rounded-full">

// Outlined button:
<button className="border-2 border-pink-300 text-pink-300 hover:bg-pink-300 hover:text-white px-8 py-3 rounded-full">

// Gradient button:
<button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-3 rounded-full">

// Shadow effect:
<button className="shadow-lg hover:shadow-xl">
```

### Button Sizes

```jsx
// Small:
<button className="px-4 py-2 text-sm">

// Medium (default):
<button className="px-6 py-3">

// Large:
<button className="px-10 py-4 text-lg">
```

---

## 📱 Responsive Design Tweaks

### Show/Hide Elements

```jsx
// Hide on mobile, show on desktop:
<div className="hidden md:block">

// Show on mobile, hide on desktop:
<div className="block md:hidden">

// Different layouts:
<div className="flex-col md:flex-row">
```

### Responsive Text Sizes

```jsx
<h1 className="text-2xl md:text-4xl lg:text-6xl">
//             mobile   tablet    desktop
```

### Responsive Images

```jsx
<img className="w-20 md:w-32 lg:w-40" />
//             mobile  tablet   desktop
```

---

## 🛍️ Shopping Cart Customization

### Change Cart Position

**File**: [src/components/Services.jsx](src/components/Services.jsx)

```jsx
// Current: bottom-right
<div className="fixed bottom-8 right-8">

// Top-right:
<div className="fixed top-20 right-8">

// Bottom-left:
<div className="fixed bottom-8 left-8">
```

### Cart Panel Size

```jsx
<div className="w-80">     {/* 320px wide */}
<div className="w-96">     {/* 384px wide */}
<div className="max-h-96"> {/* max height */}
```

---

## 🔗 Adding Social Links

**File**: [src/components/Footer.jsx](src/components/Footer.jsx)

```jsx
<a href="https://linkedin.com/in/YOUR_PROFILE">
<a href="https://github.com/YOUR_USERNAME">
<a href="mailto:YOUR_EMAIL@example.com">
<a href="https://dribbble.com/YOUR_USERNAME">
```

Add more social icons:
```jsx
// Twitter/X
<a href="https://twitter.com/YOUR_HANDLE">
  <svg>... Twitter SVG ...</svg>
</a>

// Instagram
<a href="https://instagram.com/YOUR_HANDLE">
  <svg>... Instagram SVG ...</svg>
</a>
```

---

## 🎯 Adding New Sections

### Step 1: Create Component

Create `src/components/Contact.jsx`:

```jsx
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-primary-bg">
      <div className="container mx-auto px-4">
        <h2 className="font-libre text-5xl font-bold text-center mb-12">
          Contact Me
        </h2>
        {/* Your content here */}
      </div>
    </section>
  );
};

export default Contact;
```

### Step 2: Add to App

**File**: [src/App.jsx](src/App.jsx)

```jsx
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* ... other sections ... */}
      <Contact />  {/* ← Add your new section */}
      <Footer />
    </div>
  );
}
```

### Step 3: Add to Navigation

**File**: [src/components/Navbar.jsx](src/components/Navbar.jsx)

```jsx
<button onClick={() => scrollToSection('contact')}>
  Contact
</button>
```

---

## 💡 Quick Tips

### 1. Test Changes Immediately
Save file → Browser auto-refreshes → See results!

### 2. Use Browser DevTools
- Right-click → Inspect
- Try colors/sizes live
- Copy working values to your code

### 3. Tailwind IntelliSense
Install VS Code extension: "Tailwind CSS IntelliSense"
- Auto-complete class names
- See color previews

### 4. Component Structure
```jsx
// Keep components organized:
<section>         {/* Main container */}
  <div className="container mx-auto">  {/* Centered wrapper */}
    <h2>Title</h2>
    <div className="grid">  {/* Layout */}
      {/* Content */}
    </div>
  </div>
</section>
```

### 5. Copy & Modify
Find a component you like → Copy it → Modify for new section

---

## 🎨 Color Schemes

### Preset Color Palettes

**Pastel Pink (Current):**
```
Background: #FAF1E8
Accent: #FFDADB
Buttons: pink-300/400
```

**Ocean Blue:**
```javascript
'primary-bg': '#E8F4F8'
'nav-bg': '#B3E5FC'
// Use: blue-300/400/500
```

**Warm Sunset:**
```javascript
'primary-bg': '#FFF3E0'
'nav-bg': '#FFE0B2'
// Use: orange-300/400/500
```

**Soft Lavender:**
```javascript
'primary-bg': '#F3E5F5'
'nav-bg': '#E1BEE7'
// Use: purple-300/400/500
```

**Mint Green:**
```javascript
'primary-bg': '#E8F5E9'
'nav-bg': '#C8E6C9'
// Use: green-300/400/500
```

---

## 📋 Customization Checklist

### Content
- [ ] Update name in Hero section
- [ ] Write your bio in About
- [ ] Add your projects to Works
- [ ] Update services and pricing
- [ ] Add your work experience
- [ ] Update skills percentages
- [ ] Change footer text

### Visuals
- [ ] Replace background images
- [ ] Add your photos to carousel
- [ ] Update portfolio screenshots
- [ ] Add service item images
- [ ] Choose color scheme
- [ ] Select fonts

### Links
- [ ] Add social media URLs
- [ ] Update contact email
- [ ] Link portfolio projects
- [ ] Add resume/CV link

### Final Polish
- [ ] Test all animations
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Test shopping cart
- [ ] Proofread all text
- [ ] Test all navigation links

---

**Need help?** Check [README.md](README.md) for more details!

**Happy customizing!** 🎨✨
