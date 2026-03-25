# ADR-001 — Structure multi-pages HTML avec CSS partage

## Statut
Accepted

## Contexte
L'application iCollectivites comporte 5 ecrans distincts (Besoin > Produit > Configuration > Devis > Envoi). La maquette actuelle est un fichier HTML unique de 1140 lignes qui couvre l'ecran 3 (configuration). On doit etendre a tous les ecrans.

On est en phase maquette de validation — pas de backend, pas de framework.

## Decision
- **Pages HTML separees** : une par ecran (`index.html`, `catalogue.html`, `configurateur.html`, `devis.html`)
- **CSS commun** extrait dans `styles.css` (variables, composants reutilisables)
- **Navigation** par liens classiques avec parametres URL (`?besoin=columbarium&produit=emeraude-rect`)
- **Donnees partagees** via `localStorage` (configuration selectionnee transmise entre ecrans)
- **Scope operationnel** : seul Columbarium Emeraude est fonctionnel, le reste est bouchonne (affiche mais non cliquable)

## Consequences
### Positives
- Simple, pas de dependance framework
- Chaque ecran est autonome et testable individuellement
- Facile a demontrer au client (ouvrir un HTML dans un navigateur)
- Migration future vers SPA/framework possible sans perte de logique

### Negatives / Trade-offs
- Duplication potentielle de markup (header, nav) — mitigee par le CSS commun
- localStorage = pas de persistence serveur (normal en phase maquette)
- Pas de routing SPA (rechargement page a chaque ecran)

## Alternatives considerees
- **SPA React/Vue** : trop lourd pour une maquette de validation, ajoute des dependances inutiles a ce stade
- **Tout dans un seul HTML** : deja 1140 lignes pour 1 ecran, ingerable a 5 ecrans
