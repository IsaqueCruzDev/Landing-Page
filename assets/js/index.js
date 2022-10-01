function escopoGeral() {
  const form = document.querySelector('#form');
  const contato = [];
  const resultadoEnvio = document.querySelector('#resultado');

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
    resultadoEnvio.innerHTML = `Agradeço pelo seu feedback, logo retornarei <3`;
  }
  form.addEventListener('submit', resultado);
}
escopoGeral();
