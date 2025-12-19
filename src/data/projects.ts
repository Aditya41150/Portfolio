export const projects = [
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
    live: null,
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
]
