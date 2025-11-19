// Botón cambiar modo claro/oscuro
const btn = document.getElementById('toggle-dark');

// Modo oscuro: persistencia y visual
if (localStorage.getItem('plant-modo') === 'oscuro') {
    document.body.classList.add('dark');
    btn.textContent = "☀️";
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        btn.textContent = "☀️";
        localStorage.setItem('plant-modo', 'oscuro');
    } else {
        btn.textContent = "🌙";
        localStorage.setItem('plant-modo', 'claro');
    }
});

// Scroll a la sección de contacto al pulsar "Comprar"
document.querySelectorAll('.product button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('contacto').scrollIntoView({behavior: 'smooth'});
    });
});