import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import LoginQr from "./login-qr/loginQr.js";

export async function main() {
  const promise = loadComponent(
    ".login-qr",
    url.pages.loginQr + "login-qr/login-qr.html"
  );

  promise
    .then(() => {
      smoothScroll();
      LoginQr();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
