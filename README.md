# nextjs-tree-shake-fail

Minimal example of tree-shaking not working as expected in NextJS project

#### Repro steps:
1. Run `npm run build`
2. Search for "string1" and "string2" in the static output folder js files (`.next/static`)
3. See that both strings show up for the `/test` and `/test2` routes (`.next/static/pages/test-[hash].js`, `.next/static/pages/test2-[hash].js`)
   *Expected behavior:*
      Since `/test` only uses `getString1()` and `/test2` only uses `getString2()`, each respective route's bundled js should only include the relevant `getString` function.
