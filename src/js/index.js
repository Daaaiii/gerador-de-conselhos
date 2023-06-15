const adviceId = document.querySelector('.advice-id')
const adviceDescription = document.querySelector('.advice-description')
const adviceUpdate = document.querySelector(".advice-update")

async function pegarConselhos() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function pegarUmConselho() {
    const conselho = await pegarConselhos()    
    adviceUpdate.addEventListener('click', pegarUmConselho);
    adviceId.innerHTML = "ADVICE #" + conselho.slip.id;
    adviceDescription.innerHTML =`"${conselho.slip.advice}"` ;
   
}

pegarUmConselho()


