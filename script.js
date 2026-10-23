// Define a data do primeiro dia do ENEM 2026 (1 de Novembro de 2026)
const dataEnem = new Date("November 1, 2026 13:00:00").getTime();

function atualizarCronometro() {
    const agora = new Date().getTime();
    const diferenca = dataEnem - agora;

    const elementoDias = document.getElementById("dias");
    const elementoHoras = document.getElementById("horas");
    const elementoMinutos = document.getElementById("minutos");
    const elementoSegundos = document.getElementById("segundos");
    const mensagemStatus = document.getElementById("mensagem-status");

    // Condição: Se o tempo acabou
    if (diferenca <= 0) {
        elementoDias.textContent = "00";
        elementoHoras.textContent = "00";
        elementoMinutos.textContent = "00";
        elementoSegundos.textContent = "00";
        
        mensagemStatus.textContent = "📝 O ENEM começou! Vá com tudo!";
        mensagemStatus.style.color = "#ff3333";
        return;
    }

    // Cálculos do tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Injeta os dados formatados na tela
    elementoDias.textContent = dias < 10 ? "0" + dias : dias;
    elementoHoras.textContent = horas < 10 ? "0" + horas : horas;
    elementoMinutos.textContent = minutos < 10 ? "0" + minutos : minutes;
    elementoSegundos.textContent = segundos < 10 ? "0" + segundos : segundos;

    // Condições que alteram o tom do vermelho baseado na urgência dos dias restantes
    if (dias > 90) {
        mensagemStatus.textContent = "🚨 O tempo está correndo. Mantenha os seus estudos em dia!";
        mensagemStatus.style.color = "#ff4d4d"; // Vermelho mais claro para leitura fluida
    } else if (dias <= 90 && dias > 30) {
        mensagemStatus.textContent = "⏳ Faltam menos de 3 meses! Intensifique as revisões.";
        mensagemStatus.style.color = "#ff3333";
    } else {
        mensagemStatus.textContent = "⚠️ RETA FINAL! A prova está muito próxima, foco total!";
        mensagemStatus.style.color = "#ff0000"; // Vermelho puro/alerta máximo
    }
}

// Atualiza o visor a cada 1 segundo
setInterval(atualizarCronometro, 1000);

// Roda imediatamente ao carregar a página
atualizarCronometro();
