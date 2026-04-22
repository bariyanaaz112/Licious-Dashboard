
<img width="813" height="333" alt="Screenshot 2026-04-23 003310" src="https://github.com/user-attachments/assets/33524b19-27b5-47d4-8252-6f99635ef9fb" />
<img width="1908" height="959" alt="Screenshot 2026-04-23 003426" src="https://github.com/user-attachments/assets/699e48aa-dcc8-41f9-bc4a-46b177a0c171" />
<img width="1882" height="985" alt="Screenshot 2026-04-23 003508" src="https://github.com/user-attachments/assets/bc5f47f4-1b13-4fc7-8ca9-904772e3808e" />
<img width="1873" height="496" alt="Screenshot 2026-04-23 004131" src="https://github.com/user-attachments/assets/9973f6cd-b61b-40fc-b855-6e0032424c65" />
<img width="1853" height="1039" alt="Screenshot 2026-04-23 004113" src="https://github.com/user-attachments/assets/3cc47ac4-7e7e-4922-84d7-1afd9fda8bc3" />
<img width="1886" height="1003" alt="Screenshot 2026-04-23 003633" src="https://github.com/user-attachments/assets/4e13fc50-1ba6-4074-8cd6-44c739dffead" />
<img width="1883" height="1027" alt="Screenshot 2026-04-23 003531" src="https://github.com/user-attachments/assets/99536de0-54c3-4a3d-bdd8-ac80bf653224" />


Github: https://github.com/bariyanaaz112/Licious-Dashboard

Live Url: https://bariyanaaz112.github.io/Licious-Dashboard/

# Task Management Dashboard

A modern, responsive, and feature-rich task management dashboard built with React, TypeScript, and CSS3. Organize, track, and manage your tasks efficiently with an intuitive user interface.

##  Features

### Core Features
-  **Task Creation** - Create tasks with title, description, priority, and due date
-  **Task Management** - Edit and delete tasks with confirmation prompts
-  **Task Status** - Mark tasks as complete or pending with visual indicators
-  **Smart Filtering** - Filter by status (All/Pending/Completed) and priority (Low/Medium/High)
-  **Search Functionality** - Search tasks by title or description in real-time
-  **Task Statistics** - View total, pending, and completed task counts with progress percentage
-  **Data Persistence** - Tasks are automatically saved to localStorage and persist across sessions

### Bonus Features
-  **Dark/Light Mode** - Toggle between dark and light themes (persisted in localStorage)
-  **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
-  **Dual View Modes** - Switch between List View and Card View
-  **Unit Tests** - Comprehensive test coverage with Jest and React Testing Library
-  **TypeScript** - Full type safety throughout the application

## Tech Stack

- **Frontend Framework**: React 19.x
- **Language**: TypeScript 5.x
- **Styling**: CSS3 (CSS Variables, Grid, Flexbox)
- **State Management**: React Context API
- **Storage**: localStorage API
- **Testing**: Jest & React Testing Library
- **Build Tool**: Create React App (react-scripts 5.0)

##  Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Licious-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

##  Project Structure

src/
├── components/        # React components (Form, List, Card, Filter, Stats, Header)
├── contexts/          # React Context for state management
├── hooks/             # Custom hooks (useTasks, useLocalStorage)
├── types/             # TypeScript type definitions
├── utils/             # Utility functions and filters
├── styles/            # CSS variables and global styles
├── App.tsx            # Main application component
├── index.tsx          # React DOM entry point
└── index.css          # Global styles


### Create a Task
1. Fill in the form with title, description, priority, and due date
2. Click "Add Task"

### Manage Tasks
- **Mark Complete**: Check the checkbox
- **Edit**: Click Edit button
- **Delete**: Click Delete and confirm

### Filter & Search
- Use search bar for real-time search
- Filter by status (All/Pending/Completed)
- Filter by priority (Low/Medium/High)

### Switch Views
- Click **List** or **Card** to toggle between view modes

### Dark Mode
- Click the moon/sun icon in the header

##  Data Storage

All data is stored in browser localStorage:
- Tasks persist after refresh
- Theme preference is saved automatically
- No backend server required

##  Responsive Design

- **Mobile** (< 768px): Single column layout
- **Tablet** (768-1024px): Two column layout  
- **Desktop** (> 1024px): Full multi-column layout

##  Testing

# Run tests
npm test

# Run with coverage
npm test -- --coverage

Test coverage includes:
- Component rendering and interactions
- Filtering and search functionality
- localStorage persistence
- Task CRUD operations

##  Deployment

  Push to GitHub

### GitHub Pages
Add to package.json and deploy with gh-pages

##  Features Checklist

-  Task creation with all fields
-  List and Card views
-  Edit and delete with confirmation
-  Complete/incomplete status
-  Search functionality
-  Filter by status and priority
-  Task statistics dashboard
-  localStorage persistence
-  Responsive design
-  Dark/Light mode
-  Animations and transitions
-  TypeScript support
-  Unit tests

##  Design Features

**Color Scheme:**
- Primary: #3b82f6 (Blue)
- Success: #10b981 (Green)
- Warning: #f59e0b (Amber)
- Danger: #ef4444 (Red)

**Animations:**
- Smooth transitions on all interactive elements
- Slide-in animations for new tasks
- Hover effects for better UX
- Loading states and micro-interactions

##  Design Decisions

1. **Context API** - Chose for simplicity over Redux
2. **localStorage** - No backend required, works offline
3. **CSS Variables** - Easy theme switching
4. **TypeScript** - Type safety and DX improvements
5. **Custom Hooks** - Reusable logic patterns
6. **CSS Grid/Flexbox** - Modern responsive layouts



