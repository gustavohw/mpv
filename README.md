# mpv-scripts
mpv scripts to automate certain tasks

----

# `favorite.js`
## What is it?

`favorite.js` is a script for [mpv](https://github.com/mpv-player/mpv) to save timestamps of your favorite TV-shows/Movies/Anime scenes.

I've made this because I like to keep a list on [Wunderlist](https://www.wunderlist.com/) of great scenes for future reference.

## Installation

Download the  `favorite.js` and place to your mpv's `scripts` directory.

Platforms:
  * Windows only: `mpv\scripts\favorite.js`
  
You'll also need to download [nircmd](https://www.nirsoft.net/utils/nircmd.html) and place the `nircmdc.exe` on a folder and then reference it on `favorite.js` on line `2`.

## Usage

Seek to the begging of desired time and press `ctrl+d` then going to the final desired time and pressing again `ctrl+d`.
The output will be the `file name`(without scene release info) `episode number` `mm:ss -> mm:ss` copied to your clipboard.
