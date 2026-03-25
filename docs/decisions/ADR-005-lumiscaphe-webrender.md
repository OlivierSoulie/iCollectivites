# ADR-005 — Moteur 3D : Lumiscaphe WebRender au lieu de Three.js

## Statut
Accepted

## Contexte
Le viewport 3D du configurateur (actuellement un placeholder) doit afficher un rendu interactif du columbarium. Le backlog initial prevoyait Three.js (US-008). Le stakeholder travaille chez Lumiscaphe et dispose de leur moteur de rendu WebRender + viewer web.

## Decision
Utiliser **Lumiscaphe WebRender** comme moteur de rendu 3D :

- **API serveur** : Lumiscaphe WebRender REST API (https://app.swaggerhub.com/apis/Lumiscaphe/WebRender/1.0)
- **Viewer web** : @lumiscaphe/ng-viewer (https://www.npmjs.com/package/@lumiscaphe/ng-viewer)
- **Configuration** : fichiers XML (schemas, couleurs, cameras, positionnement)
- **AR simulee** : arriere-plan photo dans le viewer WebRender (pas d'AR native)
- **Modeles 3D** : fichiers SolidWorks convertis au format Lumiscaphe (format interne)

### Regles d'implementation
1. **Jamais hardcoder** les valeurs de configuration — toujours lire le XML
2. **Toujours parser** les docs API via curl avant d'implementer
3. Le viewer remplace le placeholder dans le viewport du configurateur
4. Les changements de configuration (modules, granit, portes) sont envoyes a l'API WebRender qui met a jour le rendu

### Architecture d'integration
```
Navigateur (iPad)
  ├── Sidebar (HTML/JS) — selections utilisateur
  ├── Viewer Lumiscaphe (iframe ou composant) — rendu 3D
  │     ├── Communique avec WebRender API (REST)
  │     └── Configuration lue depuis XML
  └── localStorage — persistance config
```

## Consequences
### Positives
- Moteur de rendu professionnel, qualite superieure a Three.js
- Support interne (stakeholder = Lumiscaphe)
- Pas de gestion manuelle des modeles 3D (WebRender gere le pipeline)
- Configuration par XML = separation propre donnees/code
- AR simulee possible via fond photo dans le viewer

### Negatives / Trade-offs
- Dependance a un serveur WebRender (pas de rendu offline pur client)
- Necessite une instance WebRender deployee et accessible
- Le viewer ng-viewer est Angular — a adapter si on reste en vanilla JS (iframe probable)

## Alternatives considerees
- **Three.js** : rejete — necessite conversion manuelle des modeles, qualite inferieure, pas de support interne, reinventer la roue
- **Babylon.js** : rejete — meme problemes que Three.js
