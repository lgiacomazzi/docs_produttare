var css_popup = {
  rel: "stylesheet",
  href: "https://lgiacomazzi.github.io/produttare/popup/popup.css"
};

var body_popup = {
  id: "produttare_raise_hand",
  href: "https://eventos.produttare.com.br/fale_com_consultor"
};

var objeto =
  "<span class='fa fa-headset fa-lg mr-3'></span><span>Fale com Consultor</span>";

var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];

var link = document.createElement("link");
for (let [key, value] of Object.entries(css_popup)) {
  link.setAttribute(key, value);
}
head.appendChild(link);

var popup = document.createElement("a");
for (let [key, value] of Object.entries(body_popup)) {
  popup.setAttribute(key, value);
}
popup.innerHTML = objeto;
body.appendChild(popup);

//
// <script src="https://lgiacomazzi.github.io/produttare/js_base_produttare.js"></script>
// <a
//   href="http://eventos.produttare.com.br/fale_com_consultor"
//   id="produttare_raise_hand"
// >
//   <span class="fa fa-headset fa-lg mr-3"></span><span>Fale com Consultor</span>
// </a>
// <style></style>
