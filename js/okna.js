window.addEventListener('DOMContentLoaded', (event) => {
   initWindows();
});

function initWindows(){
    let remontBlock = document.getElementById('okna-remont');
    let poddBlock = document.getElementById('okna-podd');
    let remontBtn = document.getElementById('remont-btn');
    let poddBtn = document.getElementById('podd-btn');

    remontBlock.style.display = 'none'; // изначально блок с классом okna-remont скрыт

    remontBtn.addEventListener('click', showBlockRemont);

    function showBlockRemont(e){
        remontBlock.style.display = 'flex'; // делаем блок с классом okna-remont видимым
        poddBlock.style.display = 'none'; // скрываем блок с классом okna-podd
    }

    poddBtn.addEventListener('click', showBlockPodd);

    function showBlockPodd(e){
        remontBlock.style.display = 'none'; // скрываем блок с классом okna-remont
        poddBlock.style.display = 'flex'; // делаем блок с классом okna-podd видимым
    }
}