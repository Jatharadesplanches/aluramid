function somTocaGrilo (){ 
     document.querySelector("#som_tecla_grilo").play();
}
document.querySelector(".tecla-grilo").onclick = somTocaGrilo;

const listaDeTecla = document.querySelectorAll(".tecla");
listDeTecla[4].onclick = somTocaGrilo;