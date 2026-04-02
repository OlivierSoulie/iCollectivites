# Commande /trello

**Description** : Synchronise le Kanban Markdown (`artifacts/kanban-board.md`) vers Trello

**Usage** : `/trello [--dry-run]`

---

## Rôle de cette commande

Cette commande permet de **synchroniser l'état actuel du projet** (sprints, user stories, statuts) depuis le fichier `artifacts/kanban-board.md` vers un tableau Trello.

**Relation Markdown ↔ Trello** :
- **Markdown** (`kanban-board.md`) = **SOURCE DE VÉRITÉ**
- **Trello** = **Visualisation** (lecture seule pour stakeholders)

---

## Actions réalisées

Lorsque vous exécutez `/trello`, les étapes suivantes sont effectuées automatiquement :

### 1. Parsing du Kanban Markdown
- Lecture de `artifacts/kanban-board.md`
- Extraction de tous les sprints et leurs métadonnées
- Détermination du statut de chaque sprint (To Do, In Progress, Done)

### 2. Connexion à Trello
- Lecture de `.trello-config.json` (API key, token, board ID)
- Vérification de la connexion API Trello
- Récupération des cartes existantes sur le tableau

### 3. Synchronisation des sprints
Pour chaque sprint trouvé dans le Kanban :
- **Si la carte existe déjà sur Trello** : Mise à jour (déplacement de colonne si nécessaire)
- **Si la carte n'existe pas** : Création d'une nouvelle carte Trello
- **Métadonnées synchronisées** :
  - Titre : `Sprint #X - Statut`
  - Description : Sprint Goal, Story Points, Tests QA, User Stories
  - Colonne : To Do / In Progress / Done

### 4. Génération du rapport
Affichage d'un rapport de synchronisation :
- Nombre de cartes créées
- Nombre de cartes mises à jour
- Nombre de cartes inchangées
- Lien vers le tableau Trello

---

## Prérequis

### 1. Configuration Trello valide

Fichier `.trello-config.json` doit exister à la racine du projet :

```json
{
  "board_id": "VOTRE_BOARD_ID",
  "api_key": "VOTRE_API_KEY",
  "token": "VOTRE_TOKEN",
  "lists": {
    "todo": "ID_COLONNE_TODO",
    "in_progress": "ID_COLONNE_IN_PROGRESS",
    "code_review": "ID_COLONNE_CODE_REVIEW",
    "testing": "ID_COLONNE_TESTING",
    "done": "ID_COLONNE_DONE"
  },
  "archive_done": false
}
```

**Si `.trello-config.json` n'existe pas** :
- Consultez `docs/trello-setup.md` pour créer votre configuration
- La commande affichera un message d'erreur explicite

### 2. Scripts Python

Les scripts suivants doivent être présents dans `scripts/` :
- `parse-kanban.py` : Parse le fichier Kanban MD
- `sync-trello.py` : Synchronise vers Trello via l'API

---

## Exemples d'utilisation

### Synchronisation normale

```
/trello
```

**Résultat attendu** :
```
[1/5] Parsing Kanban: artifacts/kanban-board.md
      Found 3 sprints

[2/5] Fetching existing Trello cards...
      Found 2 existing cards

[3/5] Synchronizing sprints to Trello...
      [CREATE] Sprint #15 (ID: abc123)
      [UPDATE] Sprint #12 (moved to done)
      [UNCHANGED] Sprint #13

[4/5] Updating kanban-board.md with Trello IDs...
      [SKIP] MD update not implemented yet

[5/5] Generating report...

==================================================
[OK] Synchronization completed!
==================================================
Project: 001- Modifications de New project Scrumban
Board: 5f8a9b1c2d3e4f5g6h7i8j9k

Cards created: 1
Cards updated: 1
Cards unchanged: 1
Errors: 0

Trello Board: https://trello.com/b/5f8a9b1c2d3e4f5g6h7i8j9k
==================================================
```

### Mode Dry-Run (simulation)

```
/trello --dry-run
```

**Utilité** : Tester la synchronisation sans modifier réellement Trello.

**Résultat** :
- Toutes les étapes sont simulées
- Aucune modification sur Trello
- Rapport affiche `[DRY RUN]` au lieu de `[OK]`

---

## Fréquence recommandée

| Moment | Justification |
|--------|---------------|
| **Fin de sprint** | Reporting final, validation achèvement |
| **Avant Sprint Review** | Board à jour pour présentation stakeholders |
| **Avant Sprint Planning** | Board clean pour planifier nouveau sprint |

**NE PAS synchroniser** :
- Pendant le développement actif (trop de volatilité)
- Après chaque modification mineure (surcharge API)

---

## Dépannage

### Erreur : "Configuration file not found"

**Cause** : Fichier `.trello-config.json` manquant

**Solution** :
1. Créer `.trello-config.json` à la racine
2. Suivre le guide `docs/trello-setup.md`
3. Vérifier que le fichier n'est pas dans `.gitignore` par erreur

---

### Erreur : "Trello API error (401)"

**Cause** : API Key ou Token invalide/expiré

**Solution** :
1. Vérifier que `api_key` et `token` dans `.trello-config.json` sont corrects
2. Régénérer le token sur https://trello.com/app-key si nécessaire
3. Vérifier que le token a les permissions `read,write`

---

### Erreur : "board not found"

**Cause** : `board_id` incorrect ou accès non autorisé

**Solution** :
1. Vérifier le `board_id` dans l'URL du tableau Trello
2. S'assurer que vous avez accès au tableau
3. Vérifier que le token a les bonnes permissions

---

### Erreur : "list not found"

**Cause** : ID de colonne incorrect

**Solution** :
1. Récupérer les IDs de colonnes via l'API :
   ```bash
   curl "https://api.trello.com/1/boards/BOARD_ID/lists?key=API_KEY&token=TOKEN"
   ```
2. Mettre à jour les IDs dans `.trello-config.json`

---

## Sécurité

**IMPORTANT** : `.trello-config.json` contient des secrets sensibles

- ✅ Fichier ajouté au `.gitignore` (ne sera jamais commité)
- ✅ Ne partagez jamais votre API key ou token publiquement
- ✅ Régénérez le token annuellement pour sécurité

---

## Documentation complète

- **Guide setup** : `docs/trello-setup.md`
- **Guide utilisation** : `docs/trello-sync-usage.md`
- **FAQ** : Section FAQ dans `docs/trello-sync-usage.md`

---

## Workflow Scrumban

Cette commande s'intègre dans le workflow Scrumban :

```
1. TodoWrite (agents)
   └─ Tracking interne pour agents

2. kanban-board.md
   └─ Kanban persistant (vérité absolue)

3. /trello
   └─ Synchronisation vers Trello

4. Trello Board
   └─ Visualisation pour stakeholders
```

---

**Framework** : Scrumban v1.0
**Projet** : 001 - Modifications de New project Scrumban
**Sprint** : Sprint #15 (US-041)
**Date** : 24/12/2025
