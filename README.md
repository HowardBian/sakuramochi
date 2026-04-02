This is a [Next.js](https://nextjs.org/) site for Pop-Up Hanami 2024, presented by UBCAni.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployment

On linux server, run the following commands in sequence:

``` bash
git pull
npm run build
pkill -f "node server.js"
npm run start
ps aux | grep node  # make sure a node process (e.g. /usr/bin/node server.js) is running
```
