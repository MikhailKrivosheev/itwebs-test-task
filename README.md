# Next.js TypeScript Tailwind Starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Node version is 24.8.0 (do not forget to use 'nvm use' before dependencies install)
React 18.2.0
Next.js 14.2

## Getting Started

1. Install dependencies

```bash
nvm use
pnpm install
```

## Usage

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://beta.nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Project Structure

```text
├── public
├── src
│   ├── components
│   │  ├── pages — React components that are being used specifically on a certain page
│   │  └── shared — React components that are being used across the whole website
│   ├── app
│   ├── svgs — a folder for vector images
│   ├── images — a folder for bitmap images
│   ├── lib
│   ├── types
├── next.config.js — Main configuration file for a Next.js site. Read more about it [here](https://nextjs.org/docs/api-reference/next.config.js/introduction)
└── tailwind.config.js — Main configuration file for Tailwind CSS [Read more about it here](https://tailwindcss.com/docs/configuration)
```

## Component Folder Structure

### Each component includes

1. Main TypeScript File
2. Index File

### Each component optionally may include

1. Folder with images and icons
2. Folder with data

Also, each component may include another component that follows all above listed rules.

### Example structure

```bash
component
├── nested-component
│  ├── data
│  │  └── nested-component-lottie-data.json
│  ├── images
│  │  ├── nested-component-image.jpg
│  │  ├── nested-component-inline-svg.inline.svg
│  │  └── nested-component-url-svg.url.svg
│  ├── nested-component.tsx
│  └── index.ts
├── data
│  └── component-lottie-data.json
├── images
│  ├── component-image.jpg
│  ├── component-inline-svg.inline.svg
│  └── component-url-svg.url.svg
├── component.tsx
└── index.ts
```

## Code Style

### ESLint

[ESLint](https://eslint.org/) helps find and fix code style issues and force developers to follow same rules. Current configuration is based on `eslint:recommended`, `next/core-web-vitals` and `@typescript-eslint/recommended` rules sets.

Additional commands:

```bash
pnpm run lint
```

Run it to check the current status of eslint issues across project.

```bash
pnpm run lint:fix
```

Run it to fix all possible issues.

### Prettier

[Prettier](https://prettier.io/) helps to format code based on defined rules. [Difference between Prettier and ESLint](https://prettier.io/docs/en/comparison.html).

Additional commands:

```bash
pnpm run format
```

Run it to format all files across the project.
