function escopoGeral() {
  const form = document.querySelector('#form');
  const contato = [];
  const resultadoEnvio = document.querySelector('#resultado');
  form.addEventListener('submit', resultado);

  function resultado(evento) {
    evento.preventDefault();
    const nome = form.querySelector('#first-name');
    const sobrenome = form.querySelector('#last-name');
    const email = form.querySelector('#email');
    const textarea = form.querySelector('#textarea');
    console.log(nome, sobrenome, email, textarea);

    contato.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      textarea: textarea.value
    })
    console.log(contato);
    resultadoEnvio.innerHTML = `Página de Contato está em fase de testes, para entrar em contato dirija-se diretamente ao meu linkedin -> <a href="https://www.linkedin.com/in/isaque-de-oliveira-cruz-688493211/" target="_blank"> Clicando aqui </a>`;
  }
}
escopoGeral();
