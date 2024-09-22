onload = () => {
    document.body.classList.remove("container");
  };


  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['para Shayna', 'la mujer mas sexy de todas'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('nombre').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 4000);
  });
  