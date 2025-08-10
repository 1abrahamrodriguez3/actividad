document.addEventListener("DOMContentLoaded", function(){
    const newsContainer = document.getElementById("news-container");
    
    // Cargar noticias dinámicamente
    fetch("news.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(noticia => {
                const div = document.createElement("div");
                div.classList.add("alert", "alert-info", "mt-2");
                div.textContent = `${noticia.titulo} - ${noticia.fecha}`;
                newsContainer.appendChild(div);
            });
        });

    // Validación del formulario
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name === "" || email === "" || message === ""){
            alert("Por favor, completa todos los campos.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            alert("Por favor, introduce un correo válido.");
            return;
        }

        alert("✅ Mensaje enviado correctamente!");
        form.reset();
    });
});
