/**
 * playground/js/oja.js
 * Single source of truth for the Oja CDN URL used by the playground shell.
 * All playground components import from this file — never directly from the CDN.
 * To update the version, change this one file only.
 */
export * from 'https://cdn.jsdelivr.net/npm/@agberohq/oja@v0.0.10/build/oja.full.esm.js';