# KERIGMA Youth Group Website

## Overview

This project is a modern web application for KERIGMA, a Christian youth group based in São Paulo, Brazil. The application serves as an informational website showcasing the group's history, activities, and community engagement. Built with a full-stack architecture using React for the frontend and Express.js for the backend, the application provides a comprehensive platform for the youth group to connect with potential new members and share their mission.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and build processes
- **State Management**: TanStack Query for server state management
- **UI Components**: Comprehensive component library using Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with TypeScript (TSX for development)
- **Framework**: Express.js with middleware for request logging and error handling
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple
- **Development**: Hot module replacement and development server integration

## Key Components

### Frontend Components
- **Landing Page**: Multi-section homepage with hero, history, photos, experiences, testimonials, and contact information
- **Navigation System**: Smooth scrolling navigation with mobile-responsive design
- **UI Library**: Complete shadcn/ui implementation with custom theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities

### Backend Services
- **Route Registration**: Centralized route management system
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Development Tools**: Integrated Vite development server with hot reloading
- **Error Handling**: Comprehensive error middleware for API responses

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Type Safety**: Drizzle ORM with Zod validation schemas
- **Migrations**: Database migration system using Drizzle Kit

## Data Flow

1. **Client Requests**: Frontend React application serves as the user interface
2. **API Communication**: TanStack Query handles server-side data fetching and caching
3. **Server Processing**: Express.js backend processes API requests with logging middleware
4. **Data Persistence**: Drizzle ORM manages database operations with type safety
5. **Response Handling**: Structured API responses with error handling

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL) for data persistence
- **Authentication**: Session-based authentication with PostgreSQL storage
- **UI Framework**: Radix UI for accessible component primitives
- **Icons**: Lucide React and React Icons for comprehensive icon library
- **Fonts**: Google Fonts (Inter) for typography

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting
- **PostCSS**: CSS processing with Tailwind CSS
- **Vite Plugins**: Development experience enhancements including error overlay

## Deployment Strategy

### Production Build
- **Frontend**: Static assets built with Vite and served from `/dist/public`
- **Backend**: Express server bundled with esbuild for production deployment
- **Environment**: NODE_ENV-based configuration for development/production modes

### Replit Integration
- **Auto Deployment**: Configured for Replit's autoscale deployment target
- **Development**: Hot reloading with Vite integration
- **Port Configuration**: Port 5000 mapped to external port 80
- **Database**: PostgreSQL module integration for development environment

### Build Process
1. Frontend assets compiled to `/dist/public` directory
2. Backend TypeScript compiled to ESM modules in `/dist`
3. Static file serving integrated with Express for production
4. Development mode uses Vite middleware for hot module replacement

## Changelog

- June 22, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.