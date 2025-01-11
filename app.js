
// 🎯 Seleccionamos los elementos HTML donde mostraremos los valores de días, horas, minutos y segundos.
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// 🎯 Definimos la fecha objetivo para el countdown, el 1 de 
// enero de 2026 a las 00:00:00.
// 'getTime()' convierte esta fecha en milisegundos desde 
// el 1 de enero de 1970 (Epoch Unix).
const targetDate = new Date('January 1, 2026 00:00:00').getTime();

// 🕒 Función principal que actualiza el countdown
function updateCountdown() {
    // 🗓️ Obtenemos la fecha y hora actual en milisegundos
    const now = new Date().getTime();
    
    // 🧮 Calculamos la diferencia entre la fecha objetivo
    //  y la fecha actual
    const difference = targetDate - now;

    // 📅 Cálculo de días restantes
    // 1000 milisegundos → 1 segundo
    // 60 segundos → 1 minuto
    // 60 minutos → 1 hora
    // 24 horas → 1 día
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    // ⏳ Cálculo de horas restantes después de restar los días completos
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // ⏱️ Cálculo de minutos restantes después de restar las horas completas
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    // ⏲️ Cálculo de segundos restantes después de restar los minutos completos
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // 🖥️ Actualizamos los elementos HTML con los valores calculados
    // toString(): Convierte los números en cadenas.
    // padStart(2, '0'): Asegura que los números tengan siempre 2 dígitos (ej. 5 → '05').
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');

    // 🎆 Mensaje opcional cuando llegamos al año nuevo
    if (difference <= 0) {
        clearInterval(countdownInterval); // Detenemos el temporizador
        document.querySelector('.countdown-container').innerHTML = '<h1>🎉 ¡Feliz Año Nuevo 2026! 🎊</h1>';
    }
}

// 🚀 Llamamos a la función inicialmente para evitar un retraso al cargar la página
updateCountdown();

// 🔄 Usamos setInterval para actualizar el countdown cada segundo (1000 milisegundos)
const countdownInterval = setInterval(updateCountdown, 1000);
