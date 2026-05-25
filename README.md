# Catalogue produits — test technique

## Ce qui a été implémenté

- API paginée côté serveur : `GET /api/products?page=&limit=`
- Filtres : `category` (`shoes`, `clothing`, `accessories`, `bags`)
- Tris : `sort` (`price`, `name`, `createdAt`) + `order` (`asc`, `desc`)
- Gestion des erreurs centralisée (`errorHandler`)
- Frontend React modulaire (`Filters`, `ProductGrid`, `ProductCard`, `Pagination`) avec gestion loading / erreur / vide

## Décisions techniques

- Backend en Node.js + Express, MongoDB natif (sans Mongoose)
- Architecture séparée : routes / controllers / services / utils
- Parsing sécurisé des query params avec valeurs par défaut
- Index Mongo créés au démarrage pour accélérer recherche + tri
- Hook frontend dédié (`useProducts`) avec annulation de requêtes (`AbortController`)

## Lancer rapidement (première exécution)

Prérequis : Docker + Docker Compose installés.

Depuis la racine du projet :

```bash
docker compose up -d
```

## Points d'accès

- Frontend : http://localhost:5173
- API backend : http://localhost:3001
- Health check : http://localhost:3001/api/health
- Documentation API (Swagger UI) : http://localhost:3001/api-docs

## Vérification rapide

```bash
curl "http://localhost:3001/api/health"
curl "http://localhost:3001/api/products?page=1&limit=10&sort=createdAt&order=desc"
```