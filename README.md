# React Library with Rollup + Storybook + Local Testing Example Repo

This is an example repo to demonstrate how to test your React library package locally on your machine. There are two projects inside this repo, please follow the instruction to start the demo.

## Prerequisites
- [Node.js](https://nodejs.org/en) (recommended LTS version)
- [Yarn Package Manager](https://yarnpkg.com/getting-started/install) for package manager. But You can always change to NPM in your real project.

## Instructions
1. Clone this repo to your local machine.

2. Now that you have all prerequisites installed, open terminal (let's call it terminal 1) and navigate inside `sample-ui` directory and run `yarn` to install all require packages in package.json.

3. Then open another terminal window (let's call it terminal 2) and navigate inside `sample-app` folder and do the same in step 2

4. Good, all projects packages are installed. While terminal 1 is being opened, go to terminal 1 and run `yarn build` to build the library package. This process will take some time, please be patient.

> If error occur while building, try removing `core` and `components` folder inside `sample-ui` folder (NOT inside `sample-ui/src` folder) if there are any and check your permission to read and write files since building process involves deleting and creating files.

5. Once the library package is successfully built, run `yarn link-local` in terminal 1 to link your local built package to the package caches on your machine so that other project can use it locally.

> If you want to know how `link-local` command works, open `package.json` in `sample-ui` project and find the script name `link-local`

6. Now switch to terminal 2 and run `yarn link-local-sample-ui` to installed your custom library package from local cache.

7. You're nearly there. Check the code in `sample-app/src/App.tsx`, you should notice the code
```import { Button } from '@sample-repo/sample-ui/components/Button';```
and that's how to import component to use. It's very convenient because you can use the same code if you publish your library package with the same name to the global registry.

> [NOTE ℹ️ℹ️] If you notice an error that says about `cannot be used as JSX components` or something like this. My guess is that it's about React typings mismatch and that's why I added `resolutions` section in `package.json` of `sample-app` project to specify that my `sample-app` will only use the package version inside the resolution and not to mix it with somewhere else and this works for me, error's gone.

8. Now while you're in terminal 2, run `yarn start` to test the sample project. If you everything went smooth, you should see the custom button with some styling in `http://localhost:3000`.

## FAQs

### Do I need to re-link if I make changes to the custome library components?

My answer is No. You can just rebuild the library package in step 4 and try refresh the page your project. But if that doesn't work, maybe you can follow belows guide to unlink all of them. Then repeat again from step 4 (and skipping step 7).

### Okay, I'm satisfied with my library package. How can I unlink it?

To unlink the local package (for these projects). Stop `sample-app` project (if it's running) first and run `yarn unlink-local-sample-ui`. Then switch to terminal 1 and run `yarn unlink-local` and you're done. (similar to jump starting the car :-D)

### My Typescript typings in my editor was not updated when I rebuild or I experience frozen code edit. Why is that?

That because sometimes, or most of my times, when making changes in packages, my Typescript server in my editor needs to be restarted to make sure all typings are up-to-date.

But if your editor is frozen during the library package building process, that might be because your editor need to monitor file changes in real time and like I mentioned before, the building process involves deleting/creating files. The more components you have, the more files to be created and the more build time you'll have to wait. So if you editor frozen, try closing your editor first before building your custom package. For this way, I recommend open two editor windows for two projects separately so that you won't have to close your main project along with the library project.
