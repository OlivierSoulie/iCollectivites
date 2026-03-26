# Kanban Board - CIMTEA iCollectivites

**Projet** : 016-CIMTEA configurateur
**Sprint** : Sprint #2
**Sprint Goal** : Completer la personnalisation (granit, portes) et le cycle devis complet (formulaire enrichi + envoi simule)
**Derniere mise a jour** : 26/03/2026

---

## To Do

(vide)

---

## In Progress

(vide)

---

## Code Review

(vide)

---

## Testing

(vide)

---

## Done (Sprint #2)

| US | Titre | SP | Validation |
|---|---|---|---|
| US-006 | Choix granit (inline par élément) | 3 | Stakeholder validé 26/03/2026 |
| US-007 | Choix portes (inline modules) | 3 | Stakeholder validé 26/03/2026 |
| US-014 | Complément formulaire devis | 2 | Stakeholder validé 26/03/2026 |
| US-013 | Écran 5 — Envoi email simulé | 2 | Stakeholder validé 26/03/2026 |

**SP livrés Sprint #2** : 10/10 SP (100%)

---

## Done (Sprint #1)

| US | Titre | SP | QA |
|---|---|---|---|
| US-004 | Ecran 1 — Selection besoin | 2 | 7/7 PASS |
| US-005 | Ecran 2 — Selection produit | 3 | 29/29 PASS + re-test 17/17 PASS |
| US-011 | Ecran 4 — Saisie infos projet + devis | 5 | 17/17 PASS |

**SP livres Sprint #1** : 10/10 SP (100%)

---

## ADRs crees ce sprint

- **ADR-001** : Structure multi-pages HTML avec CSS partage
- **ADR-002** : Disposition geree par le catalogue, pas le configurateur
- **ADR-003** : Topbar de navigation commune a tous les ecrans
- **ADR-004** : Barre d'etapes de configuration sous la topbar

---

## Sprint #1 — Livrables

**Fichiers crees/modifies** :
- `code/maquette/index.html` — Ecran 1 : selection besoin (4 cards)
- `code/maquette/catalogue.html` — Ecran 2 : catalogue 20 gammes, 2 niveaux, recherche
- `code/maquette/configurateur.html` — Ecran 3 : refactorise (topbar, stepbar, disposition auto, restauration config)
- `code/maquette/devis.html` — Ecran 4 : formulaire devis + photo AR placeholder
- `code/maquette/styles.css` — CSS commun (topbar, composants)
- `docs/decisions/ADR-001 a 004`

---

## Backlog (Sprint #2 a planifier)

| US | Titre | SP | Epic |
|---|---|---|---|
| US-006 | Choix granit | 3 | EPIC-04 |
| US-007 | Choix portes (5 matieres) | 3 | EPIC-04 |
| US-008 | Three.js rendu 3D temps reel | 8 | EPIC-04 |
| US-009 | Photo sur site + placement AR | 8 | EPIC-04 |
| US-010 | Logique metier et contraintes | 5 | EPIC-07 |
| US-012 | Generation dossier devis PDF | 8 | EPIC-05 |
| US-013 | Envoi devis par email | 3 | EPIC-06 |

---

## Sprint #0 — Cadrage (24/03/2026) — TERMINE

| US | Titre | SP |
|---|---|---|
| US-001 | Synthese de recherche CIMTEA et benchmark | 3 |
| US-002 | Parcours utilisateur du configurateur | 3 |
| US-003 | Maquette HTML/CSS du configurateur | 5 |

**Story Points livres** : 11 SP

---

## Statistiques

**Sprints completes** : 2 (Sprint #0 + Sprint #1)
**Story Points livres total** : 21 SP
**User Stories completees total** : 6
**Backlog restant** : 7 US / 38 SP
**Velocity** : Sprint #0 = 11 SP, Sprint #1 = 10 SP (moyenne 10.5 SP)
