class Activity {
    constructor(title, description, imgUrl, ID){
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.ID = ID;
    }
    addID(id){
        this.ID=id;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.id=0;
    }
    getAllActivities(){
        return this.activities;
    }
    CreateAtivity(title,description,imgUrl){
        let Actividad = new Activity(title,description,imgUrl,this.id);
        this.activities.push(Actividad);
        this.id++;
    }
    deleteActivity(ID){
        let Eliminar = this.activities.filter((Activity) => Activity.ID !== ID);
        this.activities = Eliminar;
    }
}

//---------creamos el repositorio---------
const repositorio= new Repository();

///-------------entradas------------------
//tomamos las imputs
const titleLabel = document.getElementById('nameInput');
const descriptionLabel = document.getElementById('descrip');
const imgUrlLabel = document.getElementById('linkInput');
const buttonId = document.getElementById('button');
//selecionamos el contenedor
const containerLabel = document.getElementById('container');

//------------funcion que convierte las activitis en tarjetas--------
function goTargets(Object){
    let {title, description, imgUrl}=Object;
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let img = document.createElement('img');

    h3.innerHTML = title;
    p.innerHTML = description;
    img.src = imgUrl;

    const newDiv = document.createElement('div');
    newDiv.appendChild(h3);
    newDiv.appendChild(p);
    newDiv.appendChild(img);
    newDiv.classList.add("targets");
    newDiv.id = Object.ID;
    return newDiv;
    
}


//----------función de agregar la tarjeta---------
const addTarget =()=>{
    //leemos los valores de la tarjeta
    const title = titleLabel.value;
    const description = descriptionLabel.value;
    const imgUrl = imgUrlLabel.value;
    //comprobamos que no esten vacios
    if(title=="" || description=="" || imgUrl==""){
        window.alert("Faltan datos!");
        return;
    }
    //
    repositorio.CreateAtivity(title,description,imgUrl);
    containerLabel.innerHTML="";
    //
    let tarjetas = repositorio.activities.map(goTargets);
    tarjetas.forEach(tarjeta=>{
        containerLabel.appendChild(tarjeta);
    });
    titleLabel.value="";
    descriptionLabel.value="";
    imgUrlLabel.value="";

}
//--------click-----
buttonId.addEventListener("click", addTarget);

//--------remove-----
containerLabel.addEventListener('click', function(event) {
    // Verificamos si el elemento clickeado es un div con la clase 'elemento'
    if (event.target.classList.contains('targets')) {
      // Eliminamos el elemento clickeado
      event.target.remove();
      
    }
    let targetID = event.target.id;
    repositorio.deleteActivity(parseInt(targetID));
  });
