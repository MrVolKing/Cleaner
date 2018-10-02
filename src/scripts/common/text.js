
    // var textwrap = document.getElementById('textwrap');
    // var hidden = document.getElementById('hidden');
    // var shadow = document.getElementById('shadow');

    // textwrap.addEventListener('click', function () { 
    //     hidden.classList.toggle('hidden');
    //     shadow.classList.toggle('shadownone');
    // });


    var popap = document.getElementById('popap');
    var openmodal = document.getElementById('openmodal');
    var close = document.getElementById('close');

    popap.addEventListener('click', function () {
        openmodal.classList.add('modalDialogActive');
    });

    close.addEventListener('click', function () {
        openmodal.classList.remove('modalDialogActive');
    });

