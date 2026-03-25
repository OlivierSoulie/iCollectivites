---
name: Lumiscaphe WebRender API et viewers
description: Moteur de rendu 3D du projet — API WebRender + ng-viewer, pas Three.js
type: reference
---

Le rendu 3D utilise l'API Lumiscaphe WebRender, PAS Three.js.

**API WebRender** : https://app.swaggerhub.com/apis/Lumiscaphe/WebRender/1.0
**Viewer NPM** : https://www.npmjs.com/package/@lumiscaphe/ng-viewer
**Regle** : Toujours utiliser les curl pour parser ces documents API.

**Configuration XML** :
- Les donnees de configuration sont dans des fichiers XML
- Valeurs de configuration (noms de schemas, couleurs, etc.)
- Parametres de positionnement
- Groupes de cameras
- **Regle** : Toujours utiliser les valeurs du XML, jamais les hardcoder.

**AR simulee** : fond photo dans le viewer WebRender (pas de vrai AR natif).

**Contexte** : Olivier travaille chez Lumiscaphe, c'est leur moteur interne.
