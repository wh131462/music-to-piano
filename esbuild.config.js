import * as esbuild from "esbuild"

esbuild.build({
    entryPoints: [
        "index.ts"
    ],
    outfile:"output.js",

    platform: 'node',
    target: ['node20'],
    format: 'esm',
    bundle: true,
    minify: true,
    packages: 'external',
}).then(() => {

}).catch((e) => {
    process.exit(1);
});
