---
name: Ne jamais réinventer la roue WebRender
description: Utiliser les libs Lumiscaphe telles quelles, adapter le payload au serveur, ne pas recoder un viewer custom
type: feedback
---

Ne JAMAIS recoder un viewer custom (vrObject, rotation souris, etc.) quand une lib Lumiscaphe existe.

**Why:** Le stakeholder (Olivier, Lumiscaphe) connaît l'écosystème et veut qu'on utilise les outils existants. Recoder c'est perdre du temps et introduire des bugs.

**How to apply:** Si le viewer @lumiscaphe/viewer envoie un mauvais payload, chercher comment le configurer correctement plutôt que de le remplacer. Investiguer le format attendu par le serveur ET le format envoyé par le viewer, puis adapter la config du viewer.
