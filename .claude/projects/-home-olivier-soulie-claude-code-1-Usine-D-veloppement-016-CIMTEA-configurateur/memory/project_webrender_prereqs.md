---
name: Pre-requis WebRender clarifies
description: Reponses stakeholder sur l'integration Lumiscaphe WebRender
type: project
---

Reponses du 25/03/2026 :

1. **Instance WebRender** : pas encore definie — bloquant pour l'integration reelle
2. **Modeles Lumiscaphe** : OUI, les SolidWorks sont deja convertis au format Lumiscaphe
3. **XML de configuration** : obtenu par requete API (pas un fichier statique)
4. **ng-viewer en iframe** : OUI, ca marche
5. **API auth** : NON, pas d'authentification requise
6. **AR / arriere-plan** : l'arriere-plan photo est dans la configuration Lumiscaphe, pas a gerer cote web — c'est une option du viewer

**Why:** Ces infos conditionnent la faisabilite du Sprint #2 (integration 3D).

**How to apply:** On peut commencer l'integration iframe + appels API des que l'URL WebRender est definie. L'AR est geree par le viewer, pas par notre code.
