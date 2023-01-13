
window.onload = function() {
    var box = document.getElementsByClassName('box');
    var large = document.getElementsByClassName('large-letter');
    var small = document.getElementsByClassName('small-letter');
    var img = document.getElementsByClassName('img');
    var text =document.getElementsByClassName('text');
    box.onclick = showDetail;
    function showDetail (num) {
        box[num].onclick = function () {
            large[num].style.opacity = "0";
            small[num].style.opacity = "0";
            img[num].style.opacity = "1";
            text[num].style.opacity ="1";

        };
    }

    box.ondblclick = showWord;
    function showWord (num) {
        box[num].ondblclick = function () {
            large[num].style.opacity = "1";
            small[num].style.opacity = "1";
            img[num].style.opacity = "0";
            text[num].style.opacity ="0";
        };
    }  

    for (var i = 0; i < img.length; i++) {
        showDetail(i);
        showWord(i);
        
    }
}
