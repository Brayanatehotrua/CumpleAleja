function celebrate() {
    // Agrega la clase 'celebration' al botón
    document.querySelector('.whatsapp-button').classList.add('celebration');

    // Deshabilita el clic para evitar animaciones repetidas
    document.querySelector('.whatsapp-button').removeAttribute('onclick');

    // Espera 2 segundos y luego remueve la clase 'celebration'
    setTimeout(function() {
        document.querySelector('.whatsapp-button').classList.remove('celebration');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el color de fondo del contenedor y aplicar el color de texto adecuado
    var container = document.querySelector('.container');
    var title = document.querySelector('.title');
    var description = document.querySelector('.description');
    var location = document.querySelectorAll('.location');
    var date = document.querySelectorAll('.date');
    var neonText = document.querySelector('.neon-text');
    var editableText = document.querySelector('.editable-text');

    // Obtener el color de fondo del contenedor
    var containerStyle = getComputedStyle(container);
    var backgroundColor = containerStyle.backgroundColor;
    var color = getContrastColor(backgroundColor);

    // Aplicar el color de texto adecuado
    title.style.color = color;
    description.style.color = color;
    for (var i = 0; i < location.length; i++) {
        location[i].style.color = color;
    }
    for (var j = 0; j < date.length; j++) {
        date[j].style.color = color;
    }
    neonText.style.color = color;
    editableText.style.color = color;
});

function getContrastColor(backgroundColor) {
    // Lógica para determinar el color de texto adecuado en base al color de fondo
    // ...
}

 const targetDate = new Date('2023-06-03');

 // Actualiza el contador cada segundo
 setInterval(updateCounter, 1000);
 
 function updateCounter() {
     const currentDate = new Date();
 
     // Calcula la diferencia entre la fecha objetivo y la fecha actual
     const diff = targetDate - currentDate;
 
     // Calcula los días, horas, minutos y segundos restantes
     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
     // Actualiza los elementos HTML del contador con los valores correspondientes
     document.getElementById('days').textContent = formatNumber(days);
     document.getElementById('hours').textContent = formatNumber(hours);
     document.getElementById('minutes').textContent = formatNumber(minutes);
     document.getElementById('seconds').textContent = formatNumber(seconds);
 }
 
 function formatNumber(number) {
     // Añade un cero al frente si el número es menor que 10
     return number < 10 ? '0' + number : number;
 }