// declaracao de variaveia globais
let sorteados = [];
const botaoOrdenar = document.getElementById(`ordenador`);
let toggledSorter = `none`;

// funcao geradora de numeros aleatorios

function gerarNumAleatorio(inicial, final) {
  return Math.floor(Math.random() * (final - inicial) + inicial);
}

// funcao para mudar o innerHTML de um elemento
function mudaInnerHtml(alvo, conteudo) {
  document.getElementById(alvo).innerHTML = conteudo;
}

// funcao de sorteio dos numeros
function sortear() {
  sorteados = [];
  const inicial = parseInt(document.getElementById(`numero-inicial`).value);
  const final = parseInt(document.getElementById(`numero-final`).value);
  const quantidade = parseInt(
    document.getElementById(`quantidade-numeros`).value
  );
  let apresentacao = document.getElementById(`apresentacao`).classList;

  if (quantidade <= final - inicial && quantidade >= 1) {
    while (sorteados.length < quantidade) {
      let numeroSorteado = parseInt(gerarNumAleatorio(inicial, final));
      if (!sorteados.includes(numeroSorteado)) {
        sorteados.push(numeroSorteado);
      }
    }

    apresentacao.remove(`hidden`);
    apresentacao.add(`visible`);

    mudaInnerHtml(
      `resultado`,
      `<span id="resultado">${sorteados.join(` · `)}</span>`
    );

    document.getElementById(`titulo-resultado`).classList.remove(`hidden`);
    document.getElementById(`titulo-resultado`).classList.add(`visible`);

    botaoOrdenar.style.removeProperty(`background-color`);
    botaoOrdenar.style.color = `black`;

    botaoOrdenar.classList.remove(`hidden`);
    botaoOrdenar.classList.add(`visible`);
  }
}

// funcao que ordena os numeros sorteados
function ordenar() {
  if (toggledSorter === `none`) {
    botaoOrdenar.style.backgroundColor = `black`;
    botaoOrdenar.style.color = `white`;
    botaoOrdenar.textContent = `↑`;

    mudaInnerHtml(
      `resultado`,
      `<span id="resultado">${sorteados
        .slice()
        .sort((a, b) => a - b)
        .join(` · `)}</span>`
    );

    toggledSorter = `crescente`;
  } else if (toggledSorter === `crescente`) {
    botaoOrdenar.textContent = `↓`;

    mudaInnerHtml(
      `resultado`,
      `<span id="resultado">${sorteados
        .slice()
        .sort((a, b) => b - a)
        .join(` · `)}</span>`
    );

    toggledSorter = `decrescente`;
  } else {
    botaoOrdenar.style.removeProperty(`background-color`);
    botaoOrdenar.style.color = `black`;
    botaoOrdenar.textContent = `Ordenar`;

    mudaInnerHtml(
      `resultado`,
      `<span id="resultado">${sorteados.join(` · `)}</span>`
    );

    toggledSorter = `none`;
  }
}
