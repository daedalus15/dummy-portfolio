# Replit.md

## Overview

This is a modern CLI-themed developer portfolio website built with React and Express.js. The application features a terminal-inspired design with neon colors, smooth scrolling navigation, and a contact form with backend API integration. The portfolio showcases sections for hero, about, education, experience, projects, skills, workshops, achievements, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between frontend and backend:

- **Frontend**: React SPA with Vite bundler
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage)
- **Styling**: Tailwind CSS with custom neon theme
- **UI Components**: Radix UI with shadcn/ui component library

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Tailwind CSS** for styling with custom terminal/neon theme
- **Radix UI primitives** with shadcn/ui components for accessibility
- **TanStack Query** for server state management
- **Custom hooks** for mobile detection and toast notifications

### Backend Architecture
- **Express.js** server with TypeScript
- **Modular routing** with separate route handlers
- **Memory storage implementation** with interface for future database integration
- **Middleware** for request logging and error handling
- **CORS and JSON parsing** configured

### Component Structure
- **Section-based layout** with smooth scrolling navigation
- **Reusable UI components** in `/components/ui/`
- **Custom components** like NeonButton and ProgressBar
- **Theme provider** for dark/light mode support
- **Animated background** with CSS animations

### Database Schema
- **Users table** with id, username, password fields
- **Contacts table** for contact form submissions
- **Drizzle ORM** configuration for PostgreSQL
- **Zod validation** schemas for type-safe data handling

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Routes**: Express.js handles requests at `/api/*` endpoints
3. **Data Storage**: Currently uses in-memory storage, designed for easy PostgreSQL migration
4. **Response**: JSON responses sent back to client with proper error handling
5. **State Management**: TanStack Query manages server state and caching

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for Neon database
- **drizzle-orm**: Type-safe SQL query builder
- **@radix-ui/***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling with validation

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **ESBuild**: Fast JavaScript bundler for production

### UI Enhancement
- **class-variance-authority**: CSS class management
- **clsx**: Conditional class names
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development
- **Dual server setup**: Vite dev server for frontend, Express for API
- **Hot module replacement** for fast development
- **TypeScript compilation** with strict mode enabled
- **Path aliases** for clean imports

### Production Build
- **Frontend**: Vite builds React app to `/dist/public`
- **Backend**: ESBuild bundles Express server to `/dist/index.js`
- **Static serving**: Express serves built frontend files
- **Environment variables**: DATABASE_URL for PostgreSQL connection

### Database Migration
- The application is structured to easily migrate from in-memory storage to PostgreSQL
- Drizzle migrations configured in `/migrations` directory
- Storage interface allows seamless backend switching
- Contact form ready for database persistence

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend and backend in same repository for simplified development
2. **Memory Storage**: Temporary solution allowing development without database setup
3. **Interface-based Storage**: Clean abstraction enabling easy database migration
4. **Component Library**: Radix UI + shadcn/ui for consistent, accessible components
5. **Terminal Theme**: Custom CSS variables and animations for unique visual identity
6. **TypeScript Throughout**: Type safety across frontend, backend, and shared schemas