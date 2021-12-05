var tabBlocks = document.getElementsByClassName('.tab-block');
window.onload = function(){
    var tabButton = document.getElementsByClassName('.title-video');
    console.log(tabButton);
    for(var i=0; i<tabButton.length; i++){
        tabButton[i].onclick = function(){
            console.log("123");
        }
    }
}