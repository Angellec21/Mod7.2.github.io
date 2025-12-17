// Obtener el checkbox y el elemento html
const checkbox = document.getElementById('checkbox');
const html = document.documentElement;

// Verificar si hay un tema guardado en localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
checkbox.checked = savedTheme === 'dark';

// Agregar evento al checkbox para cambiar tema
checkbox.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', newTheme);
});
