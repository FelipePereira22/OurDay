var elementoContador = document.getElementById('contador-dias');
var dataInicio = new Date(2022, 6, 27, 0, 0, 0);
function plural(valor, singular, plural) {
    return valor === 1 ? singular : plural;
}
function atualizaContador() {
    var dataAtual = new Date();
    var anos = dataAtual.getFullYear() - dataInicio.getFullYear();
    var meses = dataAtual.getMonth() - dataInicio.getMonth();
    var dias = dataAtual.getDate() - dataInicio.getDate();
    if (dias < 0) {
        meses--;
        // Pega o número de dias do mês anterior para calcular a diferença correta
        dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }
    var horas = dataAtual.getHours() - dataInicio.getHours();
    var minutos = dataAtual.getMinutes() - dataInicio.getMinutes();
    var segundos = dataAtual.getSeconds() - dataInicio.getSeconds();
    if (segundos < 0) {
        minutos--;
        segundos += 60;
    }
    if (minutos < 0) {
        horas--;
        minutos += 60;
    }
    if (horas < 0) {
        dias--;
        horas += 24;
    }
    var tempoJuntos = "\n        <span><strong>".concat(anos, "</strong> ").concat(plural(anos, 'ano', 'anos'), "</span>\n        <span><strong>").concat(meses, "</strong> ").concat(plural(meses, 'mês', 'meses'), "</span>\n        <span><strong>").concat(dias, "</strong> ").concat(plural(dias, 'dia', 'dias'), "</span>\n        <span><strong>").concat(horas, "</strong> ").concat(plural(horas, 'hora', 'horas'), "</span>\n        <span><strong>").concat(minutos, "</strong> ").concat(plural(minutos, 'minuto', 'minutos'), "</span>\n        <span><strong>").concat(segundos, "</strong> ").concat(plural(segundos, 'segundo', 'segundos'), "</span>\n        ");
    elementoContador.innerHTML = tempoJuntos;
}
if (elementoContador) {
    setInterval(atualizaContador, 1000);
    atualizaContador();
}
else {
    console.error('Nada apareceu? houve erro! Mas uma coisa que é certeza e sem erro é meu amor por ti sasa.');
}
var todosOsCards = document.querySelectorAll('.foto-container .card');
todosOsCards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});
// --- LÓGICA PARA ABRIR E FECHAR O MODAL (CONVITE) ---
// Seleciona os elementos que vamos usar
var coracaoFooter = document.querySelector('.footer-icon');
var modalOverlay = document.getElementById('modal-convite');
var modalFecharBtn = document.getElementById('modal-fechar');
// Verifica se todos os elementos existem antes de adicionar os eventos
if (coracaoFooter && modalOverlay && modalFecharBtn) {
    // Função para abrir o modal
    var abrirModal_1 = function () {
        modalOverlay.classList.add('visible');
    };
    // Função para fechar o modal
    var fecharModal_1 = function () {
        modalOverlay.classList.remove('visible');
    };
    // Adiciona o evento de clique no coração
    coracaoFooter.addEventListener('click', function (event) {
        event.preventDefault(); // Impede qualquer comportamento padrão
        abrirModal_1();
    });
    // Adiciona o evento de clique no botão de fechar
    modalFecharBtn.addEventListener('click', fecharModal_1);
    // Adiciona o evento de clique no fundo escuro (overlay) para fechar
    modalOverlay.addEventListener('click', function (event) {
        // Só fecha se o clique for no overlay mesmo, e não no conteúdo do modal
        if (event.target === modalOverlay) {
            fecharModal_1();
        }
    });
}
