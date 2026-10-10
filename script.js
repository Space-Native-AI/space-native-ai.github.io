(function(){
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if(toggle && menu){
    toggle.addEventListener('click',()=>{
      const isOpen=menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(isOpen));
      toggle.textContent=isOpen?'Close':'Menu';
    });
    menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';}));
  }
  document.querySelectorAll('[data-year]').forEach(e=>{e.textContent=String(new Date().getFullYear())});
})();
