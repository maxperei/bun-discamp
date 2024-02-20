Bun.build({
  entrypoints: ['./client/main.tsx'],
  target: "browser",
  splitting: true,
  outdir: "./dist",
  minify: {
    identifiers: true,
    syntax: true,
    whitespace: true,
  },
});