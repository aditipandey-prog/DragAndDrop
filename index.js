let lists=document.getElementsByClassName("fill_list");
let filled=document.getElementById("fill");
let emptied=document.getElementById("empty");
let reset=document.getElementById('btn');

for(list of lists){
    list.addEventListener("dragstart",function(e){ // an eventListener is being added one by one to the fill_list div 
        let selected=e.target;
       
        list.classList.add('dragging');
        emptied.classList.add('bigger');//when the drag starts the drop box will become a bit large to pop out.
        emptied.addEventListener("dragover",function(e){ //
            e.preventDefault();
        });
        emptied.addEventListener("drop",function(e){
            e.preventDefault
           
            if(selected!=null){
                emptied.appendChild(selected);//use to append the selected element in the drop box
                
            }
            selected=null;
            let banner= document.getElementsByClassName('banner');
            banner[0].classList.add('visible');// will make the successfull banner visible
            setTimeout(function(){
                banner[0].classList.remove('visible'); //will make the successfull banner disappear after 1 sec
            },1500);
        });
    });
    //  remove css classes from emptied class and list so that they can go back to their normal size
    list.addEventListener("dragend",function(e){
      
        emptied.classList.remove('bigger');
        list.classList.remove('dragging');
    })
} 
//  reset button functionality
reset.addEventListener("click",function(){
   for(list of lists){
      filled.append(list);
   }
   emptied.innerHTML="";
   selected=null;

})
