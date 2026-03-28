---
name: Pre-requis et structure WebRender
description: URL serveur, database ID, structure complete des 13 parametres de config 3D, cameras, et fonctionnement API
type: project
---

**URL serveur** : https://wr-lumis3d.lumiscaphe.com
**Database ID** : abf5282e-8ba4-443c-9dac-2a8d3434f034
**Produit** : CIMTEA-EMERAUDE_RECTANGULAIRE-OSE-26032026 (id: ff9853a3-5d9a-4fb8-8c10-0b8e56f387a6)

## API — points cles

- Endpoints a la racine (pas de /api/v1/) : `/Database`, `/Snapshot`, `/ImageFromBookmark`
- Parametre `databaseId` (I majuscule)
- Pas d'authentification
- `/Snapshot` (POST) retourne une URL JSON `{"url":"..."}` vers `/Resource?...` — 2 appels necessaires
- `/Database?databaseId=...` retourne le XML complet de la base

## 13 parametres de configuration

| Parametre | Valeurs |
|---|---|
| ColumbD, ColumbG | 7Cases, 10Cases, 12Cases, Aucun |
| BancD, BancG | Aucun, Berlin, Saphir120 |
| Idealo | Avec, Sans |
| GranitMonumentD, GranitMonumentG | 9 granits |
| GranitBancD, GranitBancG | 9 granits |
| GranitIdealo | 9 granits |
| GranitPortesD, GranitPortesG | 4 granits (Balmoral, LabradorVert, NoirAbsoluto, TarnMoyen) |
| GranitCarreaux | 4 granits |

**9 granits complets** : Balmoral, BrancoCarrara, CremaJulia, KinawaClassico, LabradorVert, NoirAbsoluto, RosePorrino, TarnMarron, TarnMoyen

**Config par defaut** : BancD.Berlin/BancG.Berlin/ColumbD.7Cases/ColumbG.7Cases/GranitBancD.Balmoral/GranitBancG.Balmoral/GranitCarreaux.NoirAbsoluto/GranitIdealo.Balmoral/GranitMonumentD.Balmoral/GranitMonumentG.Balmoral/GranitPortesD.NoirAbsoluto/GranitPortesG.NoirAbsoluto/Idealo.Avec

## 5 cameras

- Default (8c01be9c...) — perspective 3/4
- B&W (f9e39cfa...)
- Top (9e7ee141...)
- Left (7024520e...)
- Front (863e23c0...)

## Decision UI — 28/03/2026

**L'UI doit coller aux parametres 3D** : granit par element et par cote (G/D), pas de choix global simplifie.

**Why:** Le stakeholder veut une correspondance exacte entre les choix UI et les parametres WebRender pour eviter tout mapping artificiel.

**How to apply:** Adapter les etapes du configurateur aux 13 parametres ci-dessus. Les noms de granit de la maquette doivent correspondre aux symbols WebRender.
