---
name: Toujours pusher apres un commit
description: Faire un git push apres chaque commit pour deployer sur GitHub Pages
type: feedback
---

Toujours faire un `git push` apres chaque `git commit` sur ce projet.

**Why:** Le site est deploye sur GitHub Pages (https://oliviersoulie.github.io/iCollectivites/code/maquette/index.html). Sans push, le site ne se met pas a jour. L'utilisateur veut que le site reflete toujours le dernier etat.

**How to apply:** Apres chaque `git commit`, enchainer immediatement avec `git push`. Remote : origin (https://github.com/OlivierSoulie/iCollectivites.git), branche main.
