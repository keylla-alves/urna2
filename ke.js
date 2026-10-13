
const campo = document.getElementById("cpf");
const mensagem = document.getElementById("mensagem");

function digitar(numero) {
    let numeros = campo.value.replace(/\D/g, "");

    if (numeros.length < 11) {
        numeros += numero;
        campo.value = formatarCPF(numeros);
        mensagem.textContent = "Digite os 11 números do seu CPF.";
    }
}

function formatarCPF(valor) {
    valor = valor.replace(/\D/g, "").slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return valor;
}

function corrigir() {
    let numeros = campo.value.replace(/\D/g, "");
    numeros = numeros.slice(0, -1);
    campo.value = formatarCPF(numeros);
}

function limpar() {
    campo.value = "";
    mensagem.textContent = "Digite os 11 números do seu CPF.";
}

function confirmar() {
    const numeros = campo.value.replace(/\D/g, "");

    if (numeros.length !== 11) {
        mensagem.textContent = "Digite os 11 números do CPF!";
        return;
    }

    // Para uma demonstração escolar.
    window.location.href = "inde.html";
}


function digitar(valor) {
    const input = document.getElementById("number");

    if (!input) return;

    const limite = 4;

    if (input.value.length < limite) {
        input.value += valor;
    }
}

function corrigir() {
    const input = document.getElementById("number");

    if (input) {
        input.value = "";
    }

    const resultado = document.getElementById("resultado");

    if (resultado) {
        resultado.hidden = true;
        resultado.innerHTML = "";
    }
}

function branco() {
    const input = document.getElementById("number");
    const resultado = document.getElementById("resultado");

    if (input) input.value = "";

    resultado.hidden = false;
    resultado.innerHTML = "<h2>VOTO EM BRANCO</h2>";

    setTimeout(function() {
        window.location.href = "inde1.html";
    }, 3000);
}

function confirmar() {
    const input = document.getElementById("number");
    const numero = input.value.trim();
    const resultado = document.getElementById("resultado");

    if (numero === "") {
        alert("Digite o número do candidato!");
        return;
    }

    // Candidatos de exemplo: altere pelos dados do seu projeto.
    const candidatos = {
        "1234": {
            nome: "Candidato Exemplo 1",
            partido: "Partido A",
            foto: "candidato1.jpg"
        },
        "5678": {
            nome: "Candidato Exemplo 2",
            partido: "Partido B",
            foto: "candidato2.jpg"
        }
    };

    const candidato = candidatos[numero];

    if (!candidato) {
        alert("Candidato não encontrado! Tente novamente.");
        input.value = "";
        return;
    }

    resultado.hidden = false;

    resultado.innerHTML = `
        <h2>CONFIRME SEU VOTO</h2>
        <img src="${candidato.foto}"
             alt="Foto do candidato"
             width="120">
        <p>Nome: ${candidato.nome}</p>
        <p>Número: ${numero}</p>
        <p>Partido: ${candidato.partido}</p>
        <p>Voto confirmado!</p>
    `;

    setTimeout(function() {
        window.location.href = "inde1.html";
    }, 3000);
}

const cargos = [
    {
        titulo: "deputado federal",
        proxima: "inde1.html",
        limite: 4,
        candidatos: {
            "2222": {
                nome: "André Fernandes",
                partido: "PL",
                foto: "assets/df.jfif"
            },
            "2255": {
                nome: "Júnior Mano",
                partido: "PL",
                foto: "assets/df2.jfif"
            }
        }
    },
    {
        titulo: "deputado estadual",
        proxima: "inde2.html",
        limite: 5,
        candidatos: {
            "22022": {
                nome: "Carmelo Neto",
                partido: "PL",
                foto: "assets/de.jfif"
            },
            "12000": {
                nome: "Evandro Leitão",
                partido: "PDT",
                foto: "assets/de2.jfif"
            }
        }
    },
    {
        titulo: "primeiro senador",
        proxima: "inde3.html",
        limite: 3,
        candidatos: {
            "131": {
                nome: "Camilo Santana",
                partido: "PT",
                foto: "sen.1(1).jfif"
            }
        }
    },
    {
        titulo: "segundo senador",
        proxima: "inde4.html",
        limite: 3,
        candidatos: {
            "131": {
                nome: "Camilo Santana",
                partido: "PT",
                foto: "sen.1(1).jfif"
            }
        }
    },
    {
        titulo: "governador",
        proxima: "inde5.html",
        limite: 2,
        candidatos: {
            "13": {
                nome: "Elmano de Freitas",
                partido: "PT",
                foto: "assets/elmano.jfif"
            },
            "44": {
                nome: "Capitão Wagner",
                partido: "União Brasil",
                foto: "assets/wagner.jfif"
            }
        }
    },
    {
        titulo: "presidente",
        proxima: "inde6.html",
        limite: 2,
        candidatos: {
            "13": {
                nome: "Luiz Inácio Lula da Silva",
                partido: "PT",
                foto: "assets/lula.jfif"
            },
            "22": {
                nome: "Jair Bolsonaro",
                partido: "PL",
                foto: "assets/bozo.jfif"
            }
        }
    }
];

function obterCargo() {
    const titulo = document.querySelector(".titulo h1");

    if (!titulo) return null;

    const nome = titulo.textContent.trim().toLowerCase();

    return cargos.find(cargo => cargo.titulo === nome) || null;
}

function obterInput() {
    return document.getElementById("number");
}

function obterResultado() {
    let resultado = document.getElementById("resultado");

    if (!resultado) {
        resultado = document.createElement("div");
        resultado.id = "resultado";
        document.querySelector(".visor").appendChild(resultado);
    }

    return resultado;
}

function digitar(valor) {
    const input = obterInput();
    const cargo = obterCargo();

    if (!input || !cargo) return;

    if (input.value.length < cargo.limite) {
        input.value += valor;
    }
}

function corrigir() {
    const input = obterInput();
    const resultado = obterResultado();

    if (input) input.value = "";

    resultado.hidden = true;
    resultado.innerHTML = "";
    bloquearBotoes(false);
}

function branco() {
    const cargo = obterCargo();

    if (!cargo) {
        alert("Cargo não identificado!");
        return;
    }

    const resultado = obterResultado();

    resultado.hidden = false;
    resultado.innerHTML = `
        <h2>VOTO EM BRANCO</h2>
        <p>Cargo: ${cargo.titulo}</p>
        <p>Voto em branco selecionado!</p>
    `;

    bloquearBotoes(true);

    setTimeout(() => {
        irParaProximaTela(cargo);
    }, 3000);
}

function confirmar() {
    const input = obterInput();
    const cargo = obterCargo();

    if (!input || !cargo) {
        alert("Não foi possível identificar o cargo!");
        return;
    }

    const numero = input.value.trim();

    if (numero === "") {
        alert("Digite o número do candidato!");
        return;
    }

    const candidato = cargo.candidatos[numero];

    if (!candidato) {
        alert("Número não encontrado para este cargo!");
        return;
    }

    const resultado = obterResultado();

    resultado.hidden = false;
    resultado.innerHTML = `
        <h2>VOTO CONFIRMADO</h2>
        <img src="${candidato.foto}"
             alt="Foto de ${candidato.nome}"
             width="120">
        <p><strong>Cargo:</strong> ${cargo.titulo}</p>
        <p><strong>Nome:</strong> ${candidato.nome}</p>
        <p><strong>Número:</strong> ${numero}</p>
        <p><strong>Partido:</strong> ${candidato.partido}</p>
        <p>Próxima tela em 3 segundos...</p>
    `;

    bloquearBotoes(true);

    setTimeout(() => {
        irParaProximaTela(cargo);
    }, 3000);
}

function bloquearBotoes(bloquear) {
    document.querySelectorAll(
        ".botoes button, .confirmar button"
    ).forEach(botao => {
        botao.disabled = bloquear;
    });
}

function irParaProximaTela(cargo) {
    window.location.href = cargo.proxima;
}
