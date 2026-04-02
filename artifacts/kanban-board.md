# Kanban Board - CIMTEA iCollectivites

**Projet** : 016-CIMTEA configurateur
**Sprint** : Sprint #4
**Sprint Goal** : Dossier devis simulé (remis en mairie) + Logique métier
**Dernière mise à jour** : 02/04/2026

---

## To Do

| US | Titre | SP | Assigné |
|---|---|---|---|
| US-010 | Logique métier et contraintes | 5 | — |

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

## Done (Sprint #4)

| US | Titre | SP | Validation |
|---|---|---|---|
| US-012 | Génération dossier devis simulé | 5 | Stakeholder validé 01/04/2026 |

**Améliorations validées (02/04/2026) :**
- Nouvelle base WebRender : `b3fa2076-6b4f-47fd-b01f-c4f316df847c` (15 paramètres)
- Contrôles viewport : bouton Sol (Sans/Béton/Graviers) + toggle Référence (Couple)
- Refactoring DRY : `WR_DATABASE_ID` centralisé dans `shared.js` uniquement
- Dossier devis : filigrane "CONFIDENTIEL" gravé dans les pixels des pages statiques (canvas)
- Viewport hint : fond semi-transparent pour lisibilité sur décor 3D
- Snapshot devis : force `Couple.Sans` et `Sol.Sans` (options d'affichage viewport exclues)

**SP livrés Sprint #4** : 5/10 SP (50%)

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
  - Mode image pour caméras Top/Côté
  - Patch fetch pour adapter payload viewer → serveur WebRender
  - 13 paramètres 3D mappés (granits, portes, carreaux, modules, bancs, idealo)
  - Database ID : `b426509a-077a-4c94-b28f-06cb67d553fa`
  - Granits simplifiés : 3 coloris (Bleu, Gris, Rose)
  - Portes : 4 coloris (Gris, Noir, Noir Moucheté, Rose)
  - Carreaux (sol) : configurable dans step Recueillement (4 coloris)
  - Step Colonne supprimée (pas dans la 3D)
  - Ordre des étapes : Module G → Banc G → IDEALO → Module D → Banc D → Récap
  - Pré-sélection couleurs par défaut (Gris/Noir)
  - Toolbar : boutons 360, Top, Côté + AR(disabled)
- `code/maquette/devis.html`
  - Section Caveau supprimée, remplacée par Provenance granit (France/Import avec drapeaux SVG)
  - Image 3D WebRender du monument (Snapshot API, frame 0) dans le panneau gauche
  - Section recap configuration supprimée
- `code/maquette/envoi.html`
  - Image 3D WebRender du monument dans l'aperçu projet
  - Provenance granit avec drapeaux dans le récap infos
  - Infos compactées : Client+Email sur une ligne, Remise+Forfait+Provenance sur une ligne
  - Commentaires avec retours à la ligne préservés et ascenseur si > 3 lignes
  - Layout optimisé : infos en haut, image + config côte à côte en bas
- `code/maquette/styles.css`
  - Labels swatches : largeur 60px, noms complets visibles, gap 13px

ADRs :
- ADR-005 appliquée : Lumiscaphe WebRender (pas Three.js)

---

## Sprint #4 — Livrables

**US-012 — Génération dossier devis simulé**

Modifications :
- `code/maquette/dossier-devis.html` — Dossier complet 46 pages
  - Pages PDF statiques avec filigrane "CONFIDENTIEL" gravé dans les pixels (canvas blur + watermark)
  - Page visuel 3D dynamique (Snapshot WebRender + tableau config)
  - Page devis chiffré dynamique (tableau lignes + totaux HT/TVA/TTC)
  - Sidebar résumé financier + infos client

**Améliorations WebRender (02/04/2026)**

Modifications :
- `code/maquette/shared.js` — Database ID centralisé : `b3fa2076-6b4f-47fd-b01f-c4f316df847c`
- `code/maquette/configurateur.html`
  - Import `shared.js` ajouté (suppression doublon WR_SERVER/WR_DATABASE_ID)
  - 15 paramètres WebRender (ajout Sol + Couple)
  - Bouton "Sol" viewport (menu popup : Sans/Béton/Graviers)
  - Toggle "Référence" viewport (icône règle+personnage, Couple Avec/Sans)
  - Toolbar droite viewport dissociée des caméras (gauche)
  - Viewport hint avec fond semi-transparent (lisibilité sur décor)
  - Snapshot devis : force Couple.Sans + Sol.Sans (affichage viewport uniquement)

---

## ADRs crees ce sprint

- **ADR-005** : Lumiscaphe WebRender au lieu de Three.js (appliquée)

---

## Backlog (Sprint #5+)

| US | Titre | SP | Epic |
|---|---|---|---|
| US-009 | Photo sur site + AR | 8 | EPIC-04 |

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
