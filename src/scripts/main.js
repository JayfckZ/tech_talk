AOS.init()

const dataEvento = new Date("Mar 28, 2024 19:00:00")
const timeStampEvento = dataEvento.getTime()


const contaTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAgora = agora.getTime()

    const distanciaAteEvento = timeStampEvento - timeStampAgora

    const diasEmMs = 1000*60*60*24
    const horasEmMs = 1000*60*60
    const minutosEmMs = 1000*60

    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs)
    const horasAteEvento = Math.floor((distanciaAteEvento % diasEmMs) / horasEmMs)
    const minutosAteEvento = Math.floor((distanciaAteEvento % horasEmMs) / minutosEmMs)
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMs) / 1000)
    
    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(distanciaAteEvento < 0){
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)