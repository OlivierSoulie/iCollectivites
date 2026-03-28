# Kanban Board - CIMTEA iCollectivites

**Projet** : 016-CIMTEA configurateur
**Sprint** : Sprint #3
**Sprint Goal** : Intégrer le rendu 3D Lumiscaphe WebRender dans le configurateur
**Derniere mise a jour** : 28/03/2026

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

## Done (Sprint #3)

| US | Titre | SP | Validation |
|---|---|---|---|
| US-008 | Lumiscaphe WebRender 3D | 8 | Stakeholder validé 28/03/2026 |

**SP livrés Sprint #3** : 8/8 SP (100%)

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

## Sprint #3 — Livrables

**US-008 — Intégration Lumiscaphe WebRender 3D**

Modifications :
- `code/maquette/configurateur.html` — Viewer @lumiscaphe/viewer v4.1.17 intégré
  - Mode vrObject 360° (rotation souris infinie, 24 frames)
  - Mode image pour caméras Face/Top/Côté
  - Patch fetch pour adapter payload viewer → serveur WebRender
  - 13 paramètres 3D mappés (granits, portes, modules, bancs, idealo)
  - Granits renommés (Branco Carrara, Kinawa Classico, Tarn Moyen, Noir Absoluto)
  - Portes : 4 valeurs WebRender (Balmoral, LabradorVert, NoirAbsoluto, TarnMoyen)
  - Step Colonne supprimée (pas dans la 3D)
  - Step Caveau supprimée du configurateur (déplacée dans devis)
  - Toolbar : boutons 360, Face, Top, Côté + AR(disabled)
- `code/maquette/devis.html` — Section Caveau enterré ajoutée (4 options)

ADRs :
- ADR-005 appliquée : Lumiscaphe WebRender (pas Three.js)

---

## ADRs crees ce sprint

- **ADR-005** : Lumiscaphe WebRender au lieu de Three.js (appliquée)

---

## Backlog (Sprint #4+)

| US | Titre | SP | Epic |
|---|---|---|---|
| US-012 | Génération dossier devis simulé | 5 | EPIC-05 |
| US-009 | Photo sur site + AR | 8 | EPIC-04 |
| US-010 | Logique métier et contraintes | 5 | EPIC-07 |

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

**Sprints completes** : 4 (Sprint #0 + Sprint #1 + Sprint #2 + Sprint #3)
**Story Points livres total** : 39 SP
**User Stories completees total** : 11
**Sprint #3** : 8 SP livrés (US-008 Done)
**Backlog restant** : 3 US / 18 SP
**Velocity** : Sprint #0 = 11 SP, Sprint #1 = 10 SP, Sprint #2 = 10 SP, Sprint #3 = 8 SP (moyenne 9.75 SP)
