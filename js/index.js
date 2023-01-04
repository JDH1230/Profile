
// gnb 메뉴 
function gnb_show () {
    if(window.innerWidth < 768){
        document.getElementById("gnb").style.opacity = "1";
    }
}

function gnb_none() {
    if(window.innerWidth < 768){
        document.getElementById("gnb").style.opacity = "0";
    }
}