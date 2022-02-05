function countLikes(e) {
    var count;
    //console.log(document.querySelector("#likes1"));
    if(e.id=="btn-like1"){
        count=document.querySelector("#likes1");        
        count.innerHTML=(parseInt(count.innerHTML)) +1;
    }else if(e.id=="btn-like2"){
        count=document.querySelector("#likes2");
        count.innerHTML=(parseInt(count.innerHTML)) +1;
    }else{
        count=document.querySelector("#likes3");
        count.innerHTML=(parseInt(count.innerHTML)) +1;
    }
}