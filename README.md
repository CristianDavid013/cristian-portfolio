# Cristian David Lozano — Portfolio

Professional bilingual portfolio built with React, TypeScript, and Vite.

## Local preview

```powershell
pnpm install
pnpm dev
```

## Verification

```powershell
pnpm test -- --run
pnpm build
```

## Publish on GitHub

1. Create a new empty repository in GitHub.
2. From this folder, run `git init`, `git add .`, and `git commit -m "Initial portfolio"`.
3. Add the remote URL from GitHub with `git remote add origin <repository-url>`.
4. Push with `git branch -M main` then `git push -u origin main`.

## Deploy with Firebase Hosting

1. Create a Firebase project at https://console.firebase.google.com.
2. Install the Firebase CLI if needed: `npm install -g firebase-tools`.
3. Authenticate with `firebase login`.
4. Set the project using `firebase use --add`.
5. Build the site with `pnpm build`.
6. Publish with `firebase deploy --only hosting`.

The `firebase.json` file is already configured to deploy the generated `dist` folder.
