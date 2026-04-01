# Règles Critiques — Standards de Code

**Projet** : 016-CIMTEA configurateur
**Dernière mise à jour** : 01/04/2026
**Référencé par** : `agents/dev.md` (prompt DEV)

---

## SRP Hyper Canonique

**UNE fonction = UNE seule responsabilité. Aucune exception.**

Checklist AVANT de coder :
- [ ] Cette fonction fait-elle UNE seule chose ?
- [ ] Puis-je la résumer en une phrase SANS "et" ni "puis" ?
- [ ] Le nom reflète-t-il l'action UNIQUE ?
- [ ] Ai-je besoin de la découper ?

**Sanctions** :
- Critique → Code Review REJETÉ par ARCH
- Majeure → Refactoring OBLIGATOIRE
- Mineure → Warning + refactoring prochain sprint

---

## 7 Bonnes Pratiques OBLIGATOIRES

### 1. DRY — Don't Repeat Yourself

Ne répète JAMAIS le même code. Extraire dans des fonctions utilitaires.

**Règles projet CIMTEA** :
- Les constantes WebRender (`WR_SERVER`, `WR_DATABASE_ID`, `WR_DEFAULT_CAMERA`) doivent être définies en UN seul endroit
- Les fonctions partagées (`loadConfig()`, `loadDevis()`, `loadMonumentImage()`) doivent être dans un fichier commun
- Les fonctions de sélection similaires (granit, portes, carreaux) doivent utiliser une fonction générique
- Les labels et mappings (`GRANITS`, `PORTES`, `CARREAUX`, `WR_GRANIT`, etc.) ne doivent exister qu'une fois

### 2. KISS — Keep It Simple, Stupid

Code simple : un développeur junior comprend en 30 secondes.

**Règles projet CIMTEA** :
- Pas de patch `window.fetch` global — préférer un wrapper dédié
- Navigation par tableau d'étapes (`getActiveSteps()`) plutôt que des sauts hardcodés
- Pas de `innerHTML` pour du texte simple — utiliser `textContent`

### 3. Separation of Concerns

Séparer données, présentation et logique.

**Règles projet CIMTEA** :
- CSS dans `styles.css`, pas dans les balises `<style>` inline (sauf spécificités page < 20 lignes)
- Données produits/gammes dans des structures JS dédiées, pas mélangées avec le rendu HTML
- Logique métier (validation, calculs) séparée de la logique UI (affichage, DOM)

### 4. Single Responsibility

Chaque fichier, chaque fonction, chaque classe a un rôle unique.

**Règles projet CIMTEA** :
- `configurateur.html` = configuration 3D
- `devis.html` = saisie informations projet
- `envoi.html` = récapitulatif et envoi
- `styles.css` = tous les styles partagés

### 5. Error Handling

Try/catch sur TOUTES les fonctions publiques.

**Règles projet CIMTEA** :
- `localStorage.getItem()` / `JSON.parse()` : toujours dans un try-catch avec `console.error()` (pas de catch vide)
- Appels `fetch` WebRender : toujours un `.catch()` avec feedback utilisateur (toast ou message)
- Validation des données avant utilisation (vérifier null/undefined)

### 6. Performance First

Cache, batch, lazy loading.

**Règles projet CIMTEA** :
- Ne pas reconstruire tout le DOM (`innerHTML = ...`) quand on peut mettre à jour un élément ciblé
- Éviter les `querySelectorAll` dans des boucles fréquentes
- Images WebRender : vérifier `img.complete` avant de rattacher `onload` (cache navigateur)

### 7. Defensive Programming

Valider TOUS les paramètres, checker null/undefined.

**Règles projet CIMTEA** :
- Toujours vérifier que `config` et `devis` existent avant d'accéder à leurs propriétés
- Validation email avant envoi (regex + champ non vide)
- Échapper les données utilisateur avant insertion HTML (XSS)

---

## Règles spécifiques au projet

### Textes en français avec accents

Tous les textes visibles (titres, labels, placeholders, boutons, messages) DOIVENT être en français correct avec accents (é, è, ê, à, ù, ç, etc.). Pas de texte sans accent.

### Pas de commit sans validation stakeholder

DEV fait le code → montre au stakeholder → stakeholder valide → ALORS commit + push.

### Nommage

- Variables JS : `camelCase` (pas de `var`, utiliser `const` par défaut, `let` si réassignation)
- Constantes : `UPPER_SNAKE_CASE`
- IDs HTML : `camelCase` avec préfixe contextuel (`input`, `btn`, `recap`, etc.)
- Classes CSS : `kebab-case` avec préfixe page si spécifique (`.envoi-sidebar`, `.devis-scroll`)

### Dead Code

- Supprimer immédiatement tout CSS/JS non utilisé
- Pas de code commenté "au cas où" — le git historique suffit
- Pas de fonctions placeholder vides

---

## Checklist Code Review

Avant de soumettre à QA :

- [ ] SRP respecté (1 fonction = 1 responsabilité)
- [ ] Pas de duplication (DRY)
- [ ] Pas de `innerHTML` avec des données utilisateur non échappées
- [ ] Pas de `catch (e) { }` vide — au minimum `console.error(e)`
- [ ] Pas de `var` — utiliser `const` / `let`
- [ ] Pas de CSS inline dans le HTML (sauf exception documentée)
- [ ] Textes en français avec accents
- [ ] Validation des inputs utilisateur (email, champs obligatoires)
- [ ] Pas de dead code (CSS/JS orphelin supprimé)
- [ ] localStorage : try-catch + vérification null avant accès
