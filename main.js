window.addEventListener('load',function(){
    const preloader=document.getElementById('preloader');
    const content=document.getElementById('content');

    preloader.style.opacity='0';
    this.setTimeout(()=>{
        preloader.style.display='none';
        content.classList.add('show');
    }, 9000)
});