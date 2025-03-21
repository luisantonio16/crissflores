onload = () => {
    document.body.classList.remove("container");
  };


  document.addEventListener('DOMContentLoaded', function() {
    const titles = ['para una mujer linda','y' ,'Maravillosa'];
    let index = 0;
  
    function changeTitle() {
      document.getElementById('nombre').textContent = titles[index];
      index = (index + 1) % titles.length;
    }
  
    setInterval(changeTitle, 4000);
  });
  
