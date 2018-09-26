# mpv
This repository contains my current mpv config and scripts.

----

# `scripts/favorite.js`
## What is it?

`favorite.js` is a script for [mpv](https://github.com/mpv-player/mpv) to save timestamps of your favorite TV-shows/Movies/Anime scenes.

I've made this because I like to keep a list on [Wunderlist](https://www.wunderlist.com/) of great scenes for future reference.

## Installation

Download the [favorite.js]((scripts/favorite.js)) and place to your mpv's `scripts` directory.

Platforms:
  * Windows only: `mpv\scripts\favorite.js`
  
You'll also need to download [nircmd](https://www.nirsoft.net/utils/nircmd.html) and place the `nircmdc.exe` on a folder and then reference it on `favorite.js` on line `2`.

## Usage

Seek to the begging of desired time and press `ctrl+d` then going to the final desired time and pressing again `ctrl+d`.
The output will be the `file name`(without scene release info) `episode number` `mm:ss -> mm:ss` copied to your clipboard.

----

# `scripts/favorite-screenshot.js`
## What is it?

`favorite-screenshot.js` is a script for [mpv](https://github.com/mpv-player/mpv) to save timed-screenshots of your favorite TV-shows/Movies/Anime scenes.

I've made this because I like to keep a organized folder of screenshots for future reference.

Folder scructured example is as follows `media title` `episode number`:

    .
    ├── mpv-screenshots
    │   ├── Foo bar - 01
    │   ├── Foo bar - 02
    │   ├── Alice and Bob - 46
    │   ├── Alice and Bob - 47

## Installation

Download the [favorite-screenshot.js]((scripts/favorite-screenshot.js)) and place to your mpv's `scripts` directory.

Platforms:
  * Windows only: `mpv\scripts\favorite-screenshot.js`
  
You'll also need to install [git](https://git-scm.com/download/win) and copy the `mkdir.exe` located on `C:\Program Files\Git\usr\bin\` on a folder and then reference it on `favorite-screenshot.js` on line `2`.

## Usage

Seek to the desired time and press `ctrl+s`. The output will be the `file name`(without scene release info) `episode number` saved on the configured folder.

## Disclaimer

Software is provided as-is and the current as of `2018-09-26` regex is not perfect, contributions are welcome.