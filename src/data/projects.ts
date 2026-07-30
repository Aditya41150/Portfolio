export type Project = {
  title: string;
  description: string;
  details: string[];
  tech: string[];
  github?: string | null;
  live?: string | null;
};

export const projects: Project[] = [
  {
    title: "DevFlow – Developer Productivity Dashboard",
    description:
      "An all-in-one developer productivity dashboard featuring task management, Pomodoro focus sessions, quick notes, live weather, and GitHub profile search.",
    details: [
      "Built a responsive dashboard with task management, Pomodoro timer, and Quick Notes",
      "Integrated OpenWeather and GitHub REST APIs with loading states and graceful error handling",
      "Persisted tasks, notes, and user preferences using localStorage",
      "Designed a modular React architecture with reusable components and responsive Tailwind CSS",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "OpenWeather API",
      "GitHub API",
    ],
    github: "https://github.com/Aditya41150/DevFlow---Developer-Productivity-Dashboard",
    live: "https://devflow-developer-productivity-dashboard.vercel.app/",
  },

  {
    title: "FareFinder – Smart Cab & Bike Fare Comparison",
    description:
      "A cross-platform mobile application that compares cab and bike fares with intelligent location search and backend-powered fare processing.",
    details: [
      "Built a Flutter application with an Express.js backend for fare comparison",
      "Integrated Google Places Autocomplete with debounced search and robust error handling",
      "Developed REST APIs to process requests and return structured JSON responses",
      "Organized the backend using MVC architecture for scalability and maintainability",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "Google Places API",
      "REST APIs",
      "MVC",
    ],
    github: "https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes",
    live: "https://farefinderapp.netlify.app/",
  },

  {
    title: "Proxy Web Server in C",
    description:
      "A high-performance multi-threaded proxy server featuring concurrent request handling and in-memory caching.",
    details: [
      "Implemented HTTP request forwarding using BSD sockets",
      "Designed a thread-safe in-memory cache protected by mutexes",
      "Implemented LRU cache eviction to optimize memory utilization",
      "Improved concurrent request handling using POSIX threads",
    ],
    tech: [
      "C",
      "Socket Programming",
      "TCP/IP",
      "POSIX Threads",
      "Mutexes",
      "LRU Cache",
    ],
    github: "https://github.com/Aditya41150/Proxy-web-server-in-c",
    live: null,
  },

  {
    title: "Taskify – Advanced Task Management App",
    description:
      "A Flutter task management application built with Clean Architecture, real-time synchronization, and intuitive gesture-based interactions.",
    details: [
      "Architected the application using Clean Architecture for better scalability",
      "Implemented Riverpod for efficient reactive state management",
      "Integrated Cloud Firestore for real-time task synchronization",
      "Built swipe gestures for editing and deleting tasks with smooth user interactions",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Cloud Firestore",
      "Firebase",
      "Clean Architecture",
    ],
    github: "https://github.com/Aditya41150/Task-Management-App",
    live: null,
  },

  {
    title: "Cosmic – Explore the Solar System",
    description:
      "An interactive Flutter application for exploring the solar system through immersive animations, rich planetary information, and a modern mobile interface.",
    details: [
      "Built visually engaging planet exploration screens with smooth animations",
      "Integrated Firebase Authentication for secure user sign-in",
      "Designed responsive UI components with intuitive navigation",
      "Organized the application into reusable widgets for maintainability",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Authentication",
      "Material Design",
    ],
    github: "https://github.com/Aditya41150/Cosmic-App",
    live: null,
  },

  {
    title: "ShopEase – E-commerce Mobile App",
    description:
      "A cross-platform e-commerce application featuring authentication, product browsing, cart management, and real-time data synchronization.",
    details: [
      "Built a Flutter application for browsing products and managing carts",
      "Integrated Firebase Authentication for secure user access",
      "Used Cloud Firestore for real-time product and order management",
      "Designed reusable UI components with category-based product filtering",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Authentication",
      "REST APIs",
    ],
    github: "https://github.com/Aditya41150/ShopEase",
    live: null,
  },
];