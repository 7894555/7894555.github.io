let theme =document.querySelector('.themebutton')
theme.addEventListener("click",function(){
 document.body.classList.toggle("dark");
})

let post = document.querySelector('.post');
let more = post.querySelector('.more');
more.onclick=function(){
    alert("!");
    post.classList.remove('short');
}







































































