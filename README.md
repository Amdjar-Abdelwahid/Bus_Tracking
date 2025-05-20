# Real-Time Bus Tracking System

Ce projet propose une solution complète de suivi de bus en temps réel, composée d'un backend robuste et d'une application mobile moderne, pour améliorer la gestion et l'expérience du transport public.

## Table des matières
- [Description](#description)
- [Fonctionnalités principales](#fonctionnalités-principales)
- [Architecture du projet](#architecture-du-projet)
- [Prérequis](#prérequis)
- [Installation et exécution](#installation-et-exécution)
- [Structure du projet](#structure-du-projet)
- [Support](#support)

## Description
Le système se compose de deux parties :
- **Backend** : Service web Node.js/Express, gestion des API REST, WebSocket, stockage MongoDB, authentification JWT, etc.
- **Application mobile** : Application Android développée en Kotlin, interface moderne (Jetpack Compose), suivi en temps réel, notifications, planification d'itinéraires, etc.

## Fonctionnalités principales
- Suivi en temps réel des bus sur carte
- Prédiction des arrivées
- Planification d'itinéraires
- Notifications push
- Gestion des utilisateurs et authentification
- Mode hors-ligne (mobile)
- Statistiques et analytics (backend)

## Architecture du projet
- **Backend** : Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, Redis (optionnel)
- **Mobile** : Kotlin, Android SDK, Jetpack Compose, Hilt, Room, Retrofit, Google Maps API, OSMDroid

## Prérequis
- Node.js >= 18.x
- npm >= 9.x
- Java >= 8
- Android Studio (pour le mobile)
- Android SDK 33+
- MongoDB (local ou distant)
- (Optionnel) Redis

## Installation et exécution
### Backend
```bash
cd backend
npm install
npm start
```

### Application mobile
Ouvrir le dossier `frontend` dans Android Studio, synchroniser Gradle, puis lancer sur un émulateur ou appareil Android.

## Structure du projet
```
/Bus-Tracking-Backend      # Code source backend Node.js/Express
/Bus-Tracking-App-Kotlin   # Application mobile Android Kotlin
README.md                  # Ce fichier
```


## Support
Pour toute question, suggestion ou bug, merci de contacter l'équipe projet (ajoutez votre email ici). 
