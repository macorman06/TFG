# HARSA - Herramienta de Asignación de Rotaciones Sostenibles para Aeronaves

HARSA is a web application developed as part of a Final Degree Project (TFG) in Aerospace Engineering with a focus on Air Navigation. This tool optimizes aircraft rotation planning to improve operational efficiency and reduce environmental impact.

## 🌟 Live Demo

Visit the live application at: [tfg-9db.pages.dev](https://tfg-9db.pages.dev)

## 🎯 Features

- **Data Upload**: Import flight schedules and operational constraints
- **Optimization Engine**: Generate efficient aircraft rotations using Mixed Integer Programming (MIP)
- **Solution Comparison**: Visualize and analyze different planning scenarios
- **Interactive Interface**: User-friendly design for easy navigation and data visualization

## 🔍 Project Structure

```
harsa/
├── public/                 # Static assets
│   ├── background.jpg     # Background image
│   ├── urjc.ico          # Favicon
│   └── white_logo.png    # URJC logo
├── src/
│   ├── components/        # React components
│   │   ├── dialogs/      # Dialog components
│   │   ├── Body.jsx      # Main content wrapper
│   │   ├── Card.jsx      # Reusable card component
│   │   ├── Explain.jsx   # Project explanation
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Header.jsx    # Header component
│   │   ├── Info.jsx      # Information page
│   │   ├── Settings.jsx  # Settings page
│   │   ├── Tool.jsx      # Optimization tool
│   │   └── Welcome.jsx   # Welcome page
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   ├── index.css         # Global styles
│   └── main.jsx          # Application entry point
└── vite.config.js        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/harsa.git
cd harsa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages and Features

### Welcome Page
- Introduction to HARSA
- Quick access to main features
- Project overview and importance

### Tool Section
- Data upload functionality
- Optimization configuration
- Results visualization

### Information Pages
- Detailed project explanation
- Mathematical model description
- Expected results and benefits

### Settings
- Application preferences
- Configuration options

## 🌐 Deployment

The project is deployed on Cloudflare Pages. For manual deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` directory to your hosting service

## 🤝 Contributing

This project is part of a Final Degree Project at Universidad Rey Juan Carlos (URJC). For any suggestions or issues, please open an issue in the repository.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ✨ Author

Marcos Corpas Manzano

## 🏛️ Institution

Universidad Rey Juan Carlos (URJC)