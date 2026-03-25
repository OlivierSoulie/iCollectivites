# Parcours Utilisateur — Configurateur Columbarium Emeraude

> Date : 24 mars 2026
> Statut : Brouillon / Analyse
> Cible : Elus et techniciens de communes / collectivites territoriales

---

## Principe general

Du choix le plus structurant au plus optionnel.
Les etapes conditionnelles apparaissent/disparaissent selon les choix precedents.

---

## Etape 1 — Disposition

> *"Quel type d'implantation pour votre columbarium ?"*

| Choix | Description |
|---|---|
| **Rectangulaire** | Implantation lineaire classique |
| **Angle (L)** | Implantation en equerre, adaptee aux angles de parcelles |

Impact : conditionne le sol, les pieces disponibles et le rendu global.

---

## Etape 2 — Module principal (droite)

> *"Choisissez le module principal"*

| Choix | Capacite urnes |
|---|---|
| **7 cases** | 21 urnes (3/case) |
| **10 cases** | 30 urnes (3/case) |
| **12 cases** | 36 urnes (3/case) |

Contrainte : les versions 10 et 12 cases sont "sans rainures".

---

## Etape 3 — Module secondaire (gauche, symetrique)

> *"Souhaitez-vous un second module en miroir ?"*

| Choix | Description |
|---|---|
| **Aucun** | Module simple, un seul columbarium |
| **7 cases** | Module symetrique 7 cases |
| **10 cases** | Module symetrique 10 cases |
| **12 cases** | Module symetrique 12 cases |

Note : le module secondaire est independant du principal.
On peut combiner librement (ex : 7 droite + 12 gauche).

### Matrice des combinaisons modules

| Module droit \ Module gauche | Aucun | 7 cases | 10 cases | 12 cases |
|---|---|---|---|---|
| **7 cases** | 7 | 7+7 | 7+10 | 7+12 |
| **10 cases** | 10 | 10+7 | 10+10 | 10+12 |
| **12 cases** | 12 | 12+7 | 12+10 | 12+12 |

Soit **12 combinaisons** de modules par disposition.
Total avec les 2 dispositions : **24 combinaisons**.

Capacite totale selon configuration :

| Configuration | Capacite (urnes) |
|---|---|
| 7 seul | 21 |
| 10 seul | 30 |
| 12 seul | 36 |
| 7 + 7 | 42 |
| 7 + 10 | 51 |
| 7 + 12 | 57 |
| 10 + 10 | 60 |
| 10 + 12 | 66 |
| 12 + 12 | 72 |

---

## Etape 4 — Colonne decorative

> *"Ajouter une colonne decorative laterale ?"*

| Choix | Description |
|---|---|
| **Oui** | Colonne en granit a droite du module |
| **Non** | Sans colonne |

**Contrainte** : disponible uniquement si :
- Disposition = Rectangulaire
- Module droit = 7 cases
- Module gauche = Aucun

Sinon cette etape est masquee.

---

## Etape 5 — Mobilier d'accompagnement

> *"Quel mobilier souhaitez-vous ?"*

### 5a — Banc droit

| Choix | Description |
|---|---|
| **Aucun** | Pas de banc |
| **Banc Berlin** | Modele Berlin |
| **Banc Saphir 120** | Modele Saphir, 120 cm |

### 5b — Banc gauche

| Choix | Description |
|---|---|
| **Aucun** | Pas de banc |
| **Banc Berlin** | Modele Berlin |
| **Banc Saphir 120** | Modele Saphir, 120 cm |

Les deux bancs sont independants : on peut mixer (ex : Berlin a droite, Saphir a gauche, ou un seul cote).
Etape 5b visible uniquement si un module gauche est selectionne.

### 5c — Espace de recueillement

| Choix | Description |
|---|---|
| **Aucun** | Pas d'espace de recueillement |
| **IDEALO 2023** | Monument central avec element decoratif (flamme) |

Note : l'espace de recueillement se place au centre entre les deux modules
(ou a cote du module unique).

---

## Etape 6 — Caveau enterre (option technique)

> *"Souhaitez-vous des caveaux polymere sous le columbarium ?"*

| Choix | Description |
|---|---|
| **Aucun** | Pas de caveau |
| **Simple 27cm avec fond** | Caveau polymere ferme |
| **Simple 27cm sans fond** | Caveau polymere ouvert |
| **Double 54cm** | Caveau polymere double hauteur |

---

## Etape 7 — Recapitulatif et devis

> Synthese visuelle de la configuration choisie

### Contenu du recapitulatif

- Visuel 3D ou schema de la configuration
- Disposition choisie
- Module(s) : nombre de cases (droit + gauche)
- Capacite totale en urnes
- Dimensions d'emprise au sol (automatique)
- Options selectionnees (colonne, banc, table, caveau)
- Bouton **"Demander un devis gratuit"** (formulaire de contact)
- Bouton **"Telecharger le recapitulatif en PDF"** (optionnel)

---

## Schema du parcours

```
[1. Disposition]
  Rectangulaire / Angle
       |
[2. Module droit]
  7 / 10 / 12 cases
       |
[3. Module gauche]
  Aucun / 7 / 10 / 12 cases
       |
[4. Colonne] ← conditionnel (rect. + 7 cases seul)
  Oui / Non
       |
[5. Mobilier]
  5a. Banc droit : Aucun / Berlin / Saphir 120
  5b. Banc gauche : Aucun / Berlin / Saphir 120 (si module gauche)
  5c. Espace de recueillement : Aucun / IDEALO 2023
       |
[6. Caveau]
  Aucun / Simple avec fond / Simple sans fond / Double
       |
[7. Recapitulatif + Demande de devis]
```

---

## Donnees manquantes pour enrichir le configurateur

| Donnee | Impact |
|---|---|
| Coloris granit disponibles | Ajouterait une etape "Finitions" |
| Types de portes | Personnalisation visuelle |
| Jardiniere | Option accessoire supplementaire |
| Gamme Emeraude Courbe (convexe/concave) | Ajouterait une etape "Forme" |
| Configurations 9 et 18 cases | Plus de choix de capacite |
| Tarifs indicatifs | Estimation budget en temps reel |
| Autres gammes (Saphir, Azur...) | Etape 0 "Choix de gamme" |

---

## Nombre total de combinaisons (donnees actuelles)

- Dispositions : 2
- Combinaisons modules : 12
- Colonne : 2 (applicable dans 1 cas sur 24)
- Banc droit : 3 (Aucun / Berlin / Saphir)
- Banc gauche : 3 (si module gauche present, sinon 1)
- Espace de recueillement : 2
- Caveau : 4

**Environ 1 500 combinaisons** (hors contraintes).
**Avec contraintes : ~1 400 configurations valides.**
