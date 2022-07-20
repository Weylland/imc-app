async function calcul_imc(clacForm) {
  let promesse = new Promise((resolve, reject) => {
    let form = new FormData(clacForm);
    form.append("ajax", 1);

    let req = new XMLHttpRequest();
    req.open("POST", "calcul/");
    req.responseType = "json";
    req.onload = function () {
      resolve(req.response);
    };

    req.send(form);
  });

  return promesse;
}

async function animate_progress(imc) {
  let zone;
  let sup = "";

  if (imc > 60) {
    zone = "#c66262";
    sup = ">";
  } else if (imc > 40) {
    zone = "#c66262";
  } else if (imc >= 35) {
    zone = "#e17267";
  } else if (imc >= 20) {
    zone = "#f0887b";
  } else if (imc >= 25) {
    zone = "#f0bd63";
  } else if (imc >= 18.5) {
    zone = "#5cc1a3";
  } else if (imc >= 16.5) {
    zone = "#5cb3bc";
  } else if (imc < 16.5) {
    zone = "#638fbc";
  }

  let progressBar = document.querySelector(".circular-progress");
  let valueContainer = document.querySelector(".value-container");

  let progressValue = 0;
  let progressEndValue = Math.round(imc);
  let speed = 60;

  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}`;
    progressBar.style.background = `conic-gradient(
      ${zone} ${progressValue * 3.6 * 2}deg,
      #cadcff ${progressValue * 3.6 * 2}deg
  )`;
    if (progressValue == progressEndValue || progressValue >= 60) {
      valueContainer.textContent = `${imc}${sup}`;
      clearInterval(progress);
      disable_submit(false);
    }
  }, speed);
}

function disable_submit(bool) {
  let calculBtn = document.getElementById('calculBtn');
  if (bool) {
    calculBtn.classList.add("disabled");
  } else if (bool == false) {
    calculBtn.classList.remove("disabled");
  }
}