# ADR-004 — Barre d'etapes de configuration sous la topbar

## Statut
Accepted

## Contexte
Le configurateur a besoin d'afficher simultanement :
1. La position dans l'app (topbar : iCollectivites > Columbarium > Emeraude)
2. Le resume des choix de configuration avec navigation (Module droit, Module gauche, Bancs, etc.)

Tout mettre dans la topbar existante (56px, ~1024px sur iPad) deborde avec 6+ etapes.

## Decision
Ajouter une **barre d'etapes** dediee (44px) sous la topbar, specifique au configurateur.

### Structure
```
[Mod. D (7)] > [Mod. G (12)] > [Banc D (Berlin)] > [Banc G] > [Recueil.] > [Caveau]
```

### Comportement des segments
| Etat | Affichage | Interaction |
|------|-----------|-------------|
| Complete | Nom abrege + (valeur), couleur primaire | Cliquable, revient a l'etape |
| Courante | Nom complet, blanc/gras | Non cliquable (deja dessus) |
| Future | Nom abrege, grise | Non cliquable |
| Conditionnelle masquee | Invisible | N/A |

### Etapes conditionnelles
- Colonne : visible seulement si rect + 7 cases + pas de module gauche
- Banc gauche : visible seulement si module gauche selectionne

### Style
- Fond : meme que topbar (sombre semi-transparent + blur)
- Hauteur : 44px
- Font : 12px, compact
- Scroll horizontal si necessaire (mobile/petit ecran)
- Separateur : chevron > entre chaque etape

### Impact layout
- Configurateur : padding-top passe de 56px a 100px (56 + 44)
- Topbar inchangee
- Les autres ecrans ne sont pas impactes (pas de barre d'etapes)

## Consequences
### Positives
- L'utilisateur voit son resume de config a tout moment
- Navigation non-lineaire : peut revenir a n'importe quelle etape completee
- Separation claire : topbar = ou dans l'app, barre etapes = ou dans la config
- Ne surcharge pas la topbar

### Negatives / Trade-offs
- 44px de hauteur en moins pour le contenu (100px total avec topbar)
- Composant specifique au configurateur (pas reutilise ailleurs)

## Alternatives considerees
- **Tout dans la topbar** : rejete — deborde sur iPad avec 6+ etapes + breadcrumb global
- **Dans la sidebar** : rejete — melange navigation et contenu, c'est ce qu'on vient de supprimer
- **Dots/stepper minimaliste** : rejete — ne montre pas les valeurs choisies, perd l'interet du resume
