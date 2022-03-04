# Welcome to React App Boilerplate 👋

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ttrmz/react-app-boilerplate/Build)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ttrmz/react-app-boilerplate/Tests?label=tests)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/ttrmz/react-app-boilerplate/Lint?label=lint)
![GitHub last commit](https://img.shields.io/github/last-commit/ttrmz/react-app-boilerplate)
![GitHub](https://img.shields.io/github/license/ttrmz/react-app-boilerplate)
[![Twitter: ttrmz](https://img.shields.io/twitter/follow/ttrmz.svg?style=social)](https://twitter.com/ttrmz)
![GitHub Org's stars](https://img.shields.io/github/stars/ttRmz/react-app-boilerplate?style=social)

## 📦 Prerequisites

- node >=14.17.6
- yarn >=1.22.1

## 🚀 Usage

### Create your project

```sh
git clone --depth=1 https://github.com/ttRmz/react-app-boilerplate.git project_name
```

### Install dependencies

```sh
cd project_name && yarn
```

### Run app

```sh
yarn start
```

> this will run both `react-app` and `storybook`

### Run tests

```sh
yarn test
```

or

```sh
npx majestic
```

## ✨ Features

### Add new `Icons`

Drop your new flat svg icons into `/src/assets/icons` folder then run :

```sh
yarn build:icons
```

This command will udpate `ICON_NAMES` enum thens update your icons fonts files.

> the svg's name will be the icon name to pass as prop to `<Icon />` component.

### Add new `Assets`

Drop your new svg images into `/public/assets/symbols` folder then run :

```sh
yarn build:assets
```

This command will udpate `ASSET_NAMES` enum.

> the svg's name will be the asset name to pass as prop to `<Asset />` component.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/ttrmz/react-app-boilerplate/issues).

## 🕑 Changelog

The changelog is available [here](./CHANGELOG.md).

You can also check [releases page](https://github.com/ttrmz/react-app-boilerplate/releases).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Ramirez Tristan](https://github.com/ttrmz).

This project is [MIT](https://github.com/ttrmz/react-app-boilerplate/blob/master/LICENSE) licensed.

[sb]: https://developers.facebook.com/tools/explorer/
