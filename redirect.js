// mobile-redirect.js
(function () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isMobileOS = /android|iphone|ipad|ipod/i.test(userAgent);
  const path = window.location.pathname;

  // Extract filename or fallback to "index.html"
  let filename = path.substring(path.lastIndexOf('/') + 1);
  if (filename === "") {
    filename = "index.html";
  }

  const isMobilePage = filename.startsWith("mobile-");
  const baseName = filename.replace("mobile-", "");

  // Construct new URL path
  const prefix = path.endsWith("/") ? path : path.substring(0, path.lastIndexOf('/') + 1);

  if (isMobileOS && !isMobilePage) {
    window.location.href = prefix + "mobile-" + baseName;
  } else if (!isMobileOS && isMobilePage) {
    window.location.href = prefix + baseName;
  }
})();
