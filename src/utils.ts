import { lstatSync } from "fs"
import path, { basename, dirname, extname, isAbsolute, join } from "path"
import { cwd } from "process"

export const pwd = cwd()

export function resolvePath(pathName: string) {
  if (!isAbsolute(pathName)) {
    return join(pwd, pathName)
  }
  return pathName
}

export function isFile(pathName: string) {
  return lstatSync(pathName).isFile()
}

export function getExtName(pathName: string) {
  return extname(pathName)
}

export function getBaseName(pathName: string) {
  if (isFile(pathName)) {
    const ext = getExtName(pathName)
    return basename(pathName, ext)
  }
  return basename(pathName)
}

export function isDir(pathName: string) {
  return lstatSync(pathName).isDirectory()
}

export function getDirName(pathName: string) {
  return dirname(pathName)
}

