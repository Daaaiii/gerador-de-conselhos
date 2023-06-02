async function pegarConselhos() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}


async function pegarUmConselho() {
    const conselho = await pegarConselhos()    
    document.querySelector(".advice-update").addEventListener('click',()=> pegarUmConselho());
    document.querySelector('.advice-id').innerHTML = "ADVICE #" + conselho.slip.id;
    document.querySelector('.advice-description').innerHTML =`"${conselho.slip.advice}"` ;
   
}

pegarUmConselho()


