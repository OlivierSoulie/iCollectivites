# Product Backlog - CIMTEA iCollectivites

**Projet** : 016-CIMTEA configurateur (iCollectivites)
**Date de creation** : 24/03/2026
**PO** : A definir
**Derniere mise a jour** : 26/03/2026
**Source specs** : `INPUTS/20250109 - CIMTEA.pdf` (10 pages), `INPUTS/Cimtea - Scenario utilisation.pptx.pdf` (10 pages)

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
> Note : terrain, sol, personnages, lumiere geres cote Lumiscaphe p3d (pas dans la maquette).

### EPIC-05 : Ecran 4 — Saisie informations et generation devis
> Infos projet (commune, reference, remise, forfait pose, coordonnees client) + generation dossier devis simule.

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

#### [US-011] Ecran 4 — Saisie informations projet

**Priorite** : Moyenne | **SP** : 5 | **Sprint** : #1 | **Status** : Done | **Epic** : EPIC-05

En tant que commercial CIMTEA,
Je veux saisir les informations du projet client et parametrer le devis,
Afin de generer un dossier commercial complet.

**Criteres d'acceptation :**
- [x] Nom de projet (genere automatiquement, modifiable)
- [x] Champ Commune
- [x] Champ Reference
- [x] Saisie du taux de remise
- [x] Selection du forfait de pose (terrain facile / normal / difficile)

**Livrables** : `code/maquette/devis.html`

**Source** : PDF p.8

---

### BACKLOG (priorise pour Sprint #2)

---

#### [US-006] Choix du granit (corps du columbarium)

**Priorite** : Haute | **SP** : 3 | **Sprint** : #2 (Prevu) | **Status** : To Do | **Epic** : EPIC-04

En tant qu'utilisateur,
Je veux choisir le coloris du granit pour le corps du columbarium,
Afin de personnaliser l'aspect du produit.

**Criteres d'acceptation :**
- [ ] Nouvelle etape dans la sidebar du configurateur (apres Caveau, avant Recap)
- [ ] Selection parmi les coloris : Rose Porrino, Balmoral, Bianco Carrara, Crema Julia, Kriscon Chocolat, Labrador Vert, Noir Absolu Extra, Tarn Gris, Tarn Marron
- [ ] Cards avec pastille couleur simulee pour chaque granit
- [ ] Choix sauvegarde dans localStorage et affiche dans le recapitulatif
- [ ] Stepbar mise a jour avec l'etape Granit

**Source** : Scenario Lumiscaphe p.6, PDF p.7

---

#### [US-007] Choix des portes (5 matieres)

**Priorite** : Haute | **SP** : 3 | **Sprint** : #2 (Prevu) | **Status** : To Do | **Epic** : EPIC-04

En tant qu'utilisateur,
Je veux choisir la matiere des portes du columbarium,
Afin de personnaliser les finitions.

**Criteres d'acceptation :**
- [ ] Nouvelle etape dans la sidebar du configurateur (apres Granit, avant Recap)
- [ ] 5 matieres selectionnables : Noir Absolu, Noir Afrique, Bleu Lanhelin, Gris Tarn, Lanhelin
- [ ] Cards avec pastille couleur simulee pour chaque matiere
- [ ] Choix sauvegarde dans localStorage et affiche dans le recapitulatif
- [ ] Stepbar mise a jour avec l'etape Portes

**Source** : PDF p.7, Scenario Lumiscaphe p.5

---

#### [US-014] Complement formulaire devis (coordonnees + commentaires)

**Priorite** : Haute | **SP** : 2 | **Sprint** : #2 (Prevu) | **Status** : To Do | **Epic** : EPIC-05

En tant que commercial CIMTEA,
Je veux saisir les coordonnees du client et ajouter des commentaires,
Afin de completer le dossier devis avec toutes les informations necessaires.

**Criteres d'acceptation :**
- [ ] Section "Client" ajoutee dans devis.html : champs Nom et Email
- [ ] Champ Commentaires (textarea) dans la section Projet
- [ ] Email valide requis (validation basique format)
- [ ] Donnees sauvegardees dans localStorage avec le reste du devis
- [ ] Coherent avec le design existant (form-card, form-group)

**Source** : Scenario Lumiscaphe p.8

---

#### [US-013] Ecran 5 — Envoi du devis par email (simule)

**Priorite** : Haute | **SP** : 2 | **Sprint** : #2 (Prevu) | **Status** : To Do | **Epic** : EPIC-06

En tant que commercial CIMTEA,
Je veux envoyer le dossier devis par email directement depuis l'application,
Afin de transmettre l'offre au client sans quitter l'outil.

**Criteres d'acceptation :**
- [ ] Nouveau fichier `code/maquette/envoi.html`
- [ ] Email destinataire pre-rempli depuis le formulaire devis (US-014)
- [ ] Copie automatique a CIMTEA (champ CC pre-rempli, non modifiable)
- [ ] Bouton "Envoyer" avec simulation (toast confirmation)
- [ ] Recap du devis visible en lecture seule
- [ ] Navigation retour vers devis.html
- [ ] Topbar coherente avec breadcrumb complet

**Source** : PDF p.9, Scenario Lumiscaphe p.8

---

### BACKLOG (Sprint #3+)

---

#### [US-012] Ecran 4 — Generation dossier devis simule

**Priorite** : Haute | **SP** : 5 | **Sprint** : #3 (Prevu) | **Status** : To Do | **Epic** : EPIC-05

En tant que commercial CIMTEA,
Je veux generer un apercu du dossier devis,
Afin de visualiser le rendu avant envoi.

**Criteres d'acceptation :**
- [ ] Simulation HTML du dossier devis (pas un vrai PDF)
- [ ] Page de garde simulee avec logo CIMTEA et infos projet
- [ ] Section devis avec configuration + remise + forfait pose
- [ ] Section fiches techniques (placeholder simule)
- [ ] Section photos (placeholder pour photo AR)
- [ ] Bouton "Apercu du devis" dans devis.html qui ouvre la simulation
- [ ] Bouton "Passer a l'envoi" vers ecran 5

**Notes techniques :**
Simulation HTML dans la maquette. Le vrai PDF sera genere cote serveur dans l'application finale.

**Source** : PDF p.8, Scenario Lumiscaphe p.8

---

#### [US-008] Integration Lumiscaphe WebRender et rendu 3D temps reel

**Priorite** : Haute | **SP** : 8 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-04

En tant qu'utilisateur,
Je veux voir un rendu 3D du columbarium qui se met a jour en temps reel,
Afin de visualiser ma configuration avant de demander un devis.

**Criteres d'acceptation :**
- [ ] Viewer Lumiscaphe dans le viewport (remplace le placeholder)
- [ ] Integration via iframe ou composant ng-viewer
- [ ] Camera orbitale (rotation, zoom, pan) via gestes tactiles
- [ ] Mise a jour selon : modules, granit, portes, accessoires
- [ ] Configuration lue depuis XML (ADR-005)

**Notes techniques :**
Moteur Lumiscaphe WebRender (ADR-005), PAS Three.js. Pre-requis : URL WebRender a definir.
API : https://app.swaggerhub.com/apis/Lumiscaphe/WebRender/1.0
Viewer : @lumiscaphe/ng-viewer

---

#### [US-009] Prise de photo sur site et placement AR

**Priorite** : Moyenne | **SP** : 8 | **Sprint** : A planifier | **Status** : To Do | **Epic** : EPIC-04

En tant que commercial CIMTEA sur le terrain,
Je veux prendre une photo du site et placer le columbarium configure dessus,
Afin de montrer au client un avant/apres realiste.

**Criteres d'acceptation :**
- [ ] Mode RA via ARKit : detection du sol, calibrage QR code
- [ ] Positionnement du projet au doigt sur le site reel
- [ ] Capture photo ET video de la scene AR
- [ ] Boutons : Photo, Video, Config, Quitter RA, Valider/Annuler, Retour 3D
- [ ] Sauvegarde des captures (incluses dans le devis)

**Source** : Scenario Lumiscaphe p.7

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
- [ ] Prix non modifiables par le commercial (seule la remise est editable)
- [ ] Gestion des configurations 9 et 18 cases (si confirmees)

---

## Resume du backlog

| US | Titre | SP | Epic | Status |
|---|---|---|---|---|
| US-001 | Synthese recherche CIMTEA | 3 | EPIC-01 | Done |
| US-002 | Parcours utilisateur | 3 | EPIC-01 | Done |
| US-003 | Maquette HTML/CSS | 5 | EPIC-08 | Done |
| US-004 | Ecran 1 — Selection besoin | 2 | EPIC-02 | Done |
| US-005 | Ecran 2 — Selection produit | 3 | EPIC-03 | Done |
| US-011 | Saisie informations projet | 5 | EPIC-05 | Done |
| US-006 | Choix granit (inline par élément) | 3 | EPIC-04 | Done — Sprint #2 |
| US-007 | Choix portes (inline modules) | 3 | EPIC-04 | Done — Sprint #2 |
| US-014 | Complément formulaire devis | 2 | EPIC-05 | Done — Sprint #2 |
| US-013 | Écran 5 — Envoi email simulé | 2 | EPIC-06 | Done — Sprint #2 |
| US-012 | Generation devis simule | 5 | EPIC-05 | To Do — Sprint #3 |
| US-008 | Lumiscaphe WebRender 3D | 8 | EPIC-04 | To Do |
| US-009 | Photo sur site + AR (ARKit) | 8 | EPIC-04 | To Do |
| US-010 | Logique metier et contraintes | 5 | EPIC-07 | To Do |

**Done** : 10 US / 31 SP
**Backlog restant** : 4 US / 26 SP
**Total** : 14 US / 57 SP

---

## Donnees en attente de CIMTEA

| Donnee | Impact | Source |
|---|---|---|
| Coloris granit complets (visuels/textures) | US-006 maquette OK avec noms, textures pour 3D | Scenario p.6 |
| Matieres portes (visuels) | US-007 maquette OK avec noms, textures pour 3D | PDF p.7 |
| Templates PDF (page de garde, fiches tech, methodo pose, docs admin) | Requis pour US-012 version finale | PDF p.8 |
| Photos produits catalogue | Ecran 2 + dossier devis | PDF p.6/p.8 |
| Tarifs produits et options | Calcul devis chiffre (US-010) | PDF p.8 |
| Forfaits pose (tarifs facile/normal/difficile) | Calcul devis | PDF p.8 |
| URL serveur WebRender | Requis pour US-008 | ADR-005 |
| Gamme Emeraude Courbe (convexe/concave) | Etape "Forme" supplementaire | Synthese |
| Configurations 9 et 18 cases | Plus de choix de capacite | Synthese |
| Catalogue Jardins du souvenir / Ossuaire | Ecrans 1-2 complets | PDF p.5 |
| 3 gammes best-sellers pour le lancement | Scenario dit 3 gammes | Scenario p.5 |
