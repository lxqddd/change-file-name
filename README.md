# change-file-name

This is a tool to modify the file name or extension.

# Installation method

- use by npm

```shell
npm install change-file-name -g
```

- use by yarn 

```shell
yarn add change-file-name -g
```

- use by pnpm 

```shell
pnpm install change-file-name -g
```

# options description

| option      | alias    | description                     |
| ----------- | ---------| ------------------------------- |
| --name      | -n       | file or directory name          |
| --extension | -e       | file's extension name           |

# How to use it.

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