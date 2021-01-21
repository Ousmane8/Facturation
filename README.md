# Facturation

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Fonctionnalités attendues: 
	
Compte utilisateur : 
        Login / Inscription
		Informations signalétiques -> à reprendre dans l’en-tête de la facture (logo, nom de l’entreprise, Siret, Adresse, téléphone, email etc…)
	
Répertoire client
        Nom société,
		Siret,
		Adresse,
		Mail,
		Téléphone
		Etc…
	
- Factures: 

- Création d’une facture,

- Récupération des informations de l’utilisateur dans l’en-tête de la facture

- Ajout d’un client à partir du répertoire,

- Auto increment du numéro de facture,

- Choix de la date,

- Ajout ligne par ligne de montant (description, qté, prix, total HT)

- Calcul du Total HT, TVA, Total TTC

- Génération de la facture en PDF

- Gestion des status de la facture: brouillon, payé, en attente de paiement

	
Dashboard : 

- Statistiques sur CA mensuel 

- Camembert répartition du CA par client 

- etc… (à vous de voir ce qui serait intéressant de mettre comme data Viz)


https://morioh.com/p/69b053efc138
