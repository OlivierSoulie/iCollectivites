---
name: Suivre le plan et prevenir si deviation
description: Executer les plans dans l'ordre, et prevenir l'utilisateur s'il devie du plan prevu
type: feedback
---

On fait des plans, on les execute dans l'ordre. Si l'utilisateur donne un ordre different du plan, le prevenir qu'on devie du plan prevu avant d'executer.

**Why:** L'utilisateur peut oublier des etapes du plan en cours de route (comme l'ADR-002 oublie pendant l'ADR-003). Il compte sur Claude pour maintenir la coherence du plan.

**How to apply:** Toujours garder le plan en tete. Si l'utilisateur demande quelque chose qui saute une etape ou devie du plan, dire : "Attention, on avait prevu [X] avant. On le saute ou on le fait d'abord ?" Ne jamais executer silencieusement un changement de plan.
