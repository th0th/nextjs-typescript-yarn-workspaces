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

## Shameless plug

I am an indie hacker, and I am running two services that might be useful for your business. Check them out :)

### WebGazer

[<img alt="WebGazer" src="https://user-images.githubusercontent.com/698079/162474223-f7e819c4-4421-4715-b8a2-819583550036.png" width="256" />](https://www.webgazer.io/?utm_source=github&utm_campaign=nextjs-typescript-yarn-workspaces-readme)

[WebGazer](https://www.webgazer.io/?utm_source=github&utm_campaign=nextjs-typescript-yarn-workspaces-readme) is a monitoring service that checks your website, cron jobs, or scheduled tasks on a regular basis. It notifies
you with instant alerts in case of a problem. That way, you have peace of mind about the status of your service without
manually checking it.

### PoeticMetric

[<img alt="PoeticMetric" src="https://user-images.githubusercontent.com/698079/162474946-7c4565ba-5097-4a42-8821-d087e6f56a5d.png" width="256" />](https://www.poeticmetric.com/?utm_source=github&utm_campaign=nextjs-typescript-yarn-workspaces-readme)

[PoeticMetric](https://www.poeticmetric.com/?utm_source=github&utm_campaign=nextjs-typescript-yarn-workspaces-readme) is a privacy-first, regulation-compliant, blazingly fast analytics tool.

No cookies or personal data collection. So you don't have to worry about cookie banners or GDPR, CCPA, and PECR compliance.

## License

Copyright © 2020, Gökhan Sarı. Released under the [MIT License](./LICENSE).
