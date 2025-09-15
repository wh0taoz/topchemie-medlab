# React TypeScript Starter

A modern React application starter template with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **React 18** with TypeScript
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components (customizable and accessible)
- **React Router** for navigation
- **Axios** for API requests
- **React Hook Form** with Zod validation
- Organized folder structure
- Custom hooks
- API service layer

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   └── layout/      # Layout components
├── pages/           # Page components
├── services/        # API services
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── assets/          # Static assets
│   ├── images/
│   └── icons/
├── styles/          # Global styles
└── lib/             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## Adding shadcn/ui Components

To add new shadcn/ui components, you can use the CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## License

MIT