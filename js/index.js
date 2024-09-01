window.onload = function(){
    document.getElementById("page-last-change-time").innerHTML+=infm_wiki.last_change_time;
    document.getElementById("page-creater").innerHTML+=infm_wiki.creater;
    if(infm_wiki.type = "first_of_all"){
        document.getElementById("page-type").innerHTML+="在一切前面的";
    }
    document.getElementById("page-level").innerHTML+=infm_wiki.level;

    document.getElementById("head-img").ondragstart=function(){
        return false;
    }
}