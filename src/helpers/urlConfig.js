//lib call
import { folderPath } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

export const croot = folderPath() + "src/";

export const folder = {
  pages: croot + "pages/",
  helpers: croot + "helpers/",
};

export const url = {
  pages: {
    loginQr: folder.pages + "login-qr/",
  },
};
