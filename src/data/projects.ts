export const projects = [
  {
    title: "Focus Tracker",
    description: "A high-performance desktop productivity tool that monitors active window usage and categorizes focus time in real-time.",
    details: [
      "Built with a Rust-based window tracking engine and a React frontend",
      "Features a Rize-inspired dashboard with 24-hour vertical timeline",
      "Local SQLite persistence for privacy-first data logging",
      "Real-time active window monitoring and categorization",
    ],
    tech: ["Tauri v2", "Rust", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    github: "https://github.com/Aditya41150/Focus-Tracker",
    live: null,
  },
  {
    title: "FareFinder – Smart Cab & Bike Fare Comparison App",
    description:
      "Mobile app that compares cab and bike fares across services with real-time location input.",
    details: [
      "Built a cross-platform mobile application using Flutter & Dart",
      "Developed a Node.js + Express backend to handle fare comparison requests",
      "Integrated Google Places API for pickup and destination autocomplete",
      "Handled external API calls using async/await with proper error handling",
      "Returned structured JSON responses to the mobile app",
      "Organized backend into routes, controllers, and services for maintainability",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Google Places API",
      "Async/Await",
      "JSON",
      "MVC Architecture",
    ],
    github: "https://github.com/Aditya41150/Fare-Finder-Cabs-and-Bikes",
    live: "https://farefinderapp.netlify.app/",
  },

  {
    title: "Proxy Web Server in C",
    description:
      "High-performance multi-threaded proxy server with caching and concurrency control.",
    details: [
      "Implemented a robust networking layer using BSD sockets",
      "Handled hostname resolution, socket reuse, and connection timeouts",
      "Designed a thread-safe in-memory cache protected by mutexes",
      "Implemented LRU-style cache eviction to optimize memory usage",
      "Improved throughput and reduced latency under high concurrency",
      "Ensured clean resource teardown across worker threads",
    ],
    tech: [
      "C",
      "Socket Programming",
      "TCP/IP",
      "Multithreading",
      "Mutexes & Locks",
      "Concurrency",
      "LRU Cache",
      "Memory Management",
      "POSIX Threads",
    ],
    github: "https://github.com/Aditya41150/Proxy-web-server-in-c",
    live: null,
  },

  {
    title: "ShopEase – E-commerce Mobile App",
    description:
      "Cross-platform e-commerce app with authentication, cart, and order management.",
    details: [
      "Developed a Flutter-based mobile app for product browsing and cart management",
      "Integrated Firebase Authentication for secure user sign-in and sign-up",
      "Used Firestore for real-time product and order data synchronization",
      "Implemented persistent carts and category-based product filtering",
      "Designed modular and reusable UI components for scalability",
      "Simulated payment flows for checkout experience",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "State Management",
      "REST Integration",
      "Modular UI Design",
    ],
    github: "https://github.com/Aditya41150/ShopEase",
    live: null,
  },
  {
    title: "Taskify – Advanced Task Management App",
    description:
      "A productivity-focused mobile app featuring real-time sync, clean architecture, and intuitive gesture-based task control.",
    details: [
      "Architected using Clean Architecture principles separating Domain, Data, and Presentation layers",
      "Implemented Riverpod for robust, reactive state management across the application",
      "Integrated Firebase Firestore for real-time data synchronization and persistent storage",
      "Developed advanced 'Swipe-to-Action' gestures: Swipe Right to Edit and Swipe Left to Delete",
      "Designed a dynamic Bottom Sheet interface for context-aware task creation and editing",
      "Built a custom priority-based categorization system with real-time UI updates",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase Firestore",
      "Cloud Firestore",
      "Clean Architecture",
      "Advanced Gestures",
      "MVC/Feature-first Design",
    ],
    github: "https://github.com/Aditya41150/Task-Management-App",
    live: null,
  },
  {
    title: "Cosmic - Explore the Solar System",
    description: "A stunning Flutter application that lets you explore planets in our solar system with beautiful animations, immersive UI, and Firebase authentication.",
    details: [
      "Implemented chat‑based UI with Flutter and Dart",
      "Integrated OpenAI GPT for natural language understanding",
      "Used Firebase for authentication, Firestore for real‑time data sync",
      "Added voice command support via speech‑to‑text APIs",
      "Implemented push notifications for reminders and alerts"
    ],
    tech: ["Flutter", "Dart", "OpenAI API", "Firebase", "Firestore", "Speech‑to‑Text", "Push Notifications"],
    github: "https://github.com/Aditya41150/Cosmic-App",
    live: null
  }
];
