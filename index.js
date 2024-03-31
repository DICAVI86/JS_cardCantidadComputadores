precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let totalProd = 1;

//FUNCION AUMENTA

function aumentaClick() {
    cantidadSpan = document.querySelector(".cantidad");
    aumentar = Number(cantidadSpan.innerHTML);
    aumentar++;
    cantidadSpan.innerHTML = aumentar;
    pagarSpan = document.querySelector(".valor-total");
    pagarSpan.innerHTML = precio * aumentar;
  }
  
 //FUNCION AUMENTA

  function disminuyeClick() {
    cantidadSpan = document.querySelector(".cantidad");
    disminuir = Number(cantidadSpan.innerHTML);
    disminuir--;
    cantidadSpan.innerHTML = disminuir;
    pagarSpan = document.querySelector(".valor-total");
    pagarSpan.innerHTML = precio * disminuir;
  }