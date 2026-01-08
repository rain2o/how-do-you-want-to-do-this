# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## TODO
Add artwork for:

**Allies**

* Trinket
* Trinket and Grog together
* Zahra
* Vox Machina (When they killed Anna Ripley. Vax, Vex, Keyleth, Scanlan, and Grog)
* Kerrek
* Tova


**Baddies**

* Naga Abomination
* Umber Hulk
* Bulette
* Hook Horror
* King Murghol
* Abyssal Abomination
* Cloaker
* K’varn the Mad
* K’varn the Undead
* Wyvern
* Hydra
* Rimefang the White Dragon
* Hotis the Rakshasa
* Kern the Hammer
* The Broker
* Behir
* Sir Kerrion Stonefell
* Vampire Count Tylieri
* Zombie Stone Giant 1
* Zombie Stone Giant 2
* Professor Anders
* Ghost
* Sylas Briarwood
* Delilah Briarwood
* Orthax
* Riskel Daxio
* Purple Worm
* Beholder
* Large Fire Elemental
* Efreeti
* Orc War Chief
* Kevdak
* Greenbeard
* Umbrasyl
* Feymire Crocodile
* Saundor
* Cobalt Golem
* Maelstrom
* Luska
* Anna Ripley
* Yenk the Goristro
* Vorugal
* Ghurrix the Pit Fiend
* Fire Giant General
* Ember Roc
* Gatekeeper Xanthas
* Thordak
* Raishan
* Earthbreaker Groon
* Utugash the Pit Fiend
* Gray Render
* Symphior the Withered Planetar
* Necromancer
* Momma Magma Bulette
* Smelter Guardian 1
* Forge Guardian
* Earth Elemental 1
* Undead Troll 3
* Vecna, the Ascended
