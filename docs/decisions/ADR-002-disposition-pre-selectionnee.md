# ADR-002 — Disposition geree par le catalogue, pas le configurateur

## Statut
Accepted (mis a jour 25/03/2026)

## Contexte
L'utilisateur arrive sur le configurateur via le catalogue avec un parametre `?produit=emeraude-rect` ou `?produit=emeraude-angle`. Ce choix implique deja la disposition (rectangulaire ou angle). L'etape "Disposition" dans le configurateur est donc redondante.

Probleme supplementaire : si l'utilisateur change la disposition dans le configurateur, l'URL ne se met pas a jour, ce qui cree une incoherence.

## Decision
- L'etape "Disposition" est **supprimee du configurateur**
- La disposition est deduite du parametre URL `?produit=` et pre-remplie silencieusement
- Le configurateur **demarre directement sur l'etape Module droit** (etape 2)
- Pour changer de disposition, l'utilisateur **retourne au catalogue** (bouton retour depuis etape 2)
- Le flow est lineaire : Catalogue (choix produit = choix disposition) > Configurateur (modules, options)

## Consequences
### Positives
- Zero incoherence entre URL et etat interne
- Flow lineaire clair : un seul endroit pour choisir le produit/disposition
- Moins de code a maintenir dans le configurateur

### Negatives / Trade-offs
- L'utilisateur doit revenir au catalogue pour changer de disposition (acceptable car c'est un choix structurant)

## Alternatives considerees
- **Option A (sauter l'etape, garder le HTML)** : rejetee — etape fantome inutile
- **Option C (pre-selectionnee modifiable + replaceState)** : rejetee — complexite inutile, incoherence possible entre URL et etat
