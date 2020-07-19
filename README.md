# Next.js (with typescript and yarn workspaces)

![Next.js (with typescript and yarn workspaces)](https://user-images.githubusercontent.com/698079/87887329-bb6bd700-ca2c-11ea-9164-8d69d272007e.png)

A simple example to help you get started with [Next.js](https://nextjs.org/) + [typescript](https://www.typescriptlang.org/) + [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Getting started

```shell
$ cd nextjs-typescript-yarn-workspaces
$ yarn install
$ yarn workspace @project/web-app dev
```

## Renaming for your project

I named the example workspace packages `@project/components` and `@project/web-app`. You can safely rename it to `@my-awesome-project/components` or something like that. Don't forget to also edit `paths` in `tsconfig.json`.

## Shameless plug

I am an indie hacker and I am running an uptime monitoring  and analytics platform called [WebGazer](https://www.webgazer.io). Actually, this repository is the base of what I am using for WebGazer's frontend part.

## License

Copyright © 2020, Gökhan Sarı. Released under the [MIT License](./LICENSE).

