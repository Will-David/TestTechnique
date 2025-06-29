# README - Application de Gestion de Tâches

##  Description

Application de gestion de tâches fullstack développée en TypeScript avec :
- **Backend**: Fastify (API REST)
- **Frontend**: React (Vite)

Fonctionnalités principales :
- Création, consultation et suppression de tâches
- Mise à jour du statut (pending/done)
- Interface simple et intuitive

## Stack Technique

### Backend
- **Framework**: Fastify
- **Langage**: TypeScript
- **Gestion des erreurs**: Middlewares personnalisés
- **Stockage**: Mémoire (tableau)

### Frontend
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Formulaires**: React Hook Form
- **Requêtes API**: Axios
- **Gestion d'état**: TanStack Query (React Query)

## Installation

### Prérequis
- Node.js v18+
- npm

### Backend
```bash
cd task-back
npm install
npm run build
npm run start 
```

### Frontend
```bash
cd task-front
npm install
npm run dev
```

## Choix Techniques

### Backend
- **Fastify**: Performance et simplicité
- **Structure modulaire**: Séparation routes/services/controlleurs/models/types

### Frontend
- **Vite**: Configuration rapide
- **Tailwind**: Styling efficace
- **React Query**: Gestion optimisée des données
- **Axios**: Configuration simple des requêtes (Cors)

## Fonctionnalités
- ✅ CRUD complet pour les tâches
- ✅ Interface responsive
- ✅ Gestion d'erreurs basique
- ✅ Statut modifiable

## URLs
- API: `http://localhost:3000`
- App: `http://localhost:5173`
