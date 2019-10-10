const css = {
  rel: "stylesheet",
  href: "https://lgiacomazzi.github.com/produttare/popup/popup.css"
};

const div = {
  id: "produttare_raise_hand",
  href: "https://eventos.produttare.com.br/fale_com_consultor"
};

const objeto =
  "<span class='fa fa-headset fa-lg mr-3a'></span><span>Fale com Consultor</span>";

var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];

const link = document.createElement("link");
for (let [key, value] of Object.entries(css)) {
  link.setAttribute(key, value);
}
head.appendChild(link);

const popup = document.createElement("div");
for (let [key, value] of Object.entries(div)) {
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
