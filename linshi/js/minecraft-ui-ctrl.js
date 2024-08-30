var stateBtn = new Array();
window.onload = function(){
    document.getElementById("minecraft-ui-manager").onclick = function(){
        for(var i=0;i<document.getElementsByClassName("state-button").length;i++){
            stateBtn[i] = document.getElementsByClassName("state-button")[i];

            stateBtn[i].style.backgroundColor = "green";

            stateBtn[i].onclick = function(){
                alert("a")
            }
        }
    }
}