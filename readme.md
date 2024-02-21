# Projet d'imitation de Twitter avec Express

Réalisé pendant les cours sur Express chez dyma.fr

# Etapes

## Etape 1 - Architecture + layout + topbar

> npm init
> npm i express morgan pug

> touch app.js
> mkdir views
> mkdir public

> cd public
> mkdir javascripts
> mkdir images
> mkdir css

> cd ..
> mkdir routes

Dans package.json :
"start": "nodemon app.js", // Si besoin > npm i nodemon
puis
"start": "PORT=4000 nodemon app.js" (non WINDOWS)
"start": "SET PORT=4000 && nodemon app.js" (WINDOWS)
