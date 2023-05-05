
const add = document.querySelector('.add');
const input = document.querySelector('input');
const ol = document.querySelector('ol');
const dltall = document.querySelector('#allclc');

const todoapp = ()=>{
    
     if(!input.value || input.value.trim().length === 0){
        alert("please,fill the gap");
     }
     else{
        const list = document.createElement("li");
        const trash = document.createElement("button");

        ol.appendChild(list);
        list.innerHTML=input.value;
        input.value ="";
        trash.innerHTML="TRASH";
        list.appendChild(trash);

        let li = document.querySelectorAll("li");
        for (var index = 0; index < li.length; index++) {
        }
        document.querySelector('.count').innerHTML=index;

         trash.onclick=()=>{
         list.remove();
         document.querySelector('.count').innerHTML=document.querySelector('.count').innerHTML-1;
        }

        dltall.onclick=()=>{
         let li = document.querySelectorAll("li");
         for (let index = 0; index < li.length; index++) {
            li[index].remove();
         }
        document.querySelector('.count').innerHTML=0;
        }
     }    
   }
add.addEventListener('click',todoapp);

   

