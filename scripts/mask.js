function inputTel(){
    let inp = document.querySelector('.inp-tel');
    console.log(document.querySelector('.inp-tel'));
    Inputmask({
        mask: '(999) 999-9999'
    }).mask(inp);
}

