const css_footer = {
  rel: "stylesheet",
  href: "https://lgiacomazzi.github.io/produttare/footer/footer.css"
};

const div = {
  id: "footer"
};

const objeto =
  "<div class='container'><div class='row'><div class='col-12 col-md text-center'><img src='https://d335luupugsy2.cloudfront.net/cms/files/76250/1565785874/$qcg6ww5tsvj' width='200' class='mb-5' /></div><div class='col-12 col-md text-center text-lg-left mb-4'><h5 class='text-dark'>Sobre nós</h5><ul class='list-unstyled text-small'><li><a class='text-muted' href='http://www.produttare.com.br/institucional.php'>A empresa</a></li><li><a class='text-muted' href='http://www.produttare.com.br/equipe.php'>Equipe</a></li><li><a class='text-muted' href='http://www.produttare.com.br/parceiros.php'>Parceiros</a></li><li><a class='text-muted' href='http://www.produttare.com.br/clientes.php'>Clientes</a></li><li><a class='text-muted' href='http://www.produttare.com.br/resultados.php'>Resultados</a></li></ul></div><div class='col-12 col-md text-center text-lg-left mb-4'><h5 class='text-dark'>Soluções</h5><ul class='list-unstyled text-small'><li><a class='text-muted' href='http://www.produttare.com.br/solucoes.php?s=Consultoria'>Consultorias</a></li><li><a class='text-muted' href='http://www.produttare.com.br/solucoes.php?s=Capacitacao'>Capacitações</a></li><li><a class='text-muted' href='http://www.produttare.com.br/solucoes.php?s=Kaizen'>Kaizens</a></li><li><a class='text-muted' href='http://www.produttare.com.br/solucoes.php?s=Gerenciamento-Modular'>Gerenciamento Modular</a></li><li><a class='text-muted' href='http://www.produttare.com.br/solucoes.php?s=Softwares'>Produttare Software</a></li><li><a class='text-muted' href='http://www.produttare.com.br/solucoes.php?s=Produttare-Internacional'>Produttare Internacional</a></li></ul></div><div class='col-12 col-md text-center text-lg-left mb-4'><h5 class='text-dark'>Contato</h5><ul class='list-unstyled text-small'><li><a class='text-muted' href='http://www.linkedin.com/company/produttare'>LinkedIn</a></li><li><a class='text-muted' href='https://www.facebook.com/Produttare?fref=ts'>Facebook</a></li><li><a class='text-muted' href='tel:51 3024 5536'>51 3024 5536</a></li><li><a class='text-muted' href='mailto:contato@produttare.com.br'>contato@produttare.com.br</a></li></ul></div></div></div>";

var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];

const link = document.createElement("link");
for (let [key, value] of Object.entries(css_footer)) {
  link.setAttribute(key, value);
}
head.appendChild(link);

const footer = document.createElement("footer");
for (let [key, value] of Object.entries(div)) {
  footer.setAttribute(key, value);
}
footer.innerHTML = objeto;
body.appendChild(footer);
