# Definition of Done (DoD)

**Projet** : New Project Scrumban
**Version** : 2.0
**Date** : 08/11/2025

---

## 🎯 Objectif

La **Definition of Done** définit les critères qu'une User Story (ou un Sprint) doit remplir pour être considérée comme "Done" (terminée).

---

## ✅ Definition of Done - User Story

Une User Story est considérée "Done" quand **TOUS** les critères suivants sont remplis :

### 1. Implémentation
- [ ] Le code est implémenté et fonctionne correctement
- [ ] Le code respecte les standards du projet
- [ ] Pas de code commenté inutile ou de debug logs

### 2. Tests DEV
- [ ] Tests unitaires écrits par DEV (coverage > 80% du code écrit)
- [ ] Tous les tests unitaires passent (100% PASS)
- [ ] DEV a testé son code en isolation

### 3. Tests QA
- [ ] Tests d'intégration/système effectués par QA
- [ ] Tous les critères d'acceptation de la US sont validés
- [ ] Taux de réussite acceptable (généralement 100% ou validé par Stakeholder)
- [ ] Rapport de tests documenté (si tests QA effectués)

### 4. Revue de Code
- [ ] Code reviewé et approuvé par ARCH ou peer review
- [ ] Pas de problèmes structurels majeurs
- [ ] Architecture respectée

### 5. Documentation
- [ ] Documentation technique mise à jour si nécessaire
- [ ] README.md mis à jour si nouvelle fonctionnalité utilisateur
- [ ] Commentaires de code clairs et suffisants
- [ ] Guides utilisateur mis à jour si applicable

### 6. Qualité
- [ ] Aucun bug bloquant
- [ ] Aucun bug critique non résolu
- [ ] Bugs mineurs documentés et acceptés par Stakeholder

### 7. Validation
- [ ] Sprint Review effectuée avec démonstration
- [ ] Stakeholder a validé la User Story
- [ ] Feedback Stakeholder intégré si nécessaire

---

## ✅ Definition of Done - Sprint

Un Sprint est considéré "Done" quand **TOUS** les critères suivants sont remplis :

### 1. User Stories
- [ ] Toutes les User Stories planifiées sont "Done" (selon DoD US ci-dessus) OU
- [ ] Si US incomplètes, raison documentée et acceptée par Stakeholder

### 2. Sprint Goal
- [ ] Le Sprint Goal est atteint (100%) OU
- [ ] Si partiellement atteint, % d'atteinte documenté et accepté par Stakeholder

### 3. Tests
- [ ] Tous les tests QA du sprint sont documentés
- [ ] Taux de réussite global acceptable (généralement 100%)
- [ ] Rapport de tests créé (`test-report.md`)

### 4. Documentation
- [ ] Product Backlog mis à jour (US → Done)
- [ ] Kanban Board archivé
- [ ] sprints-summary.md mis à jour
- [ ] Sprint Review Report créé
- [ ] Sprint Retrospective Report créé

### 5. Git
- [ ] Tous les changements sont committés
- [ ] Historique Git propre (messages clairs)
- [ ] Tag de version créé (optionnel mais recommandé)

### 6. Qualité
- [ ] Aucun bug bloquant ou critique non résolu
- [ ] Definition of Done respectée pour toutes les US
- [ ] Pas de dette technique majeure non documentée

### 7. Cérémonies
- [ ] Sprint Review effectuée avec Stakeholder
- [ ] Sprint Retrospective effectuée avec équipe
- [ ] Feedback et actions capturés

### 8. Checklist Fin de Sprint ⚠️ NOUVEAU
- [ ] **La checklist de fin de sprint (`docs/sprint-completion-checklist.md`) est 100% complétée**
- [ ] Tous les 17+ items sont cochés
- [ ] ARCH a validé la checklist

**⚠️ IMPORTANT** : Depuis Sprint #9, la checklist de fin de sprint est **OBLIGATOIRE**.
Un sprint NE PEUT PAS être clos tant que cette checklist n'est pas 100% complétée.

**Voir** : `docs/sprint-completion-checklist.md` et `REGLES-CRITIQUES.md` (Règle #4)

---

## 🚫 Qu'est-ce qui N'est PAS "Done" ?

### Exemples de situations NON "Done"

- ❌ "Le code fonctionne mais j'ai pas testé"
- ❌ "Ça marche sur ma machine mais pas testé en intégration"
- ❌ "J'ai terminé mais la doc n'est pas à jour"
- ❌ "Tout est OK sauf 2 bugs critiques"
- ❌ "Le Sprint Review n'a pas eu lieu mais j'ai tout fait"
- ❌ "J'ai oublié de mettre à jour le Product Backlog"
- ❌ **"La checklist de fin de sprint n'est pas complétée"** ⚠️ NOUVEAU

### Principe de Base

> **Si ne serait-ce qu'UN SEUL critère de la DoD n'est pas rempli, la US/Sprint n'est PAS "Done".**

---

## 🎯 Qui Valide la DoD ?

### Pour une User Story

**Validation multi-niveaux** :
1. **DEV** : Auto-validation (tests unitaires, code quality)
2. **QA** : Validation tests d'intégration et critères d'acceptation
3. **ARCH** : Validation architecture et code review
4. **Stakeholder** : Validation finale en Sprint Review

### Pour un Sprint

**Validation finale** :
1. **ARCH** : Vérifie TOUS les critères de la DoD Sprint
2. **ARCH** : Vérifie la checklist de fin de sprint (17+ items) ⚠️ NOUVEAU
3. **Stakeholder** : Accepte ou rejette le sprint lors de la Sprint Review

**Règle** : ARCH a l'autorité finale pour bloquer un sprint si la DoD n'est pas respectée.

---

## 📊 Exemple Concret

### US-012 : Slash commands pour agents

#### Critères DoD US-012

✅ 1. **Implémentation** : 6 fichiers .md créés dans .claude/commands/
✅ 2. **Tests DEV** : N/A (pas de code à tester)
✅ 3. **Tests QA** : 8/8 tests PASS (100%)
✅ 4. **Revue** : ARCH a validé que les fichiers sont identiques aux prompts
✅ 5. **Documentation** : README.md mis à jour avec section Slash Commands
✅ 6. **Qualité** : 0 bugs
✅ 7. **Validation** : Stakeholder a testé les slash commands et validé

**Résultat** : US-012 est **DONE** ✅

---

## 📝 Historique des Versions

### Version 2.0 (08/11/2025) - Sprint #9
- **Ajout** : Item 8 dans DoD Sprint - Checklist fin de sprint OBLIGATOIRE
- **Ajout** : Référence à `docs/sprint-completion-checklist.md`
- **Ajout** : Référence à REGLES-CRITIQUES.md Règle #4

### Version 1.0 (06/11/2025)
- Création initiale de la Definition of Done
- 7 critères DoD User Story
- 7 critères DoD Sprint

---

## 📚 Références

- **`docs/sprint-completion-checklist.md`** - Checklist OBLIGATOIRE fin de sprint (17+ items)
- **`REGLES-CRITIQUES.md`** - Règle #4 : Checklist obligatoire
- **`docs/processus-obligatoire.md`** - Processus Scrumban complet
- **`docs/testing-levels.md`** - Distinction tests DEV vs QA
- **`docs/RACI.md`** - Responsabilités de validation (qui valide quoi)

---

**Document mis à jour dans le cadre de US-008 (Sprint #9)**
**DoD fait partie intégrante du processus Scrumban - Respect OBLIGATOIRE**
