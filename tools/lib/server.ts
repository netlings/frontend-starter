import * as browserSync from "browser-sync";

/**
 * This utility method is used to notify that a file change has happened and initiates a BrowserSync reload.
 * @param {any} e - The file(s) that has changed.
 */
export function reload(blob: any) {
  let files = blob.path;
  if (!(blob.path instanceof Array)) {
    files = [files];
  }
  browserSync.reload(files);
}
