# nextjs-tree-shake-fail

Minimal example of tree-shaking not working as expected in a NextJS app when multiple routes import different things from the same file.

#### Repro steps:
1. Install dependencies with `npm install`
2. Run `npm run build` to generate the production output
3. Text-search for "string1" and "string2" in the static output folder js files (`.next/static`)
4. See that both strings show up in the js bundles for the `/test` and `/test2` routes (`.next/static/pages/test-[hash].js`, `.next/static/pages/test2-[hash].js`)

   **Expected behavior:**
      Since `/test` only uses `STRING1` and `/test2` only uses `STRING2`, each respective route's bundled js should only include the relevant `getString` function.
      
      Note that `STRING3`, which is also defined in the same file, is correctly omitted from all routes' bundles.
