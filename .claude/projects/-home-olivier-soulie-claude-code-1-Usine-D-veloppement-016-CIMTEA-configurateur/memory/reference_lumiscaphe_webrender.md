---
name: Lumiscaphe WebRender API et viewers
description: Moteur de rendu 3D du projet — API WebRender + ng-viewer, pas Three.js
type: reference
---

Le rendu 3D utilise l'API Lumiscaphe WebRender, PAS Three.js.

**Serveur** : https://wr-lumis3d.lumiscaphe.com
**API Swagger** : https://app.swaggerhub.com/apis/Lumiscaphe/WebRender/1.0 (necessite auth SwaggerHub, mais accessible via `curl -s https://api.swaggerhub.com/apis/Lumiscaphe/WebRender/1.0 -H "Accept: application/json"`)

**Endpoints principaux** :
- `GET /Database?databaseId=GUID` — retourne XML complet (produits, cameras, config, materiaux)
- `POST /Snapshot` — rendu image, retourne JSON avec URL vers /Resource
- `GET /ImageFromBookmark` — rendu par bookmark camera
- `POST /Pick` — picking 3D
- `POST /Hotspot` — hotspots interactifs

**Viewer NPM** : @lumiscaphe/ng-viewer (Angular, utilisable en iframe)
- Props : `server`, `scene` (database + configuration string), `view` (mode + camera)
- Configuration = string slash-separee : `Param.Value/Param.Value/...`

**Regles** :
- Toujours lire les valeurs depuis /Database, jamais hardcoder
- Pas d'authentification requise
- Endpoints a la racine (pas de /api/v1/)

**Contexte** : Olivier travaille chez Lumiscaphe, c'est leur moteur interne.
