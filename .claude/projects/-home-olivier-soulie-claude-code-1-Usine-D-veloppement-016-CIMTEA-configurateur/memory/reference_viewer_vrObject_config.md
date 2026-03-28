---
name: Configuration viewer vrObject pour WebRender
description: Paramètres exacts pour faire marcher @lumiscaphe/viewer en mode vrObject avec le serveur wr-lumis3d
type: reference
---

## Viewer @lumiscaphe/viewer v4.1.17

**Mode vrObject** (rotation 360°) :
- `mode: 'vrobject'` — MINUSCULES, pas 'vrObject' sinon fallback silencieux en image
- `loop: true` — rotation infinie (pas `panLoop`, c'est `view.loop` en interne)
- `frames: 24` — nombre de frames
- `api: 'v2'` dans le constructeur — sinon le viewer utilise ImageFromBookmark qui ne supporte pas vrObject

**Caméras** :
- vrObject : GUID direct (`8c01be9c-8496-4bc6-90fc-5e2eecbf4411`)
- image : bookmark path (`/Default`, `/Front`, `/Top`, `/Left`)

## Patch fetch obligatoire

Le viewer envoie `{ panFrames, panFrom, panTo, tiltFrames, ... }` mais le serveur wr-lumis3d attend `{ camera: GUID, frames: N }`. Un patch fetch intercepte le payload et le nettoie avant envoi.

## Payload serveur vrObject (format exact)

```json
{
  "scene": [{ "database": "GUID", "configuration": "Param.Value/..." }],
  "mode": { "vrObject": { "camera": "CAMERA_GUID", "frames": 24 } },
  "renderParameters": { "width": N, "height": N, "antialiasing": false, "superSampling": "2" },
  "encoder": { "jpeg": { "quality": 80 } }
}
```

## Mode WebGL Lumiscaphe (pas encore disponible pour CIMTEA)

Serveur WGL séparé (ex: `wgl.coatifactory.com`) avec endpoints :
- `/api/{databaseId}/library` — bibliothèque
- `/api/{databaseId}/meshes/{id}` — géométrie
- `/api/{databaseId}/textures/{id}` — textures
- Rendu WebGL côté client (vrai 3D navigateur)
- Nécessite déploiement de la base sur un serveur WGL
