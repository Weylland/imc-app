<main class="container">
    <div class="row">
        <div class="col s12">
            <h1 class="center-align">Calcul de l'imc</h1>
            <div class="progress-container">
                <div class="circular-progress">
                    <div class="value-container">0</div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <form method="POST" class="col s12 form" id="calculForm">
            <input type="hidden" name="file" value="calcul_imc">
            <div class="inputCont">
                <div class="input-field">
                    <input id="taille" type="number" class="validate" name="taille">
                    <label for="taille">Taille</label>
                </div>
            </div>
            <div class="inputCont">
                <div class="input-field">
                    <input id="poids" type="number" class="validate" name="poids">
                    <label for="poids">Poids</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light calcBtn" id="calculBtn" type="submit" name="action">Calculer
                <i class="material-icons right"></i>
            </button>
        </form>
    </div>
</main>