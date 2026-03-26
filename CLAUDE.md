# Projet CIMTEA configurateur

**Numero** : 016
**Nom** : CIMTEA configurateur
**Date de creation** : 24/03/2026
**Framework** : Scrumban

---

## Description

Application iPad **iCollectivites** : outil d'aide a la vente pour CIMTEA (fabricant/installateur de columbariums pour communes et collectivites). Permet de configurer un columbarium, visualiser en 3D, prendre une photo du site, et generer un dossier devis complet.

**5 ecrans** : Besoin > Produit > Configuration 3D > Infos + Devis PDF > Envoi email

**Client** : CIMTEA — www.columbarium-cimtea.fr
**Specs** : `INPUTS/20250109 - CIMTEA.pdf` (10 pages)

**Stack technique** : HTML/CSS/JS vanilla (maquette actuelle), Three.js prevu pour la 3D. Fichiers CAO SolidWorks disponibles.

**Scope** : Columbarium (prioritaire), Jardin du souvenir, Ossuaire
**Differenciateur** : Aucun concurrent n'a de configurateur columbarium en ligne.

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

- **Sprint #0 (Cadrage)** : 11 SP livrés, 3 US Done
- **Sprint #1 (Parcours)** : 10 SP livrés, 3 US Done
- **Sprint #2 (Personnalisation + Devis)** : 10 SP livrés, 4 US Done
- **Velocity** : 10.3 SP/sprint
- **Backlog restant** : 4 US / 26 SP
- **Total projet** : 14 US / 57 SP (10 Done, 4 To Do)

---

## Regles critiques

- **JAMAIS commiter sans validation stakeholder** : DEV fait le code → montre au stakeholder → stakeholder valide → ALORS commit + push. Aucune exception.
- **Tous les textes en français avec accents** : C'est une application française. Tous les textes visibles (titres, labels, placeholders, boutons, messages) DOIVENT être en français correct avec accents (é, è, ê, à, ù, ç, etc.). Pas de texte sans accent.
- Si le dossier memory n'est pas trouve dans `~/.claude/projects/`, chercher dans le repo : `.claude/projects/.../memory/`

---

**Framework** : Scrumban
