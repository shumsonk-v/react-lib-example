# React + Rollup Starter

## Things to keep in mind

- If you don't have any problem having all individual component folders you'd like to export in `src/components`, then you're can continue developing your awesome component for your library.

- But if you'd like to change where to keep your components source code, you need to change the `sourceComponentPath` variable (path in `src` but without `src/` prefix) in `helpers/config.json` as well.

- If you'd like to change the built package location, you need to change the `targetComponentPath` variable in `helpers/config.json`. Be aware that this will effect you final package path when you import your library. The new path you set will effect next time you build the package but if you already have a build package with the previous name before, you might want to remove that previous built package manually if you don't want to have an unnecessary folder in the project.

---

## Get Started

You can start create your awesome component and put them in `src/components` (if this path change, see an instructions above)

To build the package, run `yarn build` to build all of your components.

> The process will perform deleting old build file, build your package and organize your final package.

There is no React development server command for this project but we do have a Storybook installed. If you want to preview your components before releasing, we recommend
you to create a Storybook page inside the project and preview them with the command `yarn storybook`.

---

## Running Storybook

When using `yarn storybook` to start preview a storybook site, you can ignore the `[ESLintError: ...]` message if you see it. If the message `No issues found.` appears at the end of command, that means your storybook has no problem and ready for the preview at `http://localhost:6006` (It didn't open the browser automatically for me and I don't know why but it's really finished).

---

## Dependencies Required For Usage

- `react` and `react-dom` version `18.2.0` or newer (if no breaking changes)
- `theme-ui` version `0.15.4` or newer (if no breaking changes)
- `@emotion/react` version `11.10.5` or newer (if no breaking changes)
