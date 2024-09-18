window.addEventListener('DOMContentLoaded', (event) => {
    initOffice();
});

function initOffice(){
    let genBlock = document.getElementById('ofis-gen');
    let remontBlock = document.getElementById('ofis-remont');
    let regBlock = document.getElementById('ofis-reg');
    
    let ofisGenBtn = document.getElementById('ofis-gen-btn');
    let ofisRemontBtn = document.getElementById('ofis-remont-btn');
    let ofisRegBtn = document.getElementById('ofis-reg-btn');

    genBlock.style.display = 'none';
    remontBlock.style.display = 'none';
    regBlock.style.display = 'none';

    ofisGenBtn.addEventListener('click', showBlockGen);
    ofisRemontBtn.addEventListener('click', showBlockRemont);
    ofisRegBtn.addEventListener('click', showBlockReg);

    function showBlockGen(){
        genBlock.style.display = 'flex';
        remontBlock.style.display = 'none';
        regBlock.style.display = 'none';
    }

    function showBlockRemont(){
        genBlock.style.display = 'none';
        remontBlock.style.display = 'flex';
        regBlock.style.display = 'none';
    }

    function showBlockReg(){
        genBlock.style.display = 'none';
        remontBlock.style.display = 'none';
        regBlock.style.display = 'flex';
    }

    // Показ блока с генеральной уборкой по умолчанию
    showBlockGen();
}