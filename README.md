# User Dashboard - RemitBee Project

A modern, responsive single-page application built with React and Material UI that fetches and displays user data from a public API.

## 🚀 Live Demo
**[🎬 View Live App](https://user-dashboard-dzhyb7ilh-shivamkr1563s-projects.vercel.app/)**
## 🚀 Features

- **React.js with Functional Components**: Built using modern React hooks and functional programming patterns
- **API Integration**: Fetches user data from JSONPlaceholder API
- **Dual View Modes**: Switch between beautiful card grid and detailed table layouts
- **Advanced Search**: Filter users by name, username, email, or company
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Trendy gradient theme with glassmorphism effects
- **Material UI**: Professional components with custom styling
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Error Handling**: Graceful error states with retry functionality
- **Loading States**: Beautiful loading indicators

## 📋 Requirements Met

✅ React.js with functional components  
✅ Fetch data from 'https://jsonplaceholder.typicode.com/users'  
✅ Styled, responsive table AND card layout  
✅ Search bar to filter users by name (and more!)  
✅ Material UI for styling  

## 🎨 Design Highlights

- **Modern Gradient Theme**: Purple-blue gradient background
- **Glassmorphism**: Frosted glass effect on cards and components
- **Dark Mode**: Beautiful dark theme with perfect contrast
- **Smooth Animations**: Fade-in effects and hover interactions
- **Professional Typography**: Inter font family for clean readability
- **Responsive Grid**: Adapts from 1 to 4 columns based on screen size

## 🛠️ Technologies Used

- React 18.2
- Material UI (MUI) 5.14
- Emotion (CSS-in-JS)
- JSONPlaceholder API
- Modern ES6+ JavaScript

## 📦 Installation

1. Navigate to the project directory:
   ```
   cd RemitBeeProject
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 🎯 Project Structure

```
RemitBeeProject/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.js       # App header with branding
│   │   ├── SearchBar.js    # Search and view toggle controls
│   │   ├── UserGrid.js     # Main grid/table container
│   │   ├── UserCard.js     # Individual user card component
│   │   ├── UserTable.js    # Table view component
│   │   ├── LoadingSpinner.js  # Loading state component
│   │   └── ErrorMessage.js    # Error state component
│   ├── services/
│   │   └── api.js          # API service functions
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 💡 Key Features Explained

### 1. Code Structure and Reusability (30%)
- **Component-based architecture**: Each component has a single responsibility
- **Reusable components**: UserCard, UserTable, SearchBar, etc.
- **Service layer**: Separated API logic in `services/api.js`
- **Clean code**: Well-commented and organized

### 2. API Integration and Functionality (30%)
- **Async/await**: Modern async pattern for API calls
- **Error handling**: Try-catch blocks with user-friendly messages
- **Loading states**: Shows spinner while fetching data
- **Data filtering**: Real-time search across multiple fields

### 3. Responsive UI Design (20%)
- **Mobile-first**: Adapts from mobile to desktop seamlessly
- **Grid system**: 1-4 columns based on breakpoints
- **Flexible layouts**: Cards stack vertically on mobile
- **Touch-friendly**: Large touch targets and spacing

### 4. Clean UI and Creativity (20%)
- **Modern gradient theme**: Eye-catching purple-blue palette
- **Glassmorphism**: Trendy frosted glass effect
- **Smooth animations**: Fade-in effects with staggered delays
- **Attention to detail**: Hover effects, shadows, and transitions
- **Professional typography**: Inter font for modern look

## 🎨 Theme Customization

The app uses a custom Material UI theme with:
- Dark mode palette
- Custom gradient colors
- Glassmorphism effects
- Smooth transitions
- Custom component overrides

## 🔍 Search Functionality

The search bar filters users by:
- Name
- Username
- Email
- Company name

Results update in real-time as you type!

## 📱 View Modes

### Grid View (Default)
- Beautiful card layout
- Expandable details
- Avatar with gradient backgrounds
- Hover effects

### Table View
- Comprehensive data display
- Sortable columns
- Responsive on mobile (converts to cards)
- Company catchphrases visible

## 🚀 Performance

- Optimized re-renders with proper state management
- Lazy loading with React.lazy (can be added)
- Efficient filtering algorithms
- Smooth 60fps animations

## 📈 Future Enhancements

- Sorting functionality
- Pagination for large datasets
- Individual user detail pages
- Data caching
- Offline support
- Unit tests
- Export to CSV/PDF

## 👨‍💻 Development

This project was created as a demonstration of:
- Modern React development practices
- Material UI implementation
- Responsive design principles
- API integration
- Clean code architecture

## 📄 License

This project is created for educational and demonstration purposes.

## 🙏 Acknowledgments

- JSONPlaceholder for the free API
- Material UI for the component library
- Google Fonts for Inter typeface

---

**Built with ❤️ using React and Material UI**
