---
name: Priorité WebGL et modèle en L
description: Le stakeholder veut du vrai WebGL (pas vrObject) et l'intégration du modèle Émeraude Angle (en L)
type: project
---

**Décision stakeholder 28/03/2026 :**

1. **WebGL obligatoire** : Le mode vrObject (slideshow d'images serveur) n'est pas suffisant. Le stakeholder veut du vrai rendu WebGL côté client avec rotation/zoom libres et fluides.
   - Nécessite un serveur WGL Lumiscaphe (endpoints `/api/{db}/library`, `/api/{db}/meshes/`, `/api/{db}/textures/`)
   - Le serveur actuel `wr-lumis3d.lumiscaphe.com` n'a pas les endpoints WGL activés
   - Le stakeholder va demander le déploiement de la base CIMTEA sur un serveur WGL en interne Lumiscaphe
   - Exemple fonctionnel : `wgl.coatifactory.com` utilisé par CoatFactory (Ctrl+Alt+Q pour activer)

2. **Modèle en L (Émeraude Angle)** à intégrer en plus du Rectangulaire actuel
   - Fichiers CAO disponibles dans `PROJET EMERAUDE IDEALO BANC - ANGLE/`
   - La disposition angle est déjà gérée côté UI (`choices[1] = 'angle'`)
   - Nécessite une 2e base WebRender/WGL ou un produit supplémentaire dans la base existante

**Why:** Le vrObject est acceptable pour une maquette mais pas pour le produit final. Le WebGL offre une expérience fluide et professionnelle (cf. CoatFactory).

**How to apply:** Attendre que le serveur WGL soit disponible avec la base CIMTEA déployée. Puis intégrer le viewer WebGL (classes SF/bge/mge trouvées dans le code CoatFactory) à la place du viewer vrObject actuel.
