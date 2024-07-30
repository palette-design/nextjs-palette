This is a Nextjs sample site, built with Palette.

This sample site do not only serve as a sample site, but also as a playground whereby you can test out components.

## Getting Started

Firstly, install the dependencies

```
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Updating Palette with a local version

If you have a local `palette-design-x.x.x.tgz` that you have build through the `palette-design` repo, you can upload the .tgz file and replace the package.json for `palette-design` version, from the current x.x.x to `file:./palette-design-x.x.x.tgz`.

After this, remember to run `npm update palette-design` so this will update the dependencies, then running `npm run dev` again.

### Having issues running the local app?

Still having issues running the app? Here is what you can try to do:

1. You can try reload the VS Code window by pressing `F1` then search for `Reload Window`.

2. Remove `package-lock.json` and `node_modules` files and do a clean installation of all the dependencies via `npm install` again.
