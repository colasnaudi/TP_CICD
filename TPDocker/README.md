## TP Docker
### 1. Instructions d'installation de Docker
Pour installer Docker sur votre machine :
1. Rendez-vous sur le site officiel : https://docs.docker.com/get-docker/
2. Choisissez votre système d’exploitation (Windows, macOS, Linux).
3. Téléchargez et installez Docker Desktop ou Docker Engine selon votre configuration.
4. Vérifiez l’installation avec la commande :
docker --version

#### Exécution
> J'ai déjà Docker installé sur ma machine. Voici la version actuelle :
```bash
docker --version
Docker version 28.2.2, build e6534b4
```

### 2. Objectif pédagogique
L’objectif de ce TP est de vous familiariser avec les concepts fondamentaux de Docker,
la création et la gestion de conteneurs, l’utilisation des images, ainsi que les
commandes essentielles pour manipuler l’écosystème Docker.
Rendu attendu :
Le dépôt git contenant :
- Un readme avec l’ensemble des tâches réalisés
- Les fichiers par TP organisé par dossier. Avec l’arborescence suivante :
  - TP Docker
    - Fichier TP
    - Readme.md



### 3.

### 4.

### 5. Exercice : Déploiement d'une application Python Flask

Objectif : Créer et lancer une application web simple avec Flask à l’aide de Docker.
Consignes :
- Créez un fichier `app.py` contenant une application Flask minimale (hello world).
- Écrivez un fichier `Dockerfile` avec le contenu suivant pour construire l’image de l’application :
- Construisez l’image et lancez un conteneur.
- Testez l’application depuis votre navigateur.

### 6. Exercice : Utilisation de docker compose

Objectif : Déployer une application complexe avec Docker.
Consignes :
- Compléter votre fichier app.py afin de lui ajouter une connexion a un bdd mongoDB
- Écrivez un fichier docker compose avec vos deux conteneurs
- Lancer le docker compose puis à minima vérifier que la connexion c’est bien effectuer sur labase de données