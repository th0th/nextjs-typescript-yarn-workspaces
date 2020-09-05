# Next.js (with typescript and yarn workspaces)

![Next.js (with typescript and yarn workspaces)](https://user-images.githubusercontent.com/698079/87887329-bb6bd700-ca2c-11ea-9164-8d69d272007e.png)

A simple example to help you get started with [Next.js](https://nextjs.org/) + [typescript](https://www.typescriptlang.org/) + [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

## Getting started

```shell
$ cd nextjs-typescript-yarn-workspaces
$ yarn install
$ yarn workspace @project/web-app dev
```

## Shameless plug

I am an indie hacker and I am running an uptime monitoring  and analytics platform called [WebGazer](https://www.webgazer.io). Actually, this repository is the base of what I am using for WebGazer's frontend part.

## Renaming for your project

I named the example workspace packages `@project/components` and `@project/web-app`. You can safely rename it to `@my-awesome-project/components` or something like that.

## Custom types

The `@types` directory is for your custom global types. Since each Next.js application has to own a `tsconfig.json` of its own, these types are also included in [packages/web-app/tsconfig.json](packages/web-app/tsconfig.json).

## "Where should I add custom @types packages?"

Since multiple packages can use the same typings, and it is very unlikely for different packages to depend on different versions of those typings, @types packages should go into `devDependencies` of the [base package.json](package.json).

## Running

### Development

1. Install dependencies

    ```shell script
    $ yarn
    ```

1. Start the web-app next.js application

    ```shell script
    $ yarn workspace @project/web-app dev
    ```
   
   Then the application should be accessible on [http://localhost:3000](http://localhost:3000).

## License

Copyright © 2020, Gökhan Sarı. Released under the [MIT License](./LICENSE).

