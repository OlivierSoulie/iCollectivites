# Product Backlog - CIMTEA Configurateur

**Projet** : 016-CIMTEA configurateur
**Date de creation** : 24/03/2026
**PO** : A definir
**Derniere mise a jour** : 25/03/2026

---

## Epics

### EPIC-01 : Recherche et cadrage
> Comprendre le metier CIMTEA, analyser la concurrence, definir le perimetre du configurateur.

### EPIC-02 : Maquette UI configurateur
> Concevoir et implementer l'interface utilisateur du configurateur columbarium Emeraude.

### EPIC-03 : Moteur 3D / Visualisation
> Integrer un rendu 3D interactif (Three.js ou equivalent) base sur les fichiers SolidWorks.

### EPIC-04 : Logique metier et contraintes
> Implementer les regles metier (combinaisons valides, dimensions, capacites).

### EPIC-05 : Devis et export
> Formulaire de demande de devis, generation PDF recapitulatif.

---

## User Stories

### DONE

#### [US-001] Synthese de recherche CIMTEA et benchmark concurrents

**Priorite** : Critique
**Story Points** : 3 SP
**Sprint** : Sprint #0 (Cadrage)
**Status** : Done
**Epic** : EPIC-01

**User Story :**
En tant que Product Owner,
Je veux une synthese complete sur CIMTEA, ses produits et la concurrence,
Afin de cadrer le perimetre du configurateur.

**Criteres d'acceptation :**
- [x] Presentation generale CIMTEA (activite, cible, services)
- [x] Gamme complete listee (20+ modeles)
- [x] Details techniques gamme Emeraude (rectangulaire + courbe)
- [x] Benchmark 7 concurrents analyse
- [x] Conclusion : aucun concurrent n'a de configurateur columbarium
- [x] Parametres configurables identifies

**Livrables** : `SYNTHESE_RECHERCHE_CONFIGURATEUR.md`

---

#### [US-002] Parcours utilisateur du configurateur

**Priorite** : Critique
**Story Points** : 3 SP
**Sprint** : Sprint #0 (Cadrage)
**Status** : Done
**Epic** : EPIC-01

**User Story :**
En tant que UX Designer,
Je veux definir le parcours etape par etape du configurateur,
Afin de guider l'implementation de l'interface.

**Criteres d'acceptation :**
- [x] 7 etapes definies (disposition > modules > colonne > mobilier > caveau > recap)
- [x] Logique conditionnelle documentee (etapes masquees selon choix)
- [x] Matrice des 24 combinaisons modules
- [x] Capacites urnes calculees pour chaque configuration
- [x] ~1400 configurations valides estimees
- [x] Donnees manquantes identifiees (coloris, tarifs, etc.)

**Livrables** : `docs/parcours-configurateur.md`

---

#### [US-003] Maquette HTML/CSS du configurateur

**Priorite** : Haute
**Story Points** : 5 SP
**Sprint** : Sprint #0 (Cadrage)
**Status** : Done
**Epic** : EPIC-02

**User Story :**
En tant que developpeur,
Je veux une maquette fonctionnelle du configurateur,
Afin de valider le parcours utilisateur et le design avant l'integration 3D.

**Criteres d'acceptation :**
- [x] Layout 2 zones : viewport 3D (placeholder) + sidebar configuration
- [x] Design glassmorphism / iOS-like
- [x] 9 etapes navigables (accueil > disposition > modules > colonne > bancs > recueillement > caveau > recap)
- [x] Selection par cartes avec radio buttons et grilles
- [x] Navigation avant/arriere avec fil d'Ariane (breadcrumb)
- [x] Logique conditionnelle (colonne masquee si pas rect+7+seul, banc gauche masque si pas de module gauche)
- [x] Compteur d'urnes dynamique dans le viewport
- [x] Page recapitulatif complete avec toutes les selections
- [x] Responsive (mobile-ready via meta viewport)
- [x] Fichier unique HTML autonome (CSS + JS inline)

**Livrables** : `code/maquette/index.html`

---

### BACKLOG (a prioriser)

#### [US-004] Integration Three.js et rendu 3D basique

**Priorite** : Haute
**Story Points** : 8 SP
**Sprint** : A planifier
**Status** : To Do
**Epic** : EPIC-03

**User Story :**
En tant qu'utilisateur,
Je veux voir un rendu 3D du columbarium qui se met a jour en temps reel,
Afin de visualiser ma configuration avant de demander un devis.

**Criteres d'acceptation :**
- [ ] Scene Three.js dans le viewport (remplace le placeholder)
- [ ] Chargement des modeles 3D (conversion SLDPRT > glTF/OBJ)
- [ ] Camera orbitale (rotation, zoom, pan)
- [ ] Mise a jour du modele selon les selections de la sidebar
- [ ] Eclairage et materiaux de base

**Notes techniques :**
Fichiers SolidWorks disponibles dans `DOSSIER EMERAUDE RECTANGULAIRE/` et `PROJET EMERAUDE IDEALO BANC - ANGLE/`. Necessite conversion vers un format web (glTF recommande).

---

#### [US-005] Logique metier et validation des contraintes

**Priorite** : Haute
**Story Points** : 5 SP
**Sprint** : A planifier
**Status** : To Do
**Epic** : EPIC-04

**User Story :**
En tant que developpeur,
Je veux un moteur de regles metier centralise,
Afin de garantir que seules les configurations valides sont proposees.

**Criteres d'acceptation :**
- [ ] Regles de contraintes extraites du parcours utilisateur
- [ ] Validation en temps reel des combinaisons
- [ ] Calcul automatique des dimensions d'emprise au sol
- [ ] Gestion des configurations 9 et 18 cases (si confirmees par CIMTEA)

---

#### [US-006] Formulaire de demande de devis

**Priorite** : Moyenne
**Story Points** : 3 SP
**Sprint** : A planifier
**Status** : To Do
**Epic** : EPIC-05

**User Story :**
En tant qu'elu ou technicien de commune,
Je veux envoyer ma configuration pour obtenir un devis gratuit,
Afin de lancer le processus d'achat.

**Criteres d'acceptation :**
- [ ] Formulaire de contact (nom, commune, email, telephone)
- [ ] Recapitulatif de configuration joint
- [ ] Envoi par email ou API
- [ ] Confirmation a l'utilisateur

---

#### [US-007] Export PDF du recapitulatif

**Priorite** : Basse
**Story Points** : 2 SP
**Sprint** : A planifier
**Status** : To Do
**Epic** : EPIC-05

**User Story :**
En tant qu'utilisateur,
Je veux telecharger un PDF de ma configuration,
Afin de le partager en interne avant de demander un devis.

**Criteres d'acceptation :**
- [ ] Generation PDF cote client (jsPDF ou equivalent)
- [ ] Contient le recapitulatif complet + capture du rendu 3D
- [ ] Branding CIMTEA

---

## Donnees en attente de CIMTEA

| Donnee | Impact | Status |
|---|---|---|
| Coloris granit disponibles | Ajouterait une etape "Finitions" | En attente |
| Types de portes | Personnalisation visuelle | En attente |
| Jardiniere (options) | Option accessoire supplementaire | En attente |
| Gamme Emeraude Courbe | Ajouterait une etape "Forme" | En attente |
| Configurations 9 et 18 cases | Plus de choix de capacite | En attente |
| Tarifs indicatifs | Estimation budget en temps reel | En attente |
| Autres gammes (Saphir, Azur...) | Etape 0 "Choix de gamme" | En attente |
