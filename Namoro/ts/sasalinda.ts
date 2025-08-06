const elementoContador = document.getElementById('contador-dias') as HTMLDivElement

const dataInicio: Date = new Date(2022, 6, 27, 0, 0, 0)

function plural(valor: number, singular: string, plural: string): string {
    return valor === 1 ? singular : plural; 
}

function atualizaContador(): void{
    const dataAtual: Date = new Date()

    let anos: number = dataAtual.getFullYear() - dataInicio.getFullYear()
    let meses: number = dataAtual.getMonth() - dataInicio.getMonth()
    let dias: number = dataAtual.getDate() - dataInicio.getDate()

       if (dias < 0) {
        meses--;
        // Pega o número de dias do mês anterior para calcular a diferença correta
        dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        }
        
        if (meses < 0) {
            anos--;
            meses += 12;
        }

    let horas: number = dataAtual.getHours() - dataInicio.getHours()
    let minutos: number = dataAtual.getMinutes() - dataInicio.getMinutes()
    let segundos: number = dataAtual.getSeconds() - dataInicio.getSeconds()
    
    
        if (segundos < 0) { minutos--; segundos += 60; }
        if (minutos < 0) { horas--; minutos += 60; }
        if (horas < 0) { dias--; horas += 24; }

        const tempoJuntos: string = `
        <span><strong>${anos}</strong> ${plural(anos, 'ano', 'anos')}</span>
        <span><strong>${meses}</strong> ${plural(meses, 'mês', 'meses')}</span>
        <span><strong>${dias}</strong> ${plural(dias, 'dia', 'dias')}</span>
        <span><strong>${horas}</strong> ${plural(horas, 'hora', 'horas')}</span>
        <span><strong>${minutos}</strong> ${plural(minutos, 'minuto', 'minutos')}</span>
        <span><strong>${segundos}</strong> ${plural(segundos, 'segundo', 'segundos')}</span>
        `

        elementoContador.innerHTML = tempoJuntos
    }
    
            if(elementoContador){
                setInterval(atualizaContador, 1000)

                atualizaContador()
            } else{
                console.error('Nada apareceu? houve erro! Mas uma coisa que é certeza e sem erro é meu amor por ti sasa.')
            }


const todosOsCards = document.querySelectorAll('.foto-container .card')
todosOsCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped')
    })
})