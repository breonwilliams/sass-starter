## How to use this repo
This is more of a blank project to experiment with various features, start a small one-off, etc. It does not include any particular libraries except for Bootstrap 5, jQuery, and Fontawesome 6. You can obviously get rid of those very easily, and create a project that works for your needs.

## System Requirements

---

Make sure all dependencies have been installed before moving on:

* [Composer](https://getcomposer.org/download/)
* [Node.js](http://nodejs.org/) >= 8.0.0
* [Laravel Mix](https://laravel-mix.com/)


## Quick Start

### Composer Support

Jigsaw requires [Composer](https://getcomposer.org/download/) to be installed, and the following to be ran. Do not version control the `vendor` folder (it's not necessary because we're shipping only the compiled folder). This is the command to pull down the latest composer files:

```
composer install
```

### Node.js Support

This repository should *NEVER* be packaged with a `node_modules` folder. You need to install all of your packages with the following command:

```
npm install
```

Node.js and the NPM (Node Package Manager) are used to download all of the project dependencies like Bootstrap 5, Fontawesome, and others. You can find installation instructions here. 

## Compile your assets

After installing the above software and dependancies, you need to compile your assets for front-end usage. You can run the following command to do that:

```
npm run dev
```

If you want this process to run in the backgroun as you work, and automatically process and compile your assets, run this command instead:

```
npm run watch
```
