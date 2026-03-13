/* 🚨NÃO ALTERAR A CLASSE 🚨 */



class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
    return `Aberta: Bem-vindos ao SENAI ${this.cidade}`;
  }
  

  fecharEscola() {
    this.statusFuncionamento = false;
    return `Fechada: Atividades encerradas.`;
  }

}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */


/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */


/* ===== OBTER ELEMENTOS ===== */


const cidadeA = document.querySelector('.unidadeA__cidade');
const codigoA = document.querySelector('.unidadeA__codigo');
const anoA = document.querySelector('.unidadeA__ano');
const cursosA = document.querySelector('.unidadeA__cursos');


const cidadeB = document.querySelector('.unidadeB__cidade');
const codigoB = document.querySelector('.unidadeB__codigo');
const anoB = document.querySelector('.unidadeB__ano');
const cursosB = document.querySelector('.unidadeB__cursos');


const instanciarA = document.querySelector('.unidadeA__instanciar');
const instanciarB = document.querySelector('.unidadeB__instanciar');

const abrirA = document.querySelector('.unidadeA__abrir'); 
const fecharA = document.querySelector('.unidadeA__fechar');

const abrirB = document.querySelector('.unidadeB__abrir');
const fecharB = document.querySelector('.unidadeB__fechar');

const compararBtn = document.querySelector('.sistema__comparar');
const resetBtn = document.querySelector('.sistema__reset');


const mensagemA = document.querySelector('.unidadeA__mensagem');
const mensagemB = document.querySelector('.unidadeB__mensagem');


const relatorio = document.querySelector('.relatorio');
const veredito = document.querySelector('.relatorio__veredito');
const linhaA = document.querySelector('.relatorio__linha--a');
const linhaB = document.querySelector('.relatorio__linha--b');

let escolaA = null;
let escolaB = null;


/* ===== FUNÇÃO DE VALIDAÇÃO ===== */


function validarCampos(cidade, codigo, ano, cursos) {
  
  if (
    cidade.value === "" ||
    codigo.value === "" ||
    ano.value === "" ||
    cursos.value === ""
  ) {
    return false;
  }

  return true;

}

/* ===== INSTANCIAR ESCOLA A ===== */


instanciarA.addEventListener("click", () => {
  
  if (!validarCampos(cidadeA, codigoA, anoA, cursosA)) {

    mensagemA.textContent = "Preencha todos os campos para criar a escola.";
    return;

  }

  escolaA = new Senai(
    Number(codigoA.value),
    cidadeA.value,
    Number(anoA.value),
    Number(cursosA.value)
  );

  mensagemA.textContent = `Escola criada em ${escolaA.cidade}.`;
  mensagemA.className = "unidadeA__mensagem status status--criado";

});


/* ===== INSTANCIAR ESCOLA B ===== */


instanciarB.addEventListener("click", () => {
  
  if (!validarCampos(cidadeB, codigoB, anoB, cursosB)) {

    mensagemB.textContent = "Preencha todos os campos para criar a escola.";
    return;

  }

  escolaB = new Senai(
    Number(codigoB.value),
    cidadeB.value,
    Number(anoB.value),
    Number(cursosB.value)
  );

  mensagemB.textContent = `Escola criada em ${escolaB.cidade}.`;
  mensagemB.className = "unidadeB__mensagem status status--criado";

});


/* ===== ABRIR ESCOLA ===== */


abrirA.addEventListener("click", () => {
  
  if (!escolaA) return;

  const mensagem = escolaA.abrirEscola();

  mensagemA.textContent = mensagem;
  mensagemA.className = "unidadeA__mensagem status status--aberto";

});

abrirB.addEventListener("click", () => {

  if (!escolaB) return;

  const mensagem = escolaB.abrirEscola();

  mensagemB.textContent = mensagem;
  mensagemB.className = "unidadeB__mensagem status status--aberto";

});


/* ===== FECHAR ESCOLA ===== */


fecharA.addEventListener("click", () => {
  
  if (!escolaA) return;

  const mensagem = escolaA.fecharEscola();

  mensagemA.textContent = mensagem;
  mensagemA.className = "unidadeA__mensagem status status--fechado";

});

fecharB.addEventListener("click", () => {

  if (!escolaB) return;

  const mensagem = escolaB.fecharEscola();

  mensagemB.textContent = mensagem;
  mensagemB.className = "unidadeB__mensagem status status--fechado";

});


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


compararBtn.addEventListener("click", () => {
  
  if (!escolaA || !escolaB) return;

  relatorio.classList.remove("relatorio--oculto");

  if (escolaA.qtdeCursos > escolaB.qtdeCursos) {

    veredito.textContent =
      `Veredito: ${escolaA.cidade} lidera com ${escolaA.qtdeCursos} cursos.`;

  } else if (escolaB.qtdeCursos > escolaA.qtdeCursos) {

    veredito.textContent =
      `Veredito: ${escolaB.cidade} lidera com ${escolaB.qtdeCursos} cursos.`;

  } else {

    veredito.textContent =
      "Veredito: As duas unidades possuem a mesma quantidade de cursos.";

  }

  linhaA.textContent =
    `Unidade A - Código ${escolaA.codigo} | Cidade ${escolaA.cidade} | Fundação ${escolaA.anoConstrucao} (${escolaA.idade} anos) | Oferta ${escolaA.qtdeCursos} cursos`;

  linhaB.textContent =
    `Unidade B - Código ${escolaB.codigo} | Cidade ${escolaB.cidade} | Fundação ${escolaB.anoConstrucao} (${escolaB.idade} anos) | Oferta ${escolaB.qtdeCursos} cursos`;

});



/* ===== NOVA CONSULTA ===== */



resetBtn.addEventListener("click", () => {
  
  
  cidadeA.value = "";
  codigoA.value = "";
  anoA.value = "";
  cursosA.value = "";

  cidadeB.value = "";
  codigoB.value = "";
  anoB.value = "";
  cursosB.value = "";

  
  mensagemA.textContent = "Aguardando criação...";
  mensagemB.textContent = "Aguardando criação...";

  mensagemA.className = "unidadeA__mensagem";
  mensagemB.className = "unidadeB__mensagem";

  
  relatorio.classList.add("relatorio--oculto");

  veredito.textContent = "";
  linhaA.textContent = "";
  linhaB.textContent = "";

  
  escolaA = null;
  escolaB = null;

});



















