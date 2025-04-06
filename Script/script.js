function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(async (el) => {
        const file = el.getAttribute('data-include');
        try {
            const resp = await fetch(file);
            const data = await resp.text();
            el.innerHTML = data;
        } catch (e) {
            el.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
        }
    });
}

window.addEventListener('DOMContentLoaded', includeHTML);
