import { rename } from "fs";
import { resolve } from "path";
import { getDirName, getExtName, getBaseName } from './utils';

export function renameFileName(pathName: string, name: string) {
  const dirName = getDirName(pathName)
  const extName = getExtName(pathName)
  const newName = name + extName
  rename(pathName, resolve(dirName, newName), (err) => {
    if (err) {
      throw err
    }
    console.log('rename completed!')
  })
}

export function renameDirName(pathName: string, name: string) {
  const dirName = getDirName(pathName)
  rename(pathName, resolve(dirName, name), (err) => {
    if (err) {
      throw err
    }
    console.log('rename completed!')
  })
}

export function renameExtName(pathName: string, extName: string) {
  const dirName = getDirName(pathName)
  const baseName = getBaseName(pathName)
  const newName = `${baseName}.${extName}`

  rename(pathName, resolve(dirName, newName), (err) => {
    if (err) {
      throw err
    }
    console.log('rename completed!')
  })
}