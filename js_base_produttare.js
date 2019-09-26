const icon = {
  rel: "icon",
  type: "image/png",
  href:
    "https://d335luupugsy2.cloudfront.net/cms/files/76250/1563389608/$k33uw005cmq"
};
const fontawesome = {
  rel: "stylesheet",
  href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
  integrity:
    "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
  crossorigin: "anonymous"
};
const bootstrap = {
  rel: "stylesheet",
  href:
    "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
  integrity:
    "sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",
  crossorigin: "anonymous"
};

var head = document.getElementsByTagName("head")[0];
const links = [icon, fontawesome, bootstrap];
const scripts = [];

for (i = 0; i < links.length; i++) {
  // console.log(links[i]);
  const link = document.createElement("link");
  for (let [key, value] of Object.entries(links[i])) {
    link.setAttribute(key, value);
  }
  head.appendChild(link);
}

for (i = 0; i < scripts.length; i++) {
  // console.log(scripts[i]);
  const script = document.createElement("script");
  for (let [key, value] of Object.entries(scripts[i])) {
    script.setAttribute(key, value);
  }
  head.appendChild(script);
}
