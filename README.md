# change-file-name [![Build Status](https://travis-ci.org/audiojs/audio-play.svg?branch=master)](https://travis-ci.org/audiojs/audio-play)

This is a tool to modify the file name or extension.

## Usage

[![NPM](https://nodei.co/npm/change-file-name.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/change-file-name/)

## options description

| option      | alias | description            |
| ----------- | ----- | ---------------------- |
| --name      | -n    | file or directory name |
| --extension | -e    | file's extension name  |

## How to use it.

eg1: modify a file name.

```shell
rn -n ./test.txt abc
```

`test.txt` will be renamed `abc.txt` in the current directory.

eg2: modify the extension

```shell
rn -e ./test.txt js
```

`test.txt` will be renamed `test.js` in the current directory.

eg3: modify a directory name

```shell
rn -n ./test/ abc
```

`./test/` will be renamed `./abc/` in the current directory.
