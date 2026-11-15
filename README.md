# Portfolio — Alessio Provenza

Sito portfolio con una selezione di progetti di product e UX/UI design. Ogni progetto ha una pagina dedicata.

**Sito online:** <https://telod-0.github.io/Portofolio/>

## Tecnologie

- HTML5
- SCSS (Dart Sass)
- Bootstrap 5.3 (solo CSS, da CDN)
- JavaScript per il form contatti
- EmailJS per l'invio del form contatti

### Bootstrap e SCSS

Bootstrap gestisce ciò che è generico e riutilizzabile:

- display e flexbox (`d-flex`, `flex-column`, `align-items-center`, `justify-content-between`);
- griglie di base;
- utility semplici (`w-100`, `text-uppercase`, `list-unstyled`);
- spaziature standard (`gap-1`, `gap-2`, `m-0`, `p-0`);
- utility responsive.

SCSS gestisce ciò che è specifico del progetto:

- componenti e varianti BEM;
- tipografia, colori e design system;
- animazioni e transizioni;
- spaziature non presenti nella scala Bootstrap;
- stati hover, focus, active e interazioni.

## Compilazione

Con VS Code e l'estensione **Live Sass Compiler** la compilazione avviene al salvataggio
(output `expanded` in `css/`, come da `.vscode/settings.json`).
