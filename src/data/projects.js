// src/data/projects.js
// Real projects from GitHub: https://github.com/tanmoy06
// Data verified from GitHub API — no invented descriptions

export const projects = [
  {
    id: 1,
    name: 'NS Electrical',
    description:
      'A Flutter mobile application for an electrical services business. Built with Dart and Flutter, featuring service listings, contact workflows, and a polished UI for customer-facing functionality.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    category: 'Mobile App',
    github: 'https://github.com/tanmoy06/ns_electrical',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    name: 'Hacker News Client',
    description:
      'A high-performance Hacker News client built with Flutter. Features GetX state management, Get_CLI architecture, and recursive nested comment rendering with a clean, classic HN aesthetic.',
    tech: ['Flutter', 'Dart', 'GetX', 'HN API'],
    category: 'Mobile App',
    github: 'https://github.com/tanmoy06/hacker-news',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    name: 'Expense Tracker',
    description:
      'A sleek, responsive, and cross-platform mobile application built with React Native and Expo designed to help users log, categorize, and seamlessly monitor their daily finances.',
    tech: ['React Native', 'Expo', 'JavaScript'],
    category: 'Mobile App',
    github: 'https://github.com/tanmoy06/expense-tracker',
    demo: null,
    featured: true,
  },
  {
    id: 4,
    name: 'Task Manager (Flutter)',
    description:
      'A Flutter task management app built with Dart. Provides a clean interface for creating, organizing, and tracking tasks with a minimal and intuitive design.',
    tech: ['Flutter', 'Dart'],
    category: 'Mobile App',
    github: 'https://github.com/tanmoy06/task',
    demo: null,
    featured: true,
  },
  {
    id: 5,
    name: 'Todo Backend',
    description:
      'A RESTful API backend for a todo application built with Node.js and JavaScript. Provides CRUD endpoints for task management and serves as a backend service for frontend clients.',
    tech: ['Node.js', 'JavaScript', 'REST API'],
    category: 'Backend',
    github: 'https://github.com/tanmoy06/todo-backend',
    demo: null,
    featured: true,
  },
  {
    id: 6,
    name: 'Complete DSA',
    description:
      'A comprehensive collection of Data Structures and Algorithms implementations in C. Covers arrays, linked lists, trees, graphs, sorting, searching, and more — actively maintained for study and reference.',
    tech: ['C', 'Algorithms', 'Data Structures'],
    category: 'CS Fundamentals',
    github: 'https://github.com/tanmoy06/Complete-DSA',
    demo: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
