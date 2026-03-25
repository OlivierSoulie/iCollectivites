# Product Backlog - CIMTEA iCollectivites

**Projet** : 016-CIMTEA configurateur (iCollectivites)
**Date de creation** : 24/03/2026
**PO** : A definir
**Derniere mise a jour** : 25/03/2026
**Source specs** : `INPUTS/20250109 - CIMTEA.pdf` (10 pages)

---

## Epics

### EPIC-01 : Recherche et cadrage
> Comprendre le metier CIMTEA, analyser la concurrence, definir le perimetre.

### EPIC-02 : Ecran 1 — Selection du besoin
> Choix du type de produit : Columbarium, Jardin du souvenir, Ossuaire, Global.

### EPIC-03 : Ecran 2 — Selection du produit
> Choix du modele dans la gamme (Emeraude, Saphir, etc.).

### EPIC-04 : Ecran 3 — Configuration produit et visualisation 3D
> Configuration detaillee (modules, options, granit, portes) + rendu 3D temps reel + prise de photo sur site.

### EPIC-05 : Ecran 4 — Saisie informations et generation devis
> Infos projet (commune, reference, remise, forfait pose) + generation dossier PDF complet.

### EPIC-06 : Ecran 5 — Envoi du devis
> Envoi par email du dossier devis en piece jointe + suivi.

### EPIC-07 : Logique metier et contraintes
> Moteur de regles (combinaisons valides, dimensions, tarifs).

### EPIC-08 : UI/UX et maquette
> Design de l'interface, navigation, responsive iPad.

---

## User Stories

### DONE

#### [US-001] Synthese de recherche CIMTEA et benchmark concurrents

**Priorite** : Critique | **SP** : 3 | **Sprint** : #0 (Cadrage) | **Status** : Done | **Epic** : EPIC-01

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

**Priorite** : Critique | **SP** : 3 | **Sprint** : #0 (Cadrage) | **Status** : Done | **Epic** : EPIC-01

En tant que UX Designer,
Je veux definir le parcours etape par etape du configurateur,
Afin de guider l'implementation de l'interface.

**Criteres d'acceptation :**
- [x] 7 etapes definies (disposition > modules > colonne > mobilier > caveau > recap)
- [x] Logique conditionnelle documentee (etapes masquees selon choix)
- [x] Matrice des 24 combinaisons modules
- [x] Capacites urnes calculees pour chaque configuration
- [x] ~1400 configurations valides estimees
- [x] Donnees manquantes identifiees

**Livrables** : `docs/parcours-configurateur.md`

---

#### [US-003] Maquette HTML/CSS du configurateur (Ecran 3)

**Priorite** : Haute | **SP** : 5 | **Sprint** : #0 (Cadrage) | **Status** : Done | **Epic** : EPIC-08

En tant que developpeur,
Je veux une maquette fonctionnelle du configurateur,
Afin de valider le parcours utilisateur et le design avant l'integration 3D.

**Criteres d'acceptation :**
- [x] Layout 2 zones : viewport 3D (placeholder) + sidebar configuration
- [x] Design glassmorphism / iOS-like
- [x] 9 etapes navigables (accueil > disposition > modules > colonne > bancs > recueillement > caveau > recap)
- [x] Selection par cartes avec radio buttons et grilles
- [x] Navigation avant/arriere avec fil d'Ariane (breadcrumb)
- [x] Logique conditionnelle
- [x] Compteur d'urnes dynamique dans le viewport
- [x] Page recapitulatif complete
- [x] Fichier unique HTML autonome (CSS + JS inline)

**Livrables** : `code/maquette/index.html`

---

### BACKLOG (a prioriser)

---

#### [US-004] Ecran 1 — Selection du besoin

**Priorite** : Haute | **SP** : 2 | **Sprint** : #1 | **Status** : Done | **Epic** : EPIC-02

En tant qu'utilisateur (commercial CIMTEA),
Je veux choisir le type de besoin du client,
Afin d'orienter vers le bon catalogue produit.

**Criteres d'acceptation :**
- [x] Choix entre : Columbarium, Jardin du souvenir, Ossuaire, Global
- [x] Navigation vers l'ecran 2 selon le choix
- [x] Design coherent avec la maquette existante
- [x] Seul Columbarium actif, les 3 autres bouchonnes "Bientot disponible"
- [x] Topbar commune (ADR-003)

**Livrables** : `code/maquette/index.html`, `code/maquette/styles.css`

**Source** : PDF p.5

---

#### [US-005] Ecran 2 — Selection du produit

**Priorite** : Haute | **SP** : 3 | **Sprint** : #1 | **Status** : Done | **Epic** : EPIC-03

En tant qu'utilisateur,
Je veux parcourir et selectionner un modele dans la gamme CIMTEA,
Afin de configurer le produit choisi.

**Criteres d'acceptation :**
- [x] Catalogue visuel des modeles disponibles (20 gammes CIMTEA)
- [x] Navigation 2 niveaux : gammes > produits dans la gamme
- [x] Barre de recherche temps reel (filtre gammes + produits)
- [x] Fiche produit resumee (icone, nom, description, capacite)
- [x] Selection et passage a l'ecran 3
- [x] Seuls Emeraude Rect et Emeraude Angle actifs, reste bouchonne
- [x] Topbar commune (ADR-003)

**Livrables** : `code/maquette/catalogue.html`

**Source** : PDF p.6

---

#### [US-006] Choix du granit (corps du columbarium)

**Priorite** : Haute | **SP** : 3 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-04

En tant qu'utilisateur,
Je veux choisir le coloris du granit pour le corps du columbarium,
Afin de personnaliser l'aspect du produit.

**Criteres d'acceptation :**
- [ ] Selection parmi les coloris disponibles : Rose de la Clarte, Tarn Saint-Salvy (+ autres a confirmer)
- [ ] Apercu visuel du granit selectionne
- [ ] Mise a jour du rendu 3D en temps reel

**Source** : PDF p.7

---

#### [US-007] Choix des portes (5 matieres)

**Priorite** : Haute | **SP** : 3 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-04

En tant qu'utilisateur,
Je veux choisir la matiere des portes du columbarium,
Afin de personnaliser les finitions.

**Criteres d'acceptation :**
- [ ] 5 matieres selectionnables : Noir Absolu, Noir Afrique, Bleu Lanhelin, Gris Tarn, Lanhelin
- [ ] Apercu visuel de chaque matiere
- [ ] Mise a jour du rendu 3D en temps reel

**Source** : PDF p.7

---

#### [US-008] Integration Three.js et rendu 3D temps reel

**Priorite** : Haute | **SP** : 8 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-04

En tant qu'utilisateur,
Je veux voir un rendu 3D du columbarium qui se met a jour en temps reel,
Afin de visualiser ma configuration avant de demander un devis.

**Criteres d'acceptation :**
- [ ] Scene Three.js dans le viewport (remplace le placeholder)
- [ ] Chargement des modeles 3D (conversion SLDPRT > glTF)
- [ ] Camera orbitale (rotation, zoom, pan)
- [ ] Mise a jour selon : modules, granit, portes, accessoires
- [ ] Eclairage et materiaux realistes

**Notes techniques :**
Fichiers SolidWorks dans `DOSSIER EMERAUDE RECTANGULAIRE/` et `PROJET EMERAUDE IDEALO BANC - ANGLE/`.

---

#### [US-009] Prise de photo sur site et placement AR

**Priorite** : Moyenne | **SP** : 8 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-04

En tant que commercial CIMTEA sur le terrain,
Je veux prendre une photo du site et placer le columbarium configure dessus,
Afin de montrer au client un avant/apres realiste.

**Criteres d'acceptation :**
- [ ] Capture photo via camera iPad
- [ ] Placement du modele 3D sur la photo
- [ ] Ajustement position/echelle
- [ ] Sauvegarde de la photo composee (incluse dans le devis)

**Source** : PDF p.7

---

#### [US-010] Logique metier et validation des contraintes

**Priorite** : Haute | **SP** : 5 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-07

En tant que developpeur,
Je veux un moteur de regles metier centralise,
Afin de garantir que seules les configurations valides sont proposees.

**Criteres d'acceptation :**
- [ ] Regles de contraintes extraites du parcours utilisateur
- [ ] Validation en temps reel des combinaisons
- [ ] Calcul automatique des dimensions d'emprise au sol
- [ ] Gestion des configurations 9 et 18 cases (si confirmees)

---

#### [US-011] Ecran 4 — Saisie informations projet

**Priorite** : Moyenne | **SP** : 5 | **Sprint** : #1 | **Status** : Done | **Epic** : EPIC-05

En tant que commercial CIMTEA,
Je veux saisir les informations du projet client et parametrer le devis,
Afin de generer un dossier commercial complet.

**Criteres d'acceptation :**
- [ ] Nom de projet (genere automatiquement, modifiable)
- [ ] Champ Commune
- [ ] Champ Reference
- [ ] Saisie du taux de remise
- [ ] Selection du forfait de pose (terrain facile / normal / difficile)

**Source** : PDF p.8

---

#### [US-012] Ecran 4 — Generation dossier devis PDF

**Priorite** : Haute | **SP** : 8 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-05

En tant que commercial CIMTEA,
Je veux generer un dossier devis PDF complet et normalise,
Afin de presenter une offre professionnelle au client.

**Criteres d'acceptation :**
- [ ] Page de garde normalisee CIMTEA
- [ ] Devis chiffre (configuration + remise + forfait pose)
- [ ] Fiches techniques des produits selectionnes
- [ ] Methodologies de pose
- [ ] Documents administratifs
- [ ] Photos des produits (dont photo sur site si prise)
- [ ] Export PDF assemblant toutes les sections

**Notes techniques :**
Necessite templates et assets fournis par CIMTEA. A clarifier : generation client ou serveur.

**Source** : PDF p.8

---

#### [US-013] Ecran 5 — Envoi du devis par email

**Priorite** : Moyenne | **SP** : 3 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-06

En tant que commercial CIMTEA,
Je veux envoyer le dossier devis par email directement depuis l'application,
Afin de transmettre l'offre au client sans quitter l'outil.

**Criteres d'acceptation :**
- [ ] Saisie de l'email destinataire
- [ ] Devis PDF en piece jointe
- [ ] Confirmation d'envoi
- [ ] Tracabilite (historique "Messages envoyes" ou integration CRM)

**Source** : PDF p.9

---

## Resume du backlog

| US | Titre | SP | Epic | Status |
|---|---|---|---|---|
| US-001 | Synthese recherche CIMTEA | 3 | EPIC-01 | Done |
| US-002 | Parcours utilisateur | 3 | EPIC-01 | Done |
| US-003 | Maquette HTML/CSS | 5 | EPIC-08 | Done |
| US-004 | Ecran 1 — Selection besoin | 2 | EPIC-02 | Done |
| US-005 | Ecran 2 — Selection produit | 3 | EPIC-03 | Done |
| US-006 | Choix granit | 3 | EPIC-04 | To Do |
| US-007 | Choix portes (5 matieres) | 3 | EPIC-04 | To Do |
| US-008 | Three.js rendu 3D temps reel | 8 | EPIC-04 | To Do |
| US-009 | Photo sur site + placement AR | 8 | EPIC-04 | To Do |
| US-010 | Logique metier et contraintes | 5 | EPIC-07 | To Do |
| US-011 | Saisie informations projet | 5 | EPIC-05 | Done |
| US-012 | Generation dossier devis PDF | 8 | EPIC-05 | To Do |
| US-013 | Envoi devis par email | 3 | EPIC-06 | To Do |

**Done** : 3 US / 11 SP
**Backlog** : 10 US / 48 SP
**Total** : 13 US / 59 SP

---

## Donnees en attente de CIMTEA

| Donnee | Impact | Source |
|---|---|---|
| Coloris granit complets | Confirmer Rose de la Clarte, Tarn Saint-Salvy + autres | PDF p.7 |
| Matieres portes (visuels) | Textures pour rendu 3D des 5 matieres | PDF p.7 |
| Templates PDF (page de garde, fiches tech, methodo pose, docs admin) | Requis pour US-012 | PDF p.8 |
| Photos produits catalogue | Ecran 2 + dossier devis | PDF p.6/p.8 |
| Tarifs produits et options | Calcul devis chiffre | PDF p.8 |
| Forfaits pose (tarifs facile/normal/difficile) | Calcul devis | PDF p.8 |
| Gamme Emeraude Courbe (convexe/concave) | Etape "Forme" supplementaire | Synthese |
| Configurations 9 et 18 cases | Plus de choix de capacite | Synthese |
| Catalogue Jardins du souvenir / Ossuaire | Ecrans 1-2 complets | PDF p.5 |
| Option iCollectivites seul vs + Coati Factory | Architecture technique (avec/sans CRM) | PDF p.3-4 |
