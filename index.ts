#!/usr/bin/env node

import { cac } from 'cac'
import pkg from './package.json'
import { isDir, isFile, resolvePath } from './src/utils'
import { renameDirName, renameFileName, renameExtName } from './src/core';

const cli = cac()

cli
  .version(pkg.version)
  .option('--name, -n,', 'rename file or directory, the option is the default')
  .option('--extend, -e', 'change file extend name')
  .example('$ rn ./abc/bcd eee     # director will be renamed ./abc/eee')
  .example('$ rn ./abc.txt bcd     # abc.txt will be renamed bcd.txt')
  .example('$ rn -e ./abc.txt doc  # abc.txt will be renamed abc.doc')

cli.help()

const { options, args } = cli.parse()

if (options.n) {
  const pathName = resolvePath(args[0])
  const newName = args[1].toString()
  if (isFile(pathName)) {
    renameFileName(pathName, newName)
  } else if (isDir(pathName)) {
    renameDirName(pathName, newName)
  } else {
    throw new Error('the path is error!')
  }
} else if (options.e) {
  const pathName = resolvePath(args[0])
  const newName = args[1].toString()
  renameExtName(pathName, newName)
} else if (options.v) {
  console.log('\nversion:', pkg.version, '\n')
}