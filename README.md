# svienna-package-demo

This package is the result of a talk by [Ivan Hofer](https://github.com/ivanhofer) at the first [Svelte Society Austria](https://austria.sveltesociety.dev/) Meetup on July 4th 2022.

This repository demonstrates how easily a component library can be created with the help of [SvelteKit](https://kit.svelte.dev/).

This package contains:
 - a custom Button component that wraps a HTMLButtonElement and adds a `loading` prop. The Button is also strongly typed.
 - an [action](https://svelte.dev/docs#template-syntax-element-directives-use-action) that can be used on a `HTMLParagraphElement` to limit the amount of characters shown.
 - a `variables.scss` file that contains a color variable that can be used inside other projects.

To let `SvelteKit` create the `npm`-package, you need to execute the `npm run package` command. This will export everything inside the `src/lib` folder into the `package` folder.

The `package` command will preprocess all `.svelte` and `.ts` files and create a corresponding `.d.ts` file so those components and function can also be used in plain `JavaScript` projects. All other files will just be copied over. The `README.md` file also gets copied from the main repository. `SvelteKit` will also create a `package.json` file that contains all the information needed to publish the package. The package can be released to `npm` by executing `npm publish` inside the `package` folder.
