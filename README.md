# AfriTalent - Plateforme de freelances tech en Afrique

![AfriTalent Logo](images/logo/afritalent-logo.png)

---

## 📌 Présentation du projet

**AfriTalent** est une plateforme fictive de mise en relation entre freelances tech et entreprises, développée dans le cadre du projet Semestre 2.

Le marché du freelance tech en Afrique connaît une croissance explosive. De plus en plus de développeurs, designers et créateurs de contenu cherchent une plateforme fiable pour proposer leurs services et trouver des missions.

AfriTalent a pour mission de connecter les talents africains aux entreprises innovantes du monde entier. Le site présente la plateforme, ses fonctionnalités, ses tarifs, des profils de freelances, et convainc les visiteurs (freelances ET entreprises) de s'inscrire.

---

## 👤 Auteur

**Pape Mamadou Diop**  
Promotion : L1 CS – Groupe ISI  
Date : 2026

---

## 🛠 Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| **HTML5** | Structure sémantique (header, nav, main, section, article, aside, footer) |
| **CSS3** | Mise en page (Flexbox, Grid, Bento Grid), animations CSS, transitions, responsive design, variables CSS |
| **Bootstrap 5** | Navbar, grille, cards, carousel, accordion, modal |
| **JavaScript (Vanilla)** | Dark mode, compteurs animés (IntersectionObserver), filtrage dynamique, validation de formulaire |
| **Bootstrap Icons** | Icônes du site |
| **Google Fonts** | Typographie (Poppins + Inter) |
| **Git & GitHub** | Versioning du projet et hébergement sur GitHub Pages |

---

## ✨ Fonctionnalités principales

### Pages du site (5 pages obligatoires + 1 bonus)

| Page | Fichier | Fonctionnalités |
|------|---------|-----------------|
| **Accueil** | `index.html` | Hero, Bento Grid, 6 catégories, carousel témoignages, CTA, statistiques animées |
| **Freelances** | `freelances.html` | 9 profils, filtrage dynamique par catégorie, grille responsive |
| **Tarifs** | `tarifs.html` | 3 plans tarifaires (Gratuit, Pro, Entreprise), FAQ accordion (5 questions) |
| **À propos** | `about.html` | Histoire, équipe (4 membres), valeurs (4), chiffres clés animés |
| **Blog** | `blog.html` | 6 articles, sidebar (recherche, catégories, récents, tags), pagination |
| **Contact** | `contact.html` | Formulaire avec validation JavaScript, infos contact, Google Maps |

### Fonctionnalités JavaScript (7 obligatoires)

1. **Dark Mode / Light Mode** avec localStorage (persistance entre les pages)
2. **Navbar dynamique** qui change de style au scroll (effet shrink)
3. **Bouton "Retour en haut"** avec smooth scroll
4. **Compteurs animés** au scroll (IntersectionObserver)
5. **Animation fade-in** des sections au scroll (IntersectionObserver)
6. **Filtrage dynamique** des freelances par catégorie (sans rechargement)
7. **Validation de formulaire** de contact (regex email, 20 caractères min, messages d'erreur)

### Contraintes techniques respectées

- ✅ HTML5 sémantique (header, nav, main, section, article, aside, footer)
- ✅ CSS externe (style.css) - pas de CSS inline
- ✅ Variables CSS (6 minimum dans :root)
- ✅ Bootstrap 5 via CDN (navbar, grid, cards, carousel, accordion, modal)
- ✅ Bootstrap Icons pour toutes les icônes
- ✅ Google Fonts (2 polices : Poppins + Inter)
- ✅ Responsive design (mobile 375px, tablette 768px, desktop 1200px+)
- ✅ Palette de couleurs (5 couleurs principales max)
- ✅ Commentaires (HTML, CSS, JS)
- ✅ Attributs alt sur toutes les images
- ✅ Accessibilité (contrastes suffisants, navigation clavier)

---

## 🔗 Liens du projet

| Lien | URL |
|------|-----|
| **Dépôt GitHub** | https://github.com/dioppapemamadou872-web/Pape-Mamadou-Diop_AfriTalent |
| **GitHub Pages** | https://dioppapemamadou872-web.github.io/Pape-Mamadou-Diop_AfriTalent/ |

---

## 📸 Captures d'écran

> *Les captures d'écran sont disponibles dans le dossier `images/screenshots/`.*

### Page d'accueil
![AfriTalent Accueil](images/screenshots/accueil.png)

### Page Freelances
![AfriTalent Freelances](images/screenshots/freelances.png)

### Page Tarifs
![AfriTalent Tarifs](images/screenshots/tarifs.png)

### Page À propos
![AfriTalent À propos](images/screenshots/about.png)

### Page Blog
![AfriTalent Blog](images/screenshots/blog.png)

### Page Contact
![AfriTalent Contact](images/screenshots/contact.png)

---

## 🚀 Lancer le projet localement

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Visual Studio Code (recommandé)
- Git (optionnel pour cloner)

### Étapes

1. **Cloner le dépôt**
```bash
git clone https://github.com/dioppapemamadou872-web/Pape-Mamadou-Diop_AfriTalent.git