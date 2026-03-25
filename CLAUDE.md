# Projet CIMTEA configurateur

**Numero** : 016
**Nom** : CIMTEA configurateur
**Date de creation** : 24/03/2026
**Framework** : Scrumban

---

## Description

Configurateur en ligne pour la gamme de columbariums **Emeraude** de CIMTEA (fabricant/installateur pour communes et collectivites). L'outil permet aux elus et techniciens de composer leur columbarium etape par etape (disposition, modules, accessoires, caveau) et de demander un devis gratuit.

**Objectif** : Etre le premier configurateur columbarium en ligne du marche (aucun concurrent n'en propose).

**Client** : CIMTEA — www.columbarium-cimtea.fr

**Stack technique** : HTML/CSS/JS vanilla (maquette), Three.js prevu pour la 3D. Fichiers CAO SolidWorks disponibles.

---

## Equipe

- **Product Owner (PO)** : Gestion Product Backlog, priorisation
- **Architecte / Scrum Master (ARCH)** : Architecture technique + facilitation ceremonies
- **Developpeur (DEV)** : Implementation
- **QA Tester (QA)** : Tests et validation
- **Documentaliste (DOC)** : Documentation

---

## Demarrage Rapide

### 1. Demarrer avec le Product Owner

Ouvrir une conversation avec Claude et copier le prompt :

```
[Copier le contenu de agents/PO-prompt.md]
```

Ensuite, decrire votre projet au PO pour creer les premieres User Stories.

### 2. Sprint Planning

Une fois le Product Backlog rempli, lancer le Sprint Planning avec ARCH.

### 3. Developpement

Suivre le workflow Scrumban :
- DEV implemente (1h)
- Daily Scrum (5min)
- QA teste (10min)
- Validation checkpoint
- Repeter

---

## Structure du Projet

```
016-CIMTEA configurateur/
├── CLAUDE.md                   Ce fichier
├── SYNTHESE_RECHERCHE_CONFIGURATEUR.md   Recherche metier + benchmark
├── artifacts/                  Artefacts Scrumban
│   ├── product-backlog.md      Backlog (5 epics, 7 US)
│   ├── definition-of-done.md
│   └── kanban-board.md
├── agents/                     Prompts pour chaque agent
├── docs/
│   └── parcours-configurateur.md  Parcours UX en 7 etapes
├── code/
│   └── maquette/
│       └── index.html          Maquette fonctionnelle du configurateur
├── INPUTS/                     Documents source CIMTEA (PDF, images)
├── DOSSIER EMERAUDE RECTANGULAIRE/   Fichiers CAO SolidWorks (rectangulaire)
├── PROJET EMERAUDE IDEALO BANC - ANGLE/  Fichiers CAO SolidWorks (angle)
├── sprints/                    Historique des sprints
└── metrics/                    Metriques du projet
```

---

## Artefacts Scrumban

- **Product Backlog** : `artifacts/product-backlog.md`
- **Definition of Done** : `artifacts/definition-of-done.md`
- **Kanban Board** : `artifacts/kanban-board.md`

---

## Metriques

- **Sprint #0 (Cadrage)** : 11 SP livres, 3 US Done
- **Velocity** : A calculer apres Sprint #1
- **Backlog restant** : 4 US / 18 SP

---

**Framework** : Scrumban
