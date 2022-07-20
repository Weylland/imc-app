const form = document.getElementById("calculForm");

calculForm.addEventListener("submit", async function(event) {    
    event.preventDefault();

    disable_submit(true);

    let response = await calcul_imc(form);

    animate_progress(response);

});

