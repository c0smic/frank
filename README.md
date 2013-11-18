# Frank

> A [Ghost](https://ghost.org/) theme by [Jack Ketcham](http://twitter.com/_jket), dedicated to exemplify the content.

### [Live Demo](http://frank.jackketcham.com/)

## Table of Contents

* [Features](#features)
* [Installing](#installing)
* [Customization](#customization)
* [Roadmap](#roadmap)
* [License](#license)

## Features

* Fully responsive, mobile first design
* HTML5 semantics
* Asynchronous content loading
* Google Analytics support
* Includes [FastClick.js](https://github.com/ftlabs/fastclick) to avoid iOS & Android touch delays
* OpenGraph and Twitter Cards meta's
* Baseline HTML5 features, DNS prefetching, responsive meta
* One-file CSS/JS for performance

## Installing

### Using Git
1. Navigate to your Ghost theme directory `ghost/content/themes`
2. Clone the theme repository using the command below
```sh
$ git clone https://github.com/c0smic/frank "frank"
```
3. Restart ghost and log in to your dashboard
4. In settings under themes select **frank** and save
5. That's all, now its time to [customize](#customization) your theme

## Customization

All configurable files are located in `ghostium/partials/custom`.

#### config.hbs

Configurable javascript identifiers.

* `ga_ua`: Your [Google Analitycs](https://support.google.com/analytics/answer/1032385) account identifier

## Roadmap

This theme will be updating as Ghost adds more features, so look out for those on their [roadmap](https://github.com/tryghost/ghost/wiki/Roadmap) and [planned features](https://github.com/tryghost/ghost/wiki/Planned-Features).

- [ ] Infinite scroll
- [ ] Show next post on each Post page

## License

[MIT License](http://opensource.org/licenses/MIT)