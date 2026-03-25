# ADR-003 — Topbar de navigation commune a tous les ecrans

## Statut
Accepted

## Contexte
Les ecrans 1 et 2 (accueil, catalogue) ont un style coherent : fond sombre, bouton retour, cards. L'ecran 3 (configurateur) a un layout radicalement different (viewport 3D + sidebar) sans bouton retour visible et avec un breadcrumb interne a la sidebar. L'utilisateur perd ses reperes lors de la transition.

## Decision
Ajouter une **topbar de navigation commune** en haut de TOUS les ecrans de l'application :

### Structure de la topbar
```
[< Retour]     Columbarium > Emeraude Rect > Configuration     [CIMTEA]
```

- **Gauche** : bouton retour "<" — meme style sur tous les ecrans, ramene a l'ecran precedent dans le flow
- **Centre** : fil d'Ariane global — montre la position dans le parcours complet (Besoin > Gamme > Produit > Ecran actuel). Chaque segment est cliquable pour revenir a cette etape.
- **Droite** : logo CIMTEA — cliquable, ramene toujours a l'accueil (index.html)

### Style
- Fond : semi-transparent sombre avec blur (coherent avec le theme existant)
- Hauteur fixe : ~56px
- Position : fixe en haut, au-dessus de tout le contenu
- Meme composant HTML/CSS sur toutes les pages (dans styles.css)

### Impact sur le configurateur
- Le viewport 3D et la sidebar passent **sous** la topbar (ajout d'un padding-top)
- Le breadcrumb interne a la sidebar est **supprime** (remplace par la topbar globale)
- Le logo CIMTEA dans le viewport est **supprime** (deplace dans la topbar)

### Comportement du bouton retour par ecran
| Ecran | Retour vers |
|-------|-------------|
| index.html (accueil) | Pas de bouton retour (c'est la racine) |
| catalogue.html | index.html |
| configurateur.html | catalogue.html |
| devis.html (futur) | configurateur.html |

## Consequences
### Positives
- Continuite visuelle forte entre tous les ecrans
- L'utilisateur sait toujours ou il est (fil d'Ariane global)
- Navigation retour coherente et previsible
- Un seul composant a maintenir (DRY)

### Negatives / Trade-offs
- 56px de hauteur en moins pour le contenu (acceptable)
- Refactoring des 3 pages existantes (header catalogue, logo configurateur, breadcrumb sidebar)

## Alternatives considerees
- **Option A (bouton retour seul dans le viewport)** : rejetee — corrige un symptome, pas la rupture de layout
- **Option C (repenser tout le layout configurateur)** : rejetee — trop lourd, risque de regression, le layout viewport+sidebar est bon pour la 3D
