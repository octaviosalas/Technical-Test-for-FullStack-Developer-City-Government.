export const getSchedule = () => { 
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    horas = horas < 10 ? `0${horas}` : horas;
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    const horaExacta = `${horas}:${minutos}`;
    return horaExacta;
} 
    
