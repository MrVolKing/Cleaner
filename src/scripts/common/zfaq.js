{
    var top1 = document.getElementById('top1');
    var top2 = document.getElementById('top2');
    var top3 = document.getElementById('top3');
    var top4 = document.getElementById('top4');


    var bottom1 = document.getElementById('bottom1');
    var bottom2 = document.getElementById('bottom2');
    var bottom3 = document.getElementById('bottom3');
    var bottom4 = document.getElementById('bottom4');


        top1.addEventListener('click', function () {
            bottom1.classList.toggle('faqvisible');
            top1.classList.toggle('shadownone');
            top2.classList.remove('shadownone');
            top3.classList.remove('shadownone');
            top4.classList.remove('shadownone');
            bottom2.classList.remove('faqvisible');
            bottom3.classList.remove('faqvisible');
            bottom4.classList.remove('faqvisible');
        });

        top2.addEventListener('click', function () {
            bottom2.classList.toggle('faqvisible');
            top2.classList.toggle('shadownone');
            top1.classList.remove('shadownone');
            top3.classList.remove('shadownone');
            top4.classList.remove('shadownone');
            bottom1.classList.remove('faqvisible');
            bottom3.classList.remove('faqvisible');
            bottom4.classList.remove('faqvisible');
        });

        top3.addEventListener('click', function () {
            bottom3.classList.toggle('faqvisible');
            top3.classList.toggle('shadownone');
            top2.classList.remove('shadownone');
            top1.classList.remove('shadownone');
            top4.classList.remove('shadownone');
            bottom2.classList.remove('faqvisible');
            bottom1.classList.remove('faqvisible');
            bottom4.classList.remove('faqvisible');
        });

        top4.addEventListener('click', function () {
            bottom4.classList.toggle('faqvisible');
            top4.classList.toggle('shadownone');
            top2.classList.remove('shadownone');
            top3.classList.remove('shadownone');
            top1.classList.remove('shadownone');
            bottom2.classList.remove('faqvisible');
            bottom3.classList.remove('faqvisible');
            bottom1.classList.remove('faqvisible');
        });
}