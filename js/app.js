const formulario = document.getElementById("form");

formulario.addEventListener("submit", (e) => {
  let temperatura = document.getElementById("temperatura").value;
  let humedad = document.getElementById("humedad").value;
  let voltaje = document.getElementById("voltaje").value;

  const datos = {
    temperatura,
    humedad,
    voltaje,
  };
  if (localStorage.getItem("datos") == null) {
    let tareas = [];
    tareas.push(datos);
    localStorage.setItem("datos", JSON.stringify(tareas));
  } else {
    let tareas = JSON.parse(localStorage.getItem("datos"));
    tareas.push(datos);
    localStorage.setItem("datos", JSON.stringify(tareas));
  }
  MOstrar();

  e.preventDefault();
});

function MOstrar() {
  let tareas = JSON.parse(localStorage.getItem("datos"));
  console.log(tareas)
  let mostrar = document.getElementById("mostrar");
  mostrar.innerHTML = "";
  for(let i=0 ; i< tareas.length;i++){
      let temperatura = tareas[i].temperatura
      let humedad = tareas[i].humedad
      let voltaje = tareas[i].voltaje
      mostrar.innerHTML += `
      <tr>
      <th scope="row">${i+1}</th>
      <td>${temperatura}</td>
      <td>${humedad}</td>
      <td>${voltaje}</td>
      <td><a href="#" class="btn btn-danger" onclick="Eliminar('${temperatura}')">Eliminar</a></td>
    </tr>
      `
  }

}

function Eliminar(temperatura){
    let tareas = JSON.parse(localStorage.getItem("datos"))
    for (let i=0 ; i<tareas.length;i++){
        if(tareas[i].temperatura == temperatura){
            tareas.splice(i,1)
        }
    }
    localStorage.setItem("datos",JSON.stringify(tareas))
    MOstrar()
}

MOstrar()
