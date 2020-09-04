

$("button").addClass("button");

const OnkeyPress=()=>{
    document.addEventListener('keydown',(event)=>{
        
        const keyCode = event.keyCode;
        
        let audioele = document.querySelector(`audio[data-key="${keyCode}"]`);
        if (!audioele)
        {  return ;
         }else{
            audioele.currentTime = 0;
             audioele.play();
             btnAnimatio(keyCode);
 
         }
       
        
    });

}

const btnAnimatio = (keyCode) =>{
    const btnElement = document.querySelector(`button[data-key="${keyCode}"]`);
    $(btnElement).css({
        width:"100px",
        height:"100px",
    });
    setTimeout(() => remove_Attr(keyCode),100);
    
    
    
}

const remove_Attr = (keyCode) => {
    const btn1Element = document.querySelector(`button[data-key="${keyCode}"]`);
    $(btn1Element).css({
        width:"90px",
        height:"70px",
    });
    
}